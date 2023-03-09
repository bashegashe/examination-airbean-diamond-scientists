const PROMOTIONS = [
  {
    description:
      'Göteborg fyller 400 år!\n\nKöp en Bryggkaffe och en Gustav Adolfsbakelse för 40 kr!\n\nMax 1 köp/kund.',

    style: {
      background: 'lightblue',
    },

    combineProducts: true, // default -> false - om produkterna nedan ska kombineras och visas på en rad

    productsRequired: [
      {
        name: 'Bryggkaffe',
        price: 20,
      },
      {
        name: 'Gustav Adolfsbakelse',
        price: 20,
      },
    ],
  },
];

function getPromotionCart(stateCart) {
  let promotionCart = JSON.parse(JSON.stringify(stateCart));
  let allPromotions = JSON.parse(JSON.stringify(PROMOTIONS));

  // Wrappa enskilda kampanjer i en array för enklare hantering
  allPromotions.map((promotion) => {
    if (!Array.isArray(promotion.productsRequired))
      promotion.productsRequired = [promotion.productsRequired];
  });

  // Gå igenom alla kampanjer till att börja med och filtrera bort ej aktuella kampanjer
  // där kampanjprodukterna inte finns i carten eller om det finns ett min-krav som ej uppfyllts
  allPromotions = allPromotions.filter((promotion) => {
    return promotion.productsRequired.every((currentPromotion) => {
      currentPromotion.min = currentPromotion.min || promotion.min || 1;

      return promotionCart.some((cartItem) => {
        return (
          cartItem.title === currentPromotion.name &&
          cartItem.quantity >= currentPromotion.min
        );
      });
    });
  });

  let noCombinationPromotionExists = false;

  allPromotions.reverse(); // Kampanjer högre upp ska ha högre prioritering

  // Kolla så alla kampanjer har en 'priority' egenskap samt om det finns kampanjer som ej får kombineras
  // Om priority egenskap ej finns, använd index i array
  allPromotions.map((promotion, i) => {
    if (!promotion.priority) promotion.priority = i;
    if (promotion.canBeCombinedWithOtherPromotions === false)
      noCombinationPromotionExists = true;
  });

  // Sortera kampanjerna efter prioritet för enklare hantering
  allPromotions.sort((a, b) => a.priority - b.priority);

  // Om minst en kampanj hittades som ej får kombineras, ta bort alla kampanjer förutom den sista
  // som efter sortering ovan har högst prioritet
  if (noCombinationPromotionExists) allPromotions = allPromotions.slice(-1);

  // Om det fortfarande finns fler än 1 kampanj kvar här, så är det kampanjer som får kombineras med andra
  if (allPromotions.length > 1) {
    // Kommer hålla {produktnamn: lägsta/högsta pris} beroende på konfiguration
    const promotionPrices = {};

    // Spara ner kampanjpriset utefter kombinationsstrategi, antingen högsta priset eller lägsta priset
    allPromotions.map((promotion) => {
      const combinationStrategy =
        promotion.combinationStrategy || 'highest price';

      promotion.productsRequired.map((product) => {
        if (product.name in promotionPrices) {
          if (
            combinationStrategy === 'lowest price' &&
            product.price < promotionPrices[product.name]
          ) {
            promotionPrices[product.name] = product.price;
          } else if (
            combinationStrategy !== 'lowest price' &&
            product.price > promotionPrices[product.name]
          ) {
            promotionPrices[product.name] = product.price;
          }
        } else {
          promotionPrices[product.name] = product.price;
        }
      });
    });

    // Applicera det nya priset på alla berörda produkter
    allPromotions.map((promotion) => {
      promotion.productsRequired.map((product) => {
        if (product.name in promotionPrices) {
          product.price = promotionPrices[product.name];
        }
      });
    });
  }

  // Nu kan alla kampanjer appliceras så att promotionCart fylls och modifieras att inkludera kampanjprodukter
  allPromotions.map((promotion) => {
    applyPromotion(promotion, promotionCart);
  });

  promotionCart = promotionCart.filter((cartItem) => cartItem.quantity > 0);

  // Sortera den nya carten (kampanjer tillagda) alfabetiskt
  promotionCart.sort((a, b) =>
    a.title !== b.title ? (a.title < b.title ? -1 : 1) : 0
  );

  return promotionCart;
}

function applyPromotion(promotion, promotionCart) {
  // Om produkterna i kampanjen ska kombineras och visas på en rad i carten
  if (promotion.combineProducts === true) {
    // Reducera ner alla kampanjobjekt till ett enskilt nytt objekt
    const combinedProduct = promotion.productsRequired.reduce(
      (acc, cur) => {
        if (acc.title) acc.title = acc.title + ' & ' + cur.name;
        else acc.title = cur.name;

        if (acc.promotion.price) acc.promotion.price += cur.price;
        else acc.promotion.price = cur.price;

        if (acc.price) {
          acc.price += promotionCart.find((cartItem) => {
            return cartItem.title === cur.name;
          }).price;
        } else {
          acc.price = promotionCart.find((cartItem) => {
            return cartItem.title === cur.name;
          }).price;
        }

        return acc;
      },
      {
        promotion: {
          description: promotion.description,
          style: promotion.style,
          promotionItems: promotion.productsRequired,
        },
      }
    );

    // Hämta ursprungliga produkterna från carten som är del av kampanjen
    const originalItems = promotionCart.filter((cartItem) => {
      return promotion.productsRequired.some((product) => {
        return product.name === cartItem.title && !('promotion' in cartItem);
      });
    });

    // Hitta minsta gemensamma kvantitet bland de, vilket blir kvantiteten för den kombinerade produkten
    let lowestOriginalQuantity = Math.min(
      ...originalItems.map((cartItem) => cartItem.quantity)
    );

    // Såvida det inte finns en övre gräns och den minsta kvantiteten överstiger den övre gränsen
    if (promotion.max) {
      if (lowestOriginalQuantity >= promotion.max) {
        combinedProduct.quantity = promotion.max;
      } else {
        combinedProduct.quantity = lowestOriginalQuantity;
      }
    } else {
      combinedProduct.quantity = lowestOriginalQuantity;
    }

    // Priset för kombinationsprodukten baseras på kombinationskvantiteten
    combinedProduct.price *= combinedProduct.quantity;

    // Nu när kombinationsprodukten är redo, ta bort produkterna från carten som användes för att bygga upp den
    promotionCart.map((cartItem) => {
      if (
        promotion.productsRequired.some((product) => {
          return product.name === cartItem.title;
        })
      ) {
        cartItem.quantity -= combinedProduct.quantity;
      }
    });

    promotionCart.push(combinedProduct);
  } else {
    // Om varje produkt istället bara ska visa sin egna del av kampanjen och inte kombineras med andra
    promotion.productsRequired.map((singlePromotion) => {
      let originalItemIndex = -1;

      const originalItem = promotionCart.find((cartItem, i) => {
        if (singlePromotion.name === cartItem.title) {
          originalItemIndex = i;

          return true;
        }
      });

      // Använd global max om det inte finns enskilda max
      if (!singlePromotion.max) singlePromotion.max = promotion.max;

      // Om det finns ett max-antal för kampanjen som överstigits,
      // skapa en ny kopia på produkten med rabattpriset och max-antalet som antal
      // och lägg till den innan originalprodukten
      if (singlePromotion.max && originalItem.quantity > singlePromotion.max) {
        originalItem.quantity -= singlePromotion.max;

        const promotionItem = { ...originalItem };

        promotionItem.quantity = singlePromotion.max;
        promotionItem.promotion = {
          ...singlePromotion,
          ...{ style: promotion.style, description: promotion.description },
        };

        // Kan eventuellt bara pusha om array ändå ska sorteras i slutet
        promotionCart.splice(
          originalItemIndex != 0 ? originalItemIndex - 1 : 0,
          0,
          promotionItem
        );
      } else {
        // Om max-antalet inte överstigits kan alla produkter av den typen ha rabattpriset
        // originalItem.promotionPrice = promotion.price;
        originalItem.promotion = {
          ...singlePromotion,
          ...{ style: promotion.style, description: promotion.description },
        };
      }
    });
  }
}

export default getPromotionCart;

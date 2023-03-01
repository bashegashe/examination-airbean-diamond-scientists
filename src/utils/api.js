const BASE_URL = 'https://airbean.awesomo.dev/api';

async function getRequest(url, token) {
    const headers = {
        accept: 'application/json'
    };

    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(url, {headers});
    const data = await response.json();

    return data;
}

async function postRequest(url, body, token) {
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    }

    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    });

    const data = await response.json();

    return data;
}
 
/* ------------------------------------------------------------- */

// GET REQUESTS
/* ------------------------------------------------------------- */
async function getCoffeMenu() {
    const response = await getRequest(`${BASE_URL}/beans`);

    return response.menu;
}

// Token kan utelämnas för att få en gästs order
async function getOrder(orderNr, token) {
    const response = await getRequest(`${BASE_URL}/beans/order/status/${orderNr}`, token);

    return response;
}

async function getUserHistory(token) {
    const response = await getRequest(`${BASE_URL}/user/history`, token);

    return response;
}

async function isLoggedIn(token) {
    const response = await getRequest(`${BASE_URL}/user/status`, token);

    return response.success;
}

// POST REQUESTS
/* ------------------------------------------------------------- */

// Token kan utelämnas för att lägga order som gäst
async function makeNewOrder(item, token) { // item = {name: 'string', price: number}
    const makeOrderResult = await postRequest(`${BASE_URL}/beans/order`, {
        "details": {
            "order": [
                {
                    "name": item.name,
                    "price": item.price
                }
            ]
        }
    }, token);

    return makeOrderResult;
}

async function createNewUser(user) { // user = {username: 'string', password: 'string'}
    const newUserResult = await postRequest(`${BASE_URL}/user/signup`, {
        username: user.username,
        password: user.password,
    });

    return newUserResult;
}

async function logUserIn(user) { // user = {username: 'string', password: 'string'}
    const loggedResult = await postRequest(`${BASE_URL}/user/login`, {
        username: user.username,
        password: user.password,
    });

    return loggedResult;
}

export {
    getCoffeMenu, 
    getOrder, 
    getUserHistory, 
    isLoggedIn, 
    makeNewOrder, 
    createNewUser, 
    logUserIn
}
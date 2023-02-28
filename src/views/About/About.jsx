import React from 'react';
import "./About.css";
import Header from '../../assets/header.svg';
import Footer from '../../assets/footer.svg';
import Lady from '../../assets/grey-lady.svg';
import openIcon from '../../assets/navicon-open.svg'

const About = () => {
    return (
        <div className='about'>
            <header className="about__header">
                <img src={Header}/>
                <img id="about__icon"src={openIcon}/>
                
            </header>
            <section className="about__content">
                <h1 className='about__content__title'>Vårt kaffe</h1>
                <article className='about__content__sub_title'>
                <p>Pumpkin spice mug, barista cup, sit macchiato, 
                kopi-luwak, doppio, grounds dripper, crema, strong whipped, 
                variety extra iced id lungo half and half mazagran. 
                Pumpkin spice.</p> 
                </article>

                <article className='about__content__text'>
                <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, 
                as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. 
                So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, 
                single origin, and robusta strong to go so dripper. 
                Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, 
                frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p> 
              
               <p>Roast id macchiato, 
                single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, 
                whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, 
                steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. 
                In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. 
                Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, 
                percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
                </article>
          
            </section>
            <figure className='about__founder'>
                <img src={Lady} style={{height:"74px"}}/>
                <h1>Eva Cortado</h1>
                <p>VD & Grundare</p>
            </figure>
        <footer className="about__footer">
            <img src={Footer}/>
        </footer>
        </div>
    );
};

export default About;
import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div className="home__row">
                <Product id='12321341' title='The Lean Startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5} />
                <Product id='32921341'  title='KenWood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk,5 Litre Glass Bowl' price={299.0} image='https://m.media-amazon.com/images/I/61e+uh5aUGL._AC_UY327_FMwebp_QL65_.jpg' rating={4} />

                
                
                 
                 
            </div>
            <div className="home__row">
            <Product id='12321378' title='Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)' price={399.0} image='https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL480_QL65_.jpg' rating={3} />
            <Product id='12321396' title='HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink with HP+ (26K67A)' price={29.99} image='https://m.media-amazon.com/images/I/61UdeL7aO-L._AC_UL480_QL65_.jpg' rating={5} />
            <Product id='12321659' title='Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote' price={115.0} image='https://m.media-amazon.com/images/I/717dWfmxXVL._AC_UL480_QL65_.jpg' rating={3} />

            
                 
            </div>
            <div className="home__row">
            <Product id='22321341' title='Donerton Gaming Headset, Over-Ear Gaming Headphones with Noise Canceling Mic' price={29.99} image='https://m.media-amazon.com/images/I/71vwqTBgYuL._AC_UY327_FMwebp_QL65_.jpg' rating={5} />
                
                 
                 
            </div>
        </div>
    </div>
  );
}

export default Home;
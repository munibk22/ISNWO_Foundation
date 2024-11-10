import React from 'react';
import './payments.css'
import PayPalDonation from '../donate/PayPalDonation';
import ZeffyDonateButton from '../donate/ZeffyDonateButton';


function Pricing() {
    return (<>
        <article className='card-article price-container'>            
                <h4>- We accept Credit Card, Paypal, or Zeffy -</h4> 
                    {/* <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" alt="UTF-8" /> */}
                    <PayPalDonation />
                    <ZeffyDonateButton />
        </article>
    </>
    );
}

export default Pricing;
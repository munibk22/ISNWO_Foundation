import React from 'react';
import './pricing.css'
import PayPalDonation from '../donate/PayPalDonation';
// import DonateButton from '../donate/DonateButton';


function Pricing() {
    return (<>
        <article className='card-article'>            
                <h4>Paypal, Zelle, and Venmo:</h4>
                {/* <DonateButton />  */}
                <div id="donate-button-container">
                    
                    {/* <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" alt="UTF-8" /> */}
                    <PayPalDonation />

                </div>
        </article>
    </>
    );
}

export default Pricing;
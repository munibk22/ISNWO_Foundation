import React from 'react';
import './pricing.css'
// import DonateButton from '../donate/DonateButton';

function Pricing() {
    return (<>
        <article className='card-article'>
            <div className=''>
                <h4>Paypal, Zelle, and Venmo:</h4>
                {/* <DonateButton />  */}
                <div id="donate-button-container">
                    <div id="donate-button"></div>
                    <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" alt="UTF-8" />

                </div>

            </div>
        </article>
    </>
    );
}

export default Pricing;
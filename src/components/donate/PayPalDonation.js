import React from 'react'

function PayPalDonation() {
    return (
        <>
        <span> Donate with Credit Card or Paypal 
            {/* <img src='https://i.imgur.com/rOEDdCm.png[/img]' alt='Zeffy logo' /> */}
        </span> 
        <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="WAXCQN35XURF4" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>

        </>
    )
}

export default PayPalDonation
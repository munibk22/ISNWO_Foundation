import React from 'react'

function PayPalDonation() {
    const primaryImgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QEq9pXmCxv8Jz3ho_j8vWjCAygMx07dy7w&s';
    const fallbackImgSrc = 'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg';

    return (
        <>
        <span style={{display:"flex", alignItems:"center"}}> Donate with <em>&nbsp;Credit Card&nbsp;</em> or &nbsp; <img src={primaryImgSrc ? primaryImgSrc : fallbackImgSrc}
        width='100'         
        alt='Paypal img'/>          
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

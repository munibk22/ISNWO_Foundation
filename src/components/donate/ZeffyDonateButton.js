import React, { useEffect, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const ZeffyDonateButton = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js";
      script.async = true;
      document.body.appendChild(script);

      document.getElementById('donateButton').addEventListener('click', function() { 
        try {
          const width = 600;
  const height = 400;
          const left = (window.screen.width - width) / 2;
          const top = (window.screen.height - height) / 2;
          const featureStr = `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no`;
          const newWindow = window.open('https://www.zeffy.com/embed/donation-form/96492c35-dabe-406a-a140-fe24ba0796d6?modal=true', 
            featureStr,
            'popup', 
            );
          if (newWindow == null)
            alert('Please allow popups for this website');          
        } catch (error) {
          console.log('Error opening new window: ', error);
        }
      });

      return () => {
        document.body.removeChild(script);
      };
    }, []);


    return (
      <>
      <hr />
      <span> Donate with  <img src='https://i.imgur.com/rOEDdCm.png[/img]' alt='Zeffy logo' />
      </span> 
      <button id='donateButton' type='button'
      zeffy-form-link="https://www.zeffy.com/embed/donation-form/96492c35-dabe-406a-a140-fe24ba0796d6?modal=true"
      className="zeffy-donate-button"   >
      Make a Donation
    </button>
      
       
      </>
    );
};

export default ZeffyDonateButton;

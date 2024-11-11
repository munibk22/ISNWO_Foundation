import React, { useEffect, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const ZeffyDonateButton = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const mainImg = 'https://cdn.nwe.io/files/x/a1/4d/85c09937eab7c4f56097d36f2522.jpg';
    const altImg = 'https://i.imgur.com/rOEDdCm.png[/img]';

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
      <span style={{display:"flex", alignItems:"center"}}> Donate with  <img
      //  src=
       src= {mainImg ? mainImg : altImg}  width='120'  alt='Zeffy logo' />
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

import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const DonateButton = () => {
    return (
        <PayPalButtons
            style={{ width: '100%', height: '100px' }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency_code: 'USD',
                            value: '10.00'
                        }
                    }]
                });
            }}
            onApprove={(data, actions) => {
                console.log('Transaction approved:', data, actions);
            }}
            onError={(error) => {
                console.error('Error:', error);
            }}
        />
    );
};

export default DonateButton;

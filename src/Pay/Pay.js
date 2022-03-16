import React from "react";
import GooglePayButton from "@google-pay/button-react"

const GooglePay = ({cost}) => {
    const sum = cost.toFixed(2)
    // console.log(sum)
    return (
        <div>
        <GooglePayButton
            environment="TEST"
            paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                {
                    type: 'CARD',
                    parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                    },
                },
                ],
                merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: sum,
                currencyCode: 'USD',
                countryCode: 'US',
                },
            }}
            onLoadPaymentData={paymentRequest => {
                console.log('load payment data', paymentRequest);
            }}
            />
        </div>
    )
}
export default GooglePay
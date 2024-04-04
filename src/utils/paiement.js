// PaymentService.js
import { useStripe } from '@stripe/stripe-react-native';

const PaymentService = async (stripeClientSecret, publicKey, cardInfo, userInfo) => {
  const { confirmPayment, initStripe } = useStripe();
  initStripe({ publishableKey: publicKey }); // Initialiser Stripe avec la clé publique

  try {
    const { paymentIntent, error } = await confirmPayment(stripeClientSecret, {
      type: 'Card',
      billingDetails: {
        email: userInfo.email,
      },
      paymentMethodOptions: {
        card: cardInfo,
      },
    });

    if (error) {
      console.log('Error:', error);
      // Logique pour traiter les erreurs
      return;
    }

    if (paymentIntent.status === 'requires_capture') {
      console.log('Payment requires capture');
      // Logique pour le statut "requires_capture"
    } else if (paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded');
      // Logique pour le statut "succeeded"
    } else if (paymentIntent.status === 'failed') {
      console.log('Payment failed');
      // Logique pour le statut "failed"
    } else {
      console.log('Unknown payment status');
    }
  } catch (error) {
    console.log('Error:', error);
    // Logique pour traiter les erreurs
  }
};

export default PaymentService;

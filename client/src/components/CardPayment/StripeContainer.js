import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CardPayment from './CartPayment.js';

const PUBLIC_KEY = 'pk_test_51LNLdyLJQrG77gZseHENc5Ci4dKstdnM0pBBJr8s1SyqHnyZMXZHIlsMMs0wgHhGPqpkNhLH29j65A4HsYfYYkEW00SLbhqVPw';
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
        <CardPayment/>
        </Elements>
    )
}

export default StripeContainer;
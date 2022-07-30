import emailjs from "@emailjs/browser";

const baseUrl = 'http://localhost:4000/cart';

const createOrder = async ({ cart, userDetails, paymentMethod }) => {
    let response = await fetch(baseUrl, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ cart, userDetails, paymentMethod })
    });

    let result = await response.json();

    return result;
}
const sendEmail = (template_params) => {
    emailjs.send('service_2v0jqnu', 'template_uhrspdh', template_params, 'KoIx4k6LBbfML5ZXa')
        .then((result) => {
            return true;
        }, (error) => {
            console.log(error.text);
            return false;
        });

}
const cartService = {
    createOrder,
    sendEmail
}

export default cartService;
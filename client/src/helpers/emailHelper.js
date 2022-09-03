import emailjs from "@emailjs/browser";

const sendEmail = (template_params) => {
    emailjs.send('service_2v0jqnu', 'template_uhrspdh', template_params, 'KoIx4k6LBbfML5ZXa')
        .then((result) => {
            return true;
        }, (error) => {
            console.log(error.text);
            return false;
        });
}

export default sendEmail;
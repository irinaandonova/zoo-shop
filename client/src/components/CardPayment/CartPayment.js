const CardPayment = () => {
    const onResetHandler = (e) => {
        e.preventDefault();
        e.target.reset();
    }
    const onSubmitCardPayment = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const cardNumber = formData.get('cardNumber');
        const name = formData.get('name');
        const validThru = formData.get('validThru');
        const CVC = formData.get('CVC');

        const cardInfo = {
            cardNumber,
            name,
            validThru,
            CVC
        }
        
    }
    return (
        <article className="card-payment">
            <form className="card-payment-form" onSubmit={onSubmitCardPayment}>
                <label htmlFor="card-number">Номер на картата:</label>
                <input name="cardNumber" className="payment-fiels" />
                <label htmlFor="name">Имена:</label>
                <input name="name" className="payment-fiels" />
                <label htmlFor="valid-thru">Валидна до:</label>
                <input name="validThru" className="payment-fiels" />
                <label htmlFor="CVC">CVC</label>
                <input name="CVC" className="payment-fiels" />
                <article className="payment-form-btn">
                    <button type="submit" className="submit-btn">Предаване</button>
                    <button className="reset-btn" type="submit" onSubmit={onResetHandler}>Изчистване на полетата</button>
                </article>
            </form>
        </article>
    )
}

export default CardPayment;
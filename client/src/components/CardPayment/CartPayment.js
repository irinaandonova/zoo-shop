const CardPayment = () => {
    const onResetHandler = (e) => {
        e.preventDefault();
        e.target.reset();
    }
    
    return (
        <article className="card-payment">
            <form className="card-payment-form">
                <label htmlFor="card-number">Номер на картата:</label>
                <input name="card-number" className="payment-fiels" />
                <label htmlFor="name">Имена:</label>
                <input name="name" className="payment-fiels" />
                <label htmlFor="valid-thru">Валидна до:</label>
                <input name="valid-thru" className="payment-fiels" />
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
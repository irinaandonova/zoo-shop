import Alert from 'react-bootstrap/Alert';

function Alerts({ message }) {
    return (
        <article className='alert-article'>
            <Alert key={message} variant={'danger'}>
                {message}
            </Alert>
        </article>
    );
}

export default Alerts;
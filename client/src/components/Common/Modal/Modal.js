import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalMessage({ message, secondaryBtn, show, handleClose }) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          {
            message !== 'You already have an order that is being processed!' ?
              <Button variant="secondary" onClick={secondaryBtn.btnFunction}>
                {secondaryBtn.message}
              </Button>
              :
              null
          }
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMessage;
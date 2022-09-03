import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example(failureMessage, failureReason) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cannot {{failureMessage}}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{failureReason}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render(<Example />);
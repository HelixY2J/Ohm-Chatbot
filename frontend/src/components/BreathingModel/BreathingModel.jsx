import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Exercise from '../Breathing/BreathingLottie';


const BreathingModel = ({ show, onHide }) => {
  return (
    <Modal
    show={show} // Control modal visibility
    onHide={onHide} // Hide the modal on close
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    dialogClassName="modal-dialog-centered"
  >
    <Modal.Header closeButton>
        <Modal.Title>Breathing Exercise</Modal.Title>
      </Modal.Header >
    <Modal.Body style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
      <Exercise />
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
    </Modal.Footer>
    </Modal>
  );
};

export default BreathingModel;

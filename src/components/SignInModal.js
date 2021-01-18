import React from 'react';
import { Modal, Container } from "react-bootstrap";

function SignInModal(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <input placeholder="Email" className="form-control mb-2" type="email"/>
            <input placeholder="Hasło" className="form-control mb-2" type="text"/>
            <input placeholder="Powtórz hasło" className="form-control mb-2" type="text"/>
            <input placeholder="Telefon" className="form-control mb-2" type="text"/>
            <input placeholder="Imię" className="form-control" type="text"/>
            <small class="form-text text-muted ml-2 mb-1">(Opcjonalne)</small>
            <input placeholder="Nazwisko" className="form-control" type="text"/>
            <small class="form-text text-muted ml-2">(Opcjonalne)</small>
          </Container>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <button className="btn outline-button" onClick={props.onHide}>Anuluj</button>
          <button className="btn primary-button" onClick={props.onHide}>Wyślij</button>
        </Modal.Footer>
      </Modal>
    );
  }

export default SignInModal;
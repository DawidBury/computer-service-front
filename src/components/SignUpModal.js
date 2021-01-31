import React, { useState } from 'react';
import { Modal, Container } from "react-bootstrap";
import { signUp } from '../actions/authActions';

function SignUpModal(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [reapeatPassword, setReapeatPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.form);
    // props.signUp(this.state)   
  };
    return (
      
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn primary-button">Wyślij</button>
        </Modal.Footer>
        </form>
      </Modal>
      
    );
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user))
  }
}

export default SignUpModal;
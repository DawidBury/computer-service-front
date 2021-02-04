import React, { useState } from 'react';
import { Modal, Container } from "react-bootstrap";
import { signUp } from '../actions/authActions';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

function SignUpModal(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [alert, setAlert] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    validation();
    props.signUp({email, password, phone, firstName, lastName}); 
    e.target.reset();
    setAlert(true);
  };

  const validation = () => {
    if (password !== repeatPassword) {
      return false;
    } else if(email === '' || phone === '') {
      return false;
    }
  };
    return (
      <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body className="show-grid">
          <Container>
          { alert ? 
          <Alert variant="success"> <Alert.Heading>Wszystko poszło zgodnie z planem.</Alert.Heading>
            <p>
              Kliknij w link, który dostałeś w mejlu, abyś mógł się zalogować
            </p> 
          </Alert>
          : <div>
              <input required="true" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="form-control mb-2" type="email"/>
              <input required="true" value={password} onChange={e => setPassword(e.target.value)} placeholder="Hasło" className="form-control mb-2" type="password"/>
              <input required="true" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} placeholder="Powtórz hasło" className="form-control mb-2" type="password"/>
              <input required="true" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Telefon" className="form-control mb-2" type="text"/>
              <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Imię" className="form-control" type="text"/>
              <small className="form-text text-muted ml-2 mb-1">(Opcjonalne)</small>
              <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Nazwisko" className="form-control" type="text"/>
              <small className="form-text text-muted ml-2">(Opcjonalne)</small>
            </div> 
            }
          </Container>
        </Modal.Body>
        { !alert ?
        <Modal.Footer className="d-flex justify-content-between">
          <button className="btn outline-button" onClick={props.onHide}>Anuluj</button>
          <button type="submit" className="btn primary-button">Wyślij</button>
        </Modal.Footer>
        : null
        }
        </form>
      </Modal>
      </>
    );
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user))
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
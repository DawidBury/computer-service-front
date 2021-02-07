import React, { useState } from 'react';
import { Modal, Container } from "react-bootstrap";
import { createServiceRequest } from '../actions/userActions';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

function ServiceRequest(props) {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const [alert, setAlert] = useState('');

  const { serviceRequest, serviceRequestError, user } = props;

  const handleSubmit = e => {
    e.preventDefault();
    props.createServiceRequest({subject, description, user}); 
    setAlert(true);
  };

    return (
      <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body className="show-grid">
          <Container>
          { (alert && serviceRequest !== null) ? 
          <Alert variant="success"> <Alert.Heading>Pomyślnie stworzono zgłoszenie</Alert.Heading>
            <p>
              Oczekuj teraz na proponowany termin dostarczenia sprzętu
            </p> 
          </Alert>
          : <div>
              <input required="true" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Temat" className="form-control mb-2" type="text"/>
              <textarea rows="5" required="true" value={description} onChange={e => setDescription(e.target.value)} placeholder="Opis" className="form-control mb-2" type="text"/>
            </div> 
            }
          </Container>
        </Modal.Body>
        { (!alert && serviceRequest === null) ?
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
    createServiceRequest: data => dispatch(createServiceRequest(data))
  }
}

const mapStateToProps = state => {
  return {
    serviceRequestError: state.user.serviceRequestError,
    serviceRequest: state.user.serviceRequest
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceRequest);
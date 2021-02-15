import React, { useState } from "react";
import { Modal, Container } from "react-bootstrap";
import { login } from "../actions/authActions";
import { connect } from "react-redux";
import Alert from "react-bootstrap/Alert";

function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alert, setAlert] = useState("");
  const { auth, authError } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login({ email, password });
    setAlert(true);
  };

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton></Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body className="show-grid">
            <Container>
              {alert && (auth !== null || authError !== null) ? (
                <Alert variant={authError !== null ? "danger" : "success"}>
                  {authError !== null ? (
                    <div>
                      <Alert.Heading>Nieprawidłowe dane</Alert.Heading>
                      <p>Niestety e-mail lub hasło jest niepoprawne</p>
                    </div>
                  ) : (
                    <div>
                      <Alert.Heading>Pomyślnie zalogowano</Alert.Heading>
                      <p>Możesz teraz swobodnie korzystać z aplikacji</p>
                    </div>
                  )}
                </Alert>
              ) : null}
              <div>
                <input
                  required="true"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="form-control mb-2"
                  type="email"
                />
                <input
                  required="true"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Hasło"
                  className="form-control mb-2"
                  type="password"
                />
              </div>
            </Container>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <button className="btn outline-button" onClick={props.onHide}>
              Anuluj
            </button>
            <button type="submit" className="btn primary-button">
              Wyślij
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.auth.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);

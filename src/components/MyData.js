import React, { useEffect, useState } from "react";
import { Modal, Container } from "react-bootstrap";
import { listServiceRequests } from "../actions/userActions";
import { connect } from "react-redux";
import Alert from "react-bootstrap/Alert";

function MyData(props) {
  const [alert, setAlert] = useState("");

  const { listServiceRequest, user } = props;
  useEffect(() => {
    return props.listServiceRequests({ user });
  }, []);

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <div className="d-flex justify-content-center mb-2">
              <button
                style={{ width: "9rem", height: "4rem" }}
                className="btn outline-button"
              >
                Zgłoszenia
              </button>
              <button
                style={{ width: "9rem", height: "4rem" }}
                className="btn outline-button"
              >
                Zmień hasło
              </button>
              <button
                style={{ width: "9rem", height: "4rem" }}
                className="btn outline-button"
              >
                Wyloguj
              </button>
            </div>
            {listServiceRequest !== null
              ? JSON.parse(listServiceRequest).map(function (data) {
                  return (
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">{data.subject}</h5>
                        <p className="card-text">{data.description}</p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Sugerowany termin dostarczenia:{" "}
                          {data.proposedDeliveryTime}
                        </li>
                        <li className="list-group-item">
                          Termin odbioru sprzętu: {data.deadline}
                        </li>
                        <li className="list-group-item">
                          Status:{" "}
                          {data.task !== null
                            ? "W realizacji"
                            : "W oczekiwaniu"}
                        </li>
                      </ul>
                    </div>
                  );
                })
              : null}
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    listServiceRequests: (data) => dispatch(listServiceRequests(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    listServiceRequest: state.user.listServiceRequests,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyData);

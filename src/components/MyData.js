import React, { useEffect, useState } from "react";
import { Modal, Container } from "react-bootstrap";
import { listServiceRequests, signOut } from "../actions/userActions";
import { connect } from "react-redux";
import Alert from "react-bootstrap/Alert";

function MyData(props) {
  const [alert, setAlert] = useState("");

  const { listServiceRequest, user } = props;
  useEffect(() => {
    return props.listServiceRequests({ user });
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    return (
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      String(date.getHours()).padStart(2, "0") +
      ":" +
      String(date.getMinutes()).padStart(2, "0")
    );
  };
  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <div className="d-flex justify-content-around mb-2">
              <button
                style={{ width: "9rem", height: "4rem" }}
                className="btn outline-button"
              >
                Zgłoszenia
              </button>
              <button
                style={{ width: "9rem", height: "4rem" }}
                className="btn outline-button"
                onClick={() => {
                  return props.signOut();
                }}
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
                          {data.proposedDeliveryTime !== null
                            ? formatDate(data.proposedDeliveryTime)
                            : "Brak"}
                        </li>
                        <li className="list-group-item">
                          Termin odbioru sprzętu:{" "}
                          {data.deadline !== null
                            ? formatDate(data.deadline)
                            : "Brak"}
                        </li>
                        <li className="list-group-item">
                          Status:{" "}
                          {data.task !== null && data.task.inProgress === true
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
    signOut: () => dispatch(signOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    listServiceRequest: state.user.listServiceRequests,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyData);

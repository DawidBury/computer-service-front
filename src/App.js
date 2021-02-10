import React, { useState, useEffect } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpModal from "./components/SignUpModal";
import LoginModal from "./components/LoginModal";
import ServiceRequest from "./components/ServiceRequest";
import MyData from "./components/MyData";
import { listServiceRequests } from "./actions/userActions";
import { connect } from "react-redux";
import axios from "axios";
import apiUrl from "./config/env";

function App(props) {
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [modalServiceRequestShow, setModalServiceRequestShow] = useState(false);
  const [modalMyDataShow, setModalMyDataShow] = useState(false);
  const [cms, setCms] = useState([]);
  const { user } = props;

  const getCMS = async () => {
    try {
      const posts = await axios.get(`${apiUrl}/cms/active`);
      setCms(posts.data);
    } catch (err) {}
  };

  useEffect(() => {
    getCMS();
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-md sticky-top navbar-dark px-0 w-100 bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav w-100">
            <li>
              <a href="#" onClick={() => setModalRegisterShow(true)}>
                Zarejestruj się
              </a>
            </li>
            <li>
              {user ? (
                <a onClick={() => setModalMyDataShow(true)} href="#">
                  Moje konto
                </a>
              ) : (
                <a href="#" onClick={() => setModalLoginShow(true)}>
                  Zaloguj się
                </a>
              )}
            </li>
            <li>
              <a href="#">Strona główna</a>
            </li>
            <li>
              <a href="#about-us">O nas</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
            <div className="d-flex align-items-center ml-2 mr-2">
              <button
                onClick={() => setModalServiceRequestShow(true)}
                className="btn primary-button"
              >
                Zgłoszenie
              </button>
            </div>
          </ul>
        </div>
      </nav>
      <section className="container-fluid landing px-3">
        <SignUpModal
          show={modalRegisterShow}
          onHide={() => setModalRegisterShow(false)}
        />
        {user ? (
          <ServiceRequest
            user={user}
            show={modalServiceRequestShow}
            onHide={() => setModalServiceRequestShow(false)}
          />
        ) : null}
        {user ? (
          <MyData
            serviceRequests={listServiceRequests(user)}
            user={user}
            show={modalMyDataShow}
            onHide={() => setModalMyDataShow(false)}
          />
        ) : (
          <LoginModal
            show={modalLoginShow}
            onHide={() => setModalLoginShow(false)}
          />
        )}
        <div className="main-section">
          <p className="main-text m-0">Serwis komputerowy</p>
          <p className="text m-0">Wszystko dopasowane do Twoich potrzeb</p>
          <p className="text m-0">Zrób zgłoszenie i przekonaj się sam</p>
          <div className="mt-3 d-flex justify-content-center justify-content-md-start">
            <button
              onClick={() => setModalServiceRequestShow(true)}
              className="btn primary-button mr-3"
            >
              Zgłoszenie
            </button>
            <a href="#contact">
              <button className="btn outline-button">Kontakt</button>
            </a>
          </div>
        </div>
      </section>
      <section id="about-us" className="about-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mt-5 mb-5">
              <h2 className="text-center display-4">
                Czym się zajmujemy?{" "}
                <FontAwesomeIcon className="blue" icon="power-off" />
              </h2>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <img
                className="svg-description"
                src="img/technics.svg"
                alt="technics"
              />
              <p className="text-description text-center">Serwis</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <img
                className="svg-description"
                src="img/testimonials.svg"
                alt="clients"
              />
              <p className="text-description text-center">Fachowa obsługa</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <img
                className="svg-description"
                src="img/desktop-computer.svg"
                alt="desktop-computer"
              />
              <p className="text-description text-center">Sklep IT</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mt-5 mb-5">
              <h2 className="text-center display-4">
                Kontakt <FontAwesomeIcon className="blue" icon="address-book" />
              </h2>
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <h1>
                <FontAwesomeIcon className="dark-text" icon="phone" />
              </h1>
              <p className="text-description text-center">
                {cms.map((post) =>
                  post.attribute === "contact-phone" ? post.value : null
                )}
              </p>
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <h1>
                <FontAwesomeIcon className="dark-text" icon="at" />
              </h1>
              <p className="text-description text-center">
                {cms.map((post) =>
                  post.attribute === "contact-email" ? post.value : null
                )}
              </p>
            </div>
            <div className="col-12 mt-5 mb-5">
              <h2 className="text-center display-4">
                Adres <FontAwesomeIcon className="blue" icon="map-marked-alt" />
              </h2>
            </div>
            <div className="col-12 text-center">
              <h1>
                <FontAwesomeIcon className="dark-text" icon="building" />
              </h1>
              <p className="text-description text-center">
                {cms.map((post) =>
                  post.attribute === "address" ? post.value : null
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="d-flex justify-content-center">
          &copy; 2021 ITscomp.pl
        </div>
      </footer>
      {/* Icons made by <a href="https://www.flaticon.com/authors/pixelmeetup" title="Pixelmeetup">Pixelmeetup</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
      {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
      {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, null)(App);

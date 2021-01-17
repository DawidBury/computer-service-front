import React from "react";
import "./App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux';

function App()
{
  const isLogged = useSelector(state => state.isLogged);
    return (
    <div className="App">
      <nav className="navbar navbar-expand-md sticky-top navbar-dark px-0 w-100 bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav w-100">
            <li>
              <a href="#">Strona główna</a>
            </li>
            <li>
              <a href="#">O nas</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
            <li className="report">
              <a href="#">{isLogged ? 'Zgłoszenie' : 'Zaloguj się'}</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="container-fluid landing px-3">
        <div className="main-section">
          <p className="main-text m-0">Serwis komputerowy</p>
          <p className="text m-0">Wszystko dopasowane do Twoich potrzeb</p>
          <p className="text m-0">Zrób zgłoszenie i przekonaj się sam</p>
          <div className="mt-3 d-flex justify-content-center justify-content-md-start">
            <button className="btn primary-button mr-3">Zgłoszenie</button>
            <button className="btn outline-button">Kontakt</button>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mt-5 mb-5">
              <h2 className="text-center display-4">Czym się zajmujemy? <FontAwesomeIcon className="blue" icon="power-off" /></h2>
              
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <img className="svg-description" src="img/technics.svg" alt="technics"/>
              <p className="text-description text-center">Serwis</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <img className="svg-description" src="img/testimonials.svg" alt="clients"/>
              <p className="text-description text-center">Fachowa obsługa</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <img className="svg-description" src="img/desktop-computer.svg" alt="desktop-computer"/>
              <p className="text-description text-center">Sklep IT</p>
            </div>
          </div>
        </div>
      </section>
      {/* Icons made by <a href="https://www.flaticon.com/authors/pixelmeetup" title="Pixelmeetup">Pixelmeetup</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
      {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
      {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
    </div>
    );
}

export default App;

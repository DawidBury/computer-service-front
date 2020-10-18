import React from "react";
import "./App.scss";

function App() {
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
              <a href="#">Zgłoszenie</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="landing">
        <div className="main-section">
          <p className="main-text m-0">Serwis komputerowy</p>
          <p className="text m-0">Wszystko dopasowane do Twoich potrzeb</p>
          <p className="text m-0">Zrób zgłoszenie i przekonaj się sam</p>
          <div className="main-section-buttons">
            <button className="btn primary-button">Zgłoszenie</button>
            <button className="btn outline-button">Kontakt</button>
          </div>
        </div>
      </section>
      <section className="landing"></section>
    </div>
  );
}

export default App;

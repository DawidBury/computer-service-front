import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <section className="landing">
        <nav>
          <ul>
            <ol>
              <a href="#">Strona główna</a>
            </ol>
            <ol>
              <a href="#">O nas</a>
            </ol>
            <ol>
              <a href="#">Kontakt</a>
            </ol>
            <ol className="report">
              <a href="#">Zgłoszenie</a>
            </ol>
          </ul>
        </nav>
        <div className="main-section">
          <p className="main-text">Serwis komputerowy</p>
          <p className="text">Wszystko dopasowane do Twoich potrzeb</p>
          <p className="text">Zrób zgłoszenie i przekonaj się sam</p>
          <div className="main-section-buttons">
            <button className="button primary-button">Zgłoszenie</button>
            <button className="button outline-button">Kontakt</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

import React from "react";
import snapLogo from "./images/logo.svg";
import dataBizLogo from "./images/client-databiz.svg";
import audiophileLogo from "./images/client-audiophile.svg";
import meetLogo from "./images/client-meet.svg";
import makerLogo from "./images/client-maker.svg";
import imageHeroDesktop from "./images/image-hero-desktop.png";
import imageHeroMobile from "./images/image-hero-mobile.png";
import "./App.css";

function App() {
  return (
    <div className="page-grid-container">
      <header className="flex-row-container justify-space-between padding-2em-3em">
        <div className="flex-row-container">
          <img src={snapLogo} className="snap-logo" alt="snap logo" />
          <nav>
            {/* <div className="hamburger"></div> */}
            <ul className="flex-row-container gap-3em">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Company</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul className="flex-row-container gap-3em">
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a className="white-btn-link" href="">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-grid-container">
        {/* <img src="image-hero-mobile" alt="" /> */}
        <img src={imageHeroDesktop} alt="image hero desktop" />
        <h1>
          Make <br></br> remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a className="black-btn-link" href="">
          Learn more
        </a>
        <footer className="align-self-end">
          <ul className="flex-row-container gap-2em">
            <li>
              <img src={dataBizLogo} alt="databiz logo" />
            </li>
            <li>
              <img src={audiophileLogo} alt="audiophile logo" />
            </li>
            <li>
              <img src={meetLogo} alt="meet logo" />
            </li>
            <li>
              <img src={makerLogo} alt="maker logo" />
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

export default App;

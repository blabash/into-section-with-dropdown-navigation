import React, { useState } from "react";
import snapLogo from "./images/logo.svg";
import dataBizLogo from "./images/client-databiz.svg";
import audiophileLogo from "./images/client-audiophile.svg";
import meetLogo from "./images/client-meet.svg";
import makerLogo from "./images/client-maker.svg";
import imageHeroDesktop from "./images/image-hero-desktop.png";
import imageHeroMobile from "./images/image-hero-mobile.png";
import "./App.css";

type MobileNavProps = {
  mobileNavToggled: boolean;
  setMobileNavToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({
  mobileNavToggled,
  setMobileNavToggled,
}: MobileNavProps) => {
  return (
    <nav
      className={`desktop-hidden${mobileNavToggled ? " mobile-nav--open" : ""}`}
    >
      <ul className="flex-col-container">
        <li>
          <a className="flip-down" href="">
            Features
          </a>
        </li>
        <li>
          <a className="flip-down" href="">
            Company
          </a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <div className="flex-row-container">
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a className="white-btn-link" href="">
              Register
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

type MobileNavToggleProps = MobileNavProps;

const MobileNavToggle = ({
  mobileNavToggled,
  setMobileNavToggled,
}: MobileNavToggleProps) => {
  return (
    <button
      className={`nav__toggle desktop-hidden${
        mobileNavToggled ? " mobile-nav--open" : ""
      }`}
      onClick={() => setMobileNavToggled((s) => !s)}
    >
      <span id="hamburger"></span>
    </button>
  );
};

function App() {
  const [mobileNavToggled, setMobileNavToggled] = useState(false);

  return (
    <div className="page-grid-container">
      <header>
        <div className="flex-row-container justify-space-between align-items-center">
          <img src={snapLogo} className="snap-logo" alt="snap logo" />
          <MobileNavToggle
            mobileNavToggled={mobileNavToggled}
            setMobileNavToggled={setMobileNavToggled}
          />
          {/* <MobileNav
            mobileNavToggled={mobileNavToggled}
            setMobileNavToggled={setMobileNavToggled}
          /> */}
          <nav className="flex-grow-1 mobile-hidden">
            <ul className="flex-row-container justify-space-between">
              <div className="flex-row-container">
                <li>
                  <a className="flip-down" href="">
                    Features
                  </a>
                </li>
                <li>
                  <a className="flip-down" href="">
                    Company
                  </a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
              </div>
              <div className="flex-row-container">
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a className="white-btn-link" href="">
                    Register
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-grid-container">
        <img
          className="desktop-hidden"
          src={imageHeroMobile}
          alt="image hero mobile"
        />
        <img
          className="mobile-hidden"
          src={imageHeroDesktop}
          alt="image hero desktop"
        />
        <h1>
          Make <br className="mobile-hidden"></br> remote work
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

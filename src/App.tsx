import React from "react";
import snapLogo from "./images/logo.svg";
import dataBizLogo from "./images/client-databiz.svg";
import audiophileLogo from "./images/client-audiophile.svg";
import meetLogo from "./images/client-meet.svg";
import makerLogo from "./images/client-maker.svg";
import imageHeroDesktop from "./images/image-hero-desktop.png";
import imageHeroMobile from "./images/image-hero-mobile.png";
import { MobileNav } from "./components/MobileNav";
import { FullSizedNav } from "./components/FullSizedNav";
import "./App.css";

function App() {
  return (
    <div className="page-grid-container">
      <header>
        <div className="flex-row justify-space-between align-items-center">
          <img src={snapLogo} className="snap-logo" alt="snap logo" />
          <MobileNav>
            <MobileNav.MobileNavToggle />
            <MobileNav.MobileNavSlideOut />
          </MobileNav>
          <FullSizedNav />
        </div>
      </header>
      <main className="main-grid-container">
        <img
          className="desktop-hidden"
          src={imageHeroMobile}
          alt="hero mobile"
        />
        <img
          className="mobile-hidden"
          src={imageHeroDesktop}
          alt="hero desktop"
        />
        <h1>
          Make <br className="mobile-hidden"></br> remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a className="black-btn-link">Learn more</a>
        <footer className="align-self-end">
          <ul className="flex-row gap-2em">
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

import React, { useEffect, useRef, useState } from "react";
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
  const [featuresTabOpen, setFeaturesTabOpen] = useState(false);
  const [companyTabOpen, setCompanyTabOpen] = useState(false);
  const mobileNavFeaturesDropdownRef = useRef<HTMLUListElement>(null);
  const mobileNavCompanyDropdownRef = useRef<HTMLUListElement>(null);

  return (
    <>
      <div
        onClick={() => setMobileNavToggled((s) => !s)}
        className={`mobile-nav__background desktop-hidden${
          mobileNavToggled ? " mobile-nav--open" : ""
        }`}
      ></div>
      <nav
        className={`mobile-nav desktop-hidden${
          mobileNavToggled ? " mobile-nav--open" : ""
        }`}
      >
        <ul className="flex-col gap-2em">
          <li>
            <a
              onClick={() => setFeaturesTabOpen((o) => !o)}
              className={`flip-down${
                featuresTabOpen ? " flip-down--open" : ""
              }`}
            >
              Features
            </a>
            <div
              className="mobile-nav__dropdown-menu-wrapper"
              style={{
                maxHeight: featuresTabOpen
                  ? `${
                      mobileNavFeaturesDropdownRef.current?.getBoundingClientRect()
                        .height
                    }px`
                  : "0",
              }}
            >
              <ul
                ref={mobileNavFeaturesDropdownRef}
                className={"mobile-nav__dropdown-menu flex-col gap-1em"}
              >
                <li>
                  <a className="mobile-nav__dropdown-menu__logo-link todo-svg flex-row gap-1em">
                    Todo List
                  </a>
                </li>
                <li>
                  <a className="mobile-nav__dropdown-menu__logo-link calendar-svg flex-row gap-1em">
                    Calendar
                  </a>
                </li>
                <li>
                  <a className="mobile-nav__dropdown-menu__logo-link reminders-svg flex-row gap-1em">
                    Reminders
                  </a>
                </li>
                <li>
                  <a className="mobile-nav__dropdown-menu__logo-link planning-svg flex-row gap-1em">
                    Planning
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              onClick={() => setCompanyTabOpen((o) => !o)}
              className={`flip-down${companyTabOpen ? " flip-down--open" : ""}`}
            >
              Company
            </a>
            <div
              className="mobile-nav__dropdown-menu-wrapper"
              style={{
                maxHeight: companyTabOpen
                  ? `${
                      mobileNavCompanyDropdownRef.current?.getBoundingClientRect()
                        .height
                    }px`
                  : "0",
              }}
            >
              <ul
                ref={mobileNavCompanyDropdownRef}
                className={"mobile-nav__dropdown-menu flex-col gap-1em"}
              >
                <li>
                  <a>History</a>
                </li>
                <li>
                  <a>Our Team</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li className="text-align-center">
            <a href="">Login</a>
          </li>
          <li>
            <a className="white-btn-link" href="">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

type MobileNavToggleProps = MobileNavProps;

const MobileNavToggle = ({
  mobileNavToggled,
  setMobileNavToggled,
}: MobileNavToggleProps) => {
  return (
    <button
      className={`mobile-nav__toggle desktop-hidden${
        mobileNavToggled ? " mobile-nav--open" : ""
      }`}
      onClick={() => setMobileNavToggled((s) => !s)}
    >
      <span id="hamburger"></span>
    </button>
  );
};

type FullSizedNavProps = {};

const FullSizedNav = (props: FullSizedNavProps) => {
  const [featuresTabOpen, setFeaturesTabOpen] = useState(false);
  const [companyTabOpen, setCompanyTabOpen] = useState(false);
  const navItemRef = useRef<HTMLLIElement>(null);

  return (
    <nav className="flex-grow-1 mobile-hidden">
      <ul className="flex-row justify-space-between">
        <div className="flex-row gap-1em">
          <li ref={navItemRef} style={{ position: "relative" }}>
            <a
              onClick={() => setFeaturesTabOpen((o) => !o)}
              className={`flip-down${
                featuresTabOpen ? " flip-down--open" : ""
              }`}
            >
              Features
              {
                <ul
                  className={
                    "desktop-nav__dropdown-menu flex-col gap-1em right-0"
                  }
                  style={{
                    top: `calc(${
                      navItemRef.current?.getBoundingClientRect().height ?? 0
                    }px + 1em)`,
                  }}
                >
                  <li>
                    <a
                      className="desktop-nav__dropdown-menu__logo-link todo-svg flex-row gap-1em"
                      href=""
                    >
                      Todo List
                    </a>
                  </li>
                  <li>
                    <a
                      className="desktop-nav__dropdown-menu__logo-link calendar-svg flex-row gap-1em"
                      href=""
                    >
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      className="desktop-nav__dropdown-menu__logo-link reminders-svg flex-row gap-1em"
                      href=""
                    >
                      Reminders
                    </a>
                  </li>
                  <li>
                    <a
                      className="desktop-nav__dropdown-menu__logo-link planning-svg flex-row gap-1em"
                      href=""
                    >
                      Planning
                    </a>
                  </li>
                </ul>
              }
            </a>
          </li>
          <li style={{ position: "relative" }}>
            <a
              onClick={() => setCompanyTabOpen((o) => !o)}
              className={`flip-down${companyTabOpen ? " flip-down--open" : ""}`}
            >
              Company
              {
                <ul
                  className="desktop-nav__dropdown-menu flex-col gap-1em"
                  style={{
                    top: `calc(${
                      navItemRef.current?.getBoundingClientRect().height ?? 0
                    }px + 1em)`,
                  }}
                >
                  <li>
                    <a href="">History</a>
                  </li>
                  <li>
                    <a href="">Our Team</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                </ul>
              }
            </a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </div>
        <div className="flex-row gap-1em">
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

function App() {
  const [mobileNavToggled, setMobileNavToggled] = useState(false);

  return (
    <div className="page-grid-container">
      <header>
        <div className="flex-row justify-space-between align-items-center">
          <img src={snapLogo} className="snap-logo" alt="snap logo" />
          <MobileNavToggle
            mobileNavToggled={mobileNavToggled}
            setMobileNavToggled={setMobileNavToggled}
          />
          <MobileNav
            mobileNavToggled={mobileNavToggled}
            setMobileNavToggled={setMobileNavToggled}
          />
          <FullSizedNav />
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

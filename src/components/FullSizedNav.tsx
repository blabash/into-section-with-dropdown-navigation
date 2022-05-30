import React, { useRef, useState } from "react";

type FullSizedNavProps = {};

export const FullSizedNav = (props: FullSizedNavProps) => {
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
                    <a className="desktop-nav__dropdown-menu__logo-link todo-svg flex-row gap-1em">
                      Todo List
                    </a>
                  </li>
                  <li>
                    <a className="desktop-nav__dropdown-menu__logo-link calendar-svg flex-row gap-1em">
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a className="desktop-nav__dropdown-menu__logo-link reminders-svg flex-row gap-1em">
                      Reminders
                    </a>
                  </li>
                  <li>
                    <a className="desktop-nav__dropdown-menu__logo-link planning-svg flex-row gap-1em">
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
                    <a>History</a>
                  </li>
                  <li>
                    <a>Our Team</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                </ul>
              }
            </a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </div>
        <div className="flex-row gap-1em">
          <li>
            <a>Login</a>
          </li>
          <li>
            <a className="white-btn-link">Register</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

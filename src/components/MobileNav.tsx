import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

type MobileNavLinkProps = {};

const MobileNavLinks = (props: MobileNavLinkProps) => {
  const [featuresTabOpen, setFeaturesTabOpen] = useState(false);
  const [companyTabOpen, setCompanyTabOpen] = useState(false);
  const mobileNavFeaturesDropdownRef = useRef<HTMLUListElement>(null);
  const mobileNavCompanyDropdownRef = useRef<HTMLUListElement>(null);
  const { mobileNavToggled, toggle } = useContext(MobileNavContext);

  return (
    <>
      <div
        onClick={toggle}
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
            <a>Careers</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li className="text-align-center">
            <a>Login</a>
          </li>
          <li>
            <a className="white-btn-link">Register</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

type MobileNavToggleProps = {};

const MobileNavToggle = (props: MobileNavToggleProps) => {
  const { mobileNavToggled, toggle } = useContext(MobileNavContext);
  return (
    <button
      className={`mobile-nav__toggle desktop-hidden${
        mobileNavToggled ? " mobile-nav--open" : ""
      }`}
      onClick={toggle}
    >
      <span id="hamburger"></span>
    </button>
  );
};

type MobileNavContextInterface = {
  toggle: () => void;
  mobileNavToggled: boolean;
};

const MobileNavContext = createContext({} as MobileNavContextInterface);

type MobileNavProps = {
  children: React.ReactNode;
};

export const MobileNav = ({ children }: MobileNavProps) => {
  const [mobileNavToggled, setMobileNavToggled] = useState(false);

  const toggle = useCallback(
    () => setMobileNavToggled((prevState) => !prevState),
    []
  );

  const value: MobileNavContextInterface = useMemo(
    () => ({ toggle, mobileNavToggled }),
    [toggle, mobileNavToggled]
  );

  return (
    <MobileNavContext.Provider value={value}>
      {children}
    </MobileNavContext.Provider>
  );
};

MobileNav.MobileNavLinks = MobileNavLinks;
MobileNav.MobileNavToggle = MobileNavToggle;

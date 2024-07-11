import React, { useState } from "react";
import "../style/Nav.css";
import Search from "./Search"; // Import your own search component
import { Link, NavLink } from "react-router-dom";
import { CiCircleChevRight } from "react-icons/ci";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isParallel, setIsParallel] = useState(true);
  const [isTrekkingMenuOpen, setIsTrekkingMenuOpen] = useState(false);
  const [isActivitiesMenuOpen, setIsActivitiesMenuOpen] = useState(false);
  const[isTourMenuOpen,setIsTourMenuOpen]=useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function toggleNav() {
    setIsMenuOpen(!isMenuOpen);
    setIsParallel(!isParallel);
    setIsActivitiesMenuOpen(false);
    setIsTrekkingMenuOpen(false);
    setIsTourMenuOpen(false);
  }

const trueFalse=(isOpen,setIsOpen)=>{
setIsOpen(!isOpen)
}
const Condition=(otherCondition,setOtherCondition)=>{
otherCondition? setOtherCondition(false):setOtherCondition(false)
}
const toggleSubMenu = (isOpen,setIsOpen,otherCondition,setOtherCondition,anotherCondition,setAnotherCondition) => {
trueFalse(isOpen,setIsOpen);
Condition(otherCondition,setOtherCondition)
Condition(anotherCondition,setAnotherCondition)
}
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="/Image/Nav/big-sky-treks-logo.jpg"
            alt=""
            className="nav-logo"
          />
        </div>
        <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item">
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
          </li>
          <li
            className="navbar-item dropdown"
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu}
          >
            <div className="navbar-link">Trekking</div>
            <div className="dropdown-menu">
              <div className="flex">
                <div className="everest-region">
                  <h3>Everest Region</h3>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/everest-base-camp"
                      className="dropdown-link"
                    >
                      Everest Base Camp
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/everest-base-camp-chola-pass"
                      className="dropdown-link"
                    >
                      EBC Chola Pass Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/gokyo-lake"
                      className="dropdown-link"
                    >
                      Gokyo Lake Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/everest-view-trek"
                      className="dropdown-link"
                    >
                      Everest View Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/renjo-la-pass"
                      className="dropdown-link"
                    >
                      Renjo-La Pass Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/three-pass-trek"
                      className="dropdown-link"
                    >
                      3 Pass Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/jiri-ebc-trek"
                      className="dropdown-link"
                    >
                      Jiri EBC Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/ebc-kongma-la-pass-trek"
                      className="dropdown-link"
                    >
                      EBC Kongma-la Pass Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/pikey-peak-trek"
                      className="dropdown-link"
                    >
                      Pikey Peak Trek
                    </NavLink>
                  </div>
                </div>
                <div className="annapurna-region">
                  <h3>Annapurna Region</h3>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/annapurna-base-camp"
                      className="dropdown-link"
                    >
                      Annapurna Base Camp
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/ghore-pani-poonhill-trek"
                      className="dropdown-link"
                    >
                      Ghorepani Poonhill Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/tilicho-lake-trek"
                      className="dropdown-link"
                    >
                      Tilicho Lake Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/annapurna-curcit-trek"
                      className="dropdown-link"
                    >
                      Annapurna Curcit Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/jomsom-muktinath-trek"
                      className="dropdown-link"
                    >
                      Jomsom Muktinath Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/mardi-himal-trek"
                      className="dropdown-link"
                    >
                      Mardi Himal Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/phanchase-trek"
                      className="dropdown-link"
                    >
                      Panchase Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/royal-trek"
                      className="dropdown-link"
                    >
                      Royal Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/upper-mustang-trek"
                      className="dropdown-link"
                    >
                      Upper Mustang Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/nir-phu-trek"
                      className="dropdown-link"
                    >
                      Nir Phu Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/khayar-lake-trek"
                      className="dropdown-link"
                    >
                      Khayar Lake Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/kajin-sara-lake-trek"
                      className="dropdown-link"
                    >
                      Kajin Sara Lake Trek
                    </NavLink>
                  </div>
                </div>
                <div className="langtang-region">
                  <h3>Langtang Region</h3>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/langtang-valley-trek"
                      className="dropdown-link"
                    >
                      Langtang Valley Trek
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/gosaikunda-lake-trek"
                      className="dropdown-link"
                    >
                      Gosaikunda Trek{" "}
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/langtang-gosaikunda-lake-trek"
                      className="dropdown-link"
                    >
                      Langtang Gosaikunda Lake Trek{" "}
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/langtang-gosaikunda-halambu-trek"
                      className="dropdown-link"
                    >
                      Langtang Gosaikunda Helambu Trek{" "}
                    </NavLink>
                  </div>
                </div>
                <div className="manaslu-region">
                  <h3>Manaslu Region</h3>
                  <div className="dropdown-item">
                    <NavLink
                      to="/trekking/manaslu-circuit-trek"
                      className="dropdown-link"
                    >
                      Manaslu Circuit Trek{" "}
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className="navbar-item dropdown"
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu}
          >
            <div className="navbar-link">Activities</div>
            <div className="dropdown-menu">
              <div className="flex">
                <div className="other-activities">
                  <div className="dropdown-item">
                    <NavLink to="/other-activities/jungle-safari" className="dropdown-link">
                      Jungle Safari
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink to="/other-activities/rafting" className="dropdown-link">
                      Rafting
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink to="/other-activities/heli-tour" className="dropdown-link">
                      Heli Tour
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink to="/other-activities/mountain-flight" className="dropdown-link">
                      Mountain Flight
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink to="/other-activities/bungee/bungee-jumping" className="dropdown-link">
                      Bungee Jump
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink to="/other-activities/para/paragliding" className="dropdown-link">
                      Paragliding
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink to="/other-activities/zip/zip-flyer" className="dropdown-link">
                      Zip Flyer
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink to="/other-activities/bird/bird-watching" className="dropdown-link">
                      Bird Watching
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className="navbar-item dropdown"
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu}
          >
            <div className="navbar-link">Tours</div>
            <div className="dropdown-menu">
              <div className="flex">
                <div className="city-tour">
                  <div className="dropdown-item">
                    <NavLink to="/tours/city-tour" className="dropdown-link">
                      City Tour
                    </NavLink>
                  </div>





                  <div className="dropdown-item">
                    <NavLink to="/tours/honey/honey-moon-tour" className="dropdown-link">
                      Honeymoon Tour
                    </NavLink>
                  </div>
                  <div className="dropdown-item">
                    <NavLink to="/tours/pilgrimage-tour" className="dropdown-link">
                      Pilgrimage Tour
                    </NavLink>
                  </div>

                  <div className="dropdown-item">
                    <NavLink to="/tours/photo/photography-tour" className="dropdown-link">
                      Photography Tour
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className="navbar-link">
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/blogs" className="navbar-link">
              Blogs
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="search-component">
          <Search />
        </div>
      </nav>

      <div className="mobile">
        <nav className="mobile-nav">
          <div className="navbar-logo">
            <img src="/Image/Nav/big-sky-treks-logo.jpg" alt="" />
          </div>
          <div className="hamburger" onClick={toggleNav}>
            <div className={`${isParallel ? "line" : "cross-first"}`}></div>
            <div className={`${isParallel ? "line" : "cross-second"}`}></div>
            <div className={`${isParallel ? "line" : "cross-third"}`}></div>
          </div>
          {isMenuOpen && (
            <div className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : "mobile-menu-close"}`}>
              <div className="sub-mobile-menu">
              <ul className="mobile-menu-list">
                <li>Home</li>
                <hr />
                {/* <li onClick={toggleTrekkingMenu}> */}
                <li onClick={()=>{
                  toggleSubMenu(isTrekkingMenuOpen,setIsTrekkingMenuOpen,isActivitiesMenuOpen,setIsActivitiesMenuOpen,isTourMenuOpen,setIsTourMenuOpen)
                }}>
                  Trekking
                  {
                    isTrekkingMenuOpen && (
                      <div className="side-menu trekking-side-menu">
                        <div>Everest Region</div> <hr />
                        <div>Annapurna Region</div><hr />
                        <div>Langtang Region</div><hr />
                        <div>Manaslu Region</div>
                      </div>
                    )
                  }
                </li>
                <hr />
                {/* <li onClick={toggleActivitiesMenu}>Other Activities */}
                <li onClick={()=>{
                  toggleSubMenu(isActivitiesMenuOpen,setIsActivitiesMenuOpen,isTrekkingMenuOpen,setIsTrekkingMenuOpen,isTourMenuOpen,setIsTourMenuOpen)
                }}>Activities <CiCircleChevRight/>
                {
                    isActivitiesMenuOpen && (
                      <div className="side-menu activities-side-menu">
                        <Link to={"/other-activities/para/paragliding"}><div onClick={() => {
                          setIsMenuOpen(false);
                          setIsParallel(true);
                        }}>Paragliding</div></Link> <hr />
                        <div>Mountain Flight</div> <hr />
                        <div>Heli Tour</div> <hr />
                        <div>Bungee Jumping</div> <hr />
                        <div>Paragliding</div> <hr />
                        <div>Mountain Flight</div> <hr />
                        <div>Heli Tour</div> <hr />
                        <div>Bungee Jumping</div>
                      </div>
                    )
                  }
                </li>
                <hr />
                <li onClick={()=>{
toggleSubMenu(isTourMenuOpen,setIsTourMenuOpen,isTrekkingMenuOpen,setIsTrekkingMenuOpen,isActivitiesMenuOpen,setIsActivitiesMenuOpen)
                }}>Nepal tours
                {
                    isTourMenuOpen && (
                      <div className="side-menu tour-side-menu">
                        <div>KAthmandu City TOur</div><hr />
                        <div>Annapurna Region</div><hr />
                        <div>Langtang Region</div><hr />
                        <div>Manaslu Region</div>
                      </div>
                    )
                  }
                  
                </li>
                <hr />
                <li>About</li> <hr />
                <li>Blogs</li> <hr />
                <li>Contact</li><hr />
              </ul>
            </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Nav;

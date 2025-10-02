import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, Link } from 'react-router-dom';
import style from "./header.module.css";
import { useDimensions } from "../../../Components/hooks/use-dimensions";

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const { width } = useDimensions();

  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Inline styles
  const styles = {
    link: {
      textDecoration: "none"
    },
    dropdownMobileMenu: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "10px",
      marginTop: "10px",
      gap: "10px"
    },
    dropdownMobile: {
      marginTop: "10px",
      color: "rgba(0,0,0,0.65)"
    }
  };

  return (
    <Navbar expand="md" className={`${style.nav__stl} ${scroll ? style.scrolled : ""}`}>
      <Container fluid className='custom-container'>
        <Navbar.Brand href="/">
          <p>LOGO</p>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setOpenNav(!openNav)} />
        <div className='nav'>
          {
            width && width < 767 ? (
              // ✅ Mobile Nav
              <div className={`${openNav ? "hide" : "show"}`}>
                <Nav className={`${style.nav_listing} m-auto my-2 my-lg-0`}>
                  <Link to="/" style={styles.link} className={`${location.pathname === "/" ? "color-yellow" : "color-dark_white"}`}>Home</Link>
                  <Link to="/about" style={styles.link} className={`${location.pathname === "/about" ? "color-yellow" : "color-dark_white"}`}>About</Link>

                  {/* Dropdown for Mobile */}
                  <div style={styles.dropdownMobile}>
                    <Link to="/service" style={styles.link} className={`${location.pathname.includes("/service") ? "color-yellow" : "color-dark_white"}`}>
                      Services
                    </Link>
                    <div style={styles.dropdownMobileMenu}>
                      <Link to="/service/1?title=concrete-structural-repairs" style={styles.link}>Concrete Structural Repairs</Link>
                      <Link to="/service/2?title=general-building" style={styles.link}>General Building</Link>
                      <Link to="/service/3?title=new-builds" style={styles.link}>New Builds</Link>
                    </div>
                  </div>

                  <Link to="/projects" style={styles.link} className={`${location.pathname === "/projects" ? "color-yellow" : "color-dark_white"}`}>Projects</Link>
                  <Link to="/contact-us" style={styles.link} className={`${location.pathname === "/contact-us" ? "color-yellow" : "color-dark_white"}`}>Contact Us</Link>
                </Nav>
              </div>
            ) : (
              // ✅ Desktop Nav
              <div className='desktop-nav'>
                <Nav className={`${style.nav_listing} m-auto my-2 my-lg-0`}>
                  <Link to="/" style={styles.link} className={`${location.pathname === "/" ? "color-yellow" : "color-dark_white"}`}>Home</Link>
                  <Link to="/about" style={styles.link} className={`${location.pathname === "/about" ? "color-yellow" : "color-dark_white"}`}>About</Link>

                  {/* Dropdown on Hover for Desktop */}
                  <div className={style.dropdown}>
                    <Link 
                      to="/service" 
                      style={styles.link} 
                      className={`${location.pathname.includes("/service") ? "color-yellow" : "color-dark_white"}`}
                    >
                      Services 
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#ffffffff" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <ul className={style.dropdownMenu}>
                      <li><Link to="/service/1?title=concrete-structural-repairs" style={styles.link}>Concrete Structural Repairs</Link></li>
                      <li><Link to="/service/2?title=general-building" style={styles.link}>General Building</Link></li>
                      <li><Link to="/service/3?title=new-builds" style={styles.link}>New Builds</Link></li>
                    </ul>
                  </div>

                  <Link to="/projects" style={styles.link} className={`${location.pathname === "/projects" ? "color-yellow" : "color-dark_white"}`}>Projects</Link>
                  <Link to="/contact-us" style={styles.link} className={`${location.pathname === "/contact-us" ? "color-yellow" : "color-dark_white"}`}>Contact Us</Link>
                </Nav>
                <div className="d-flex">
                  <Link to="/contact-us" style={styles.link} className={`${style.banner_btn}`}>Contact Us</Link>
                </div>
              </div>
            )
          }
        </div>
      </Container>
    </Navbar>
  );
};

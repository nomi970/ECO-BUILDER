// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useLocation } from 'react-router-dom';
// import style from "./header.module.css";
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useDimensions } from "../../../Components/hooks/use-dimensions";

// export const Header = () => {
//   const [openNav, setOpenNav] = useState(false);
//   const location = useLocation();
//   useEffect(() => {
//     setOpenNav(false)
//   }, [location.pathname])
//   const { width } = useDimensions();
//   return (
//     <Navbar expand="md" className={`${style.nav__stl}`}>
//       <Container fluid className='custom-container'>
//         <Navbar.Brand href="#">
//           <img src="../images/logo.png" alt="" />
//         </Navbar.Brand>
//         <Navbar.Toggle onClick={() => setOpenNav(!openNav)} />
//         <div className='nav'>
//           {
//             width && width < 767 ?
//               <div className={`${openNav ? "hide" : "show"}`}>
//                 <Nav
//                   className={`${style.nav_listing} m-auto my-2 my-lg-0`}
//                 >
//                   <Link to="/" className={`${location.pathname === "/" ? "color-green" : "color-dark_white"}`}>Home</Link>
//                   <Link to="#" className='color-dark_white'>About</Link>
//                   <Link to="/blog" className={`${location.pathname === "/blog" ? "color-green" : "color-dark_white"}`}>Blog</Link>
//                   <Link to="#" className='color-dark_white'>Faq's</Link>

//                 </Nav>
//                 <div className="d-flex">

//                   <Button variant="light" className={`${style.nav_btn} me-2`}>Login</Button>
//                   <Button variant="light" className={`${style.nav_btn}`}>Free Trails</Button>
//                 </div>
//               </div>
//               :
//               <div className='desktop-nav'>
//                 <Nav
//                   className={`${style.nav_listing} m-auto my-2 my-lg-0`}
//                 >
//                   <Link to="/" className={`${location.pathname === "/" ? "color-green" : "color-dark_white"}`}>Home</Link>
//                   <Link to="#" className='color-dark_white'>About</Link>
//                   <Link to="/blog" className={`${location.pathname === "/blog" ? "color-green" : "color-dark_white"}`}>Blog</Link>
//                   <Link to="#" className='color-dark_white'>Faq's</Link>

//                 </Nav>
//                 <div className="d-flex">

//                   <Button variant="light" className={`${style.nav_btn} me-2`}>Login</Button>
//                   <Button variant="light" className={`${style.nav_btn}`}>Free Trails</Button>
//                 </div>
//               </div>
//           }

//         </div>
//       </Container>
//     </Navbar>
//   );
// }
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import style from "./header.module.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDimensions } from "../../../Components/hooks/use-dimensions";

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  const { width } = useDimensions();

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

  
  return (
    <Navbar expand="md" className={`${style.nav__stl} ${scroll ? style.scrolled : ""}`}>
      <Container fluid className='custom-container'>
        <Navbar.Brand href="/">
        {/* <p>LOGO</p> */}
          <img className={style.nav_logo} src="https://connectecobuilders.com/wp-content/uploads/2024/02/cropped-34-01-3-300x117-CEB-BANN-1-1-106x35.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setOpenNav(!openNav)} />
        <div className='nav'>
          {
            width && width < 767 ?
              <div className={`${openNav ? "hide" : "show"}`}>
                <Nav className={`${style.nav_listing} m-auto my-2 my-lg-0`}>
                  <Link to="/" className={`${location.pathname === "/" ? "color-yellow" : "color-dark_white"}`}>Home</Link>
                  <Link to="/about" className={`${location.pathname === "/about" ? "color-yellow" : "color-dark_white"}`}>About</Link>
                  <Link to="/service" className={`${location.pathname === "/service" ? "color-yellow" : "color-dark_white"}`}>Services</Link>
                  <Link to="/projects" className={`${location.pathname === "/projects" ? "color-yellow" : "color-dark_white"}`}>Projects</Link>
                  <Link to="/contact-us" className={`${location.pathname === "/contact-us" ? "color-yellow" : "color-dark_white"}`}>Contact Us</Link>
                
                </Nav>
                <div className="d-flex">
                  {/* <Button variant="light" className={`${style.nav_btn} me-2`}>Login</Button>
                  <Button variant="light" className={`${style.nav_btn}`}>Free Trials</Button> */}
                  
                </div>
              </div>
              :
              <div className='desktop-nav'>
                <Nav className={`${style.nav_listing} m-auto my-2 my-lg-0`}>
                  <Link to="/" className={`${location.pathname === "/" ? "color-yellow" : "color-dark_white"}`}>Home</Link>
                  <Link to="/about" className={`${location.pathname === "/about" ? "color-yellow" : "color-dark_white"}`}>About</Link>
                  <Link to="/service" className={`${location.pathname === "/service" ? "color-yellow" : "color-dark_white"}`}>Services</Link>
                  <Link to="/projects" className={`${location.pathname === "/projects" ? "color-yellow" : "color-dark_white"}`}>Projects</Link>
                  <Link to="/contact-us" className={`${location.pathname === "/contact-us" ? "color-yellow" : "color-dark_white"}`}>Contact Us</Link>
                </Nav>
                <div className="d-flex">
                  {/* <Button variant="light" className={`${style.nav_btn} me-2`}>Login</Button>
                  <Button variant="light" className={`${style.nav_btn}`}>Free Trials</Button> */}
                  <Link to="/contact-us" className={`${style.banner_btn}`}>Contact Us</Link>
                </div>
              </div>
          }
        </div>
      </Container>
    </Navbar>
  );
};


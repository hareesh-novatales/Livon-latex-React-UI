import { useState } from "react";
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import companyLogo from './../images/livon comfort logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faPhone } from '@fortawesome/free-solid-svg-icons';
import mattressCategory from './../images/catg mattress.jpg';
import { DropdownMenu } from "react-bootstrap";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";


function Header({show, handleShow, handleClose}) {
  const [showMattressDropdown, setShowMattressDropdown] = useState(false);
  const [showPillowDropdown, setShowPillowDropdown] = useState(false);
  const handleMattressMouseEnter = () => {
    setShowMattressDropdown(true);
  };
  const handleMattressMouseLeave = () => {
    setShowMattressDropdown(false);
  };

  const handlePillowMouseEnter = () => {
    setShowPillowDropdown(true);
  };
  const handlePillowMouseLeave = () => {
    setShowPillowDropdown(false);
  };

  return (
    <>
    <Navbar expand="lg" className="bg" fixed="top">
      <Container fluid>
        <Navbar.Brand to=""><img src={companyLogo} alt="BigCo Inc. logo" className="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/" className="nav-item">Home</Nav.Link>
            <NavDropdown title="Mattress" id="navbarScrollingDropdown" className="nav-item"
              show={showMattressDropdown}
              onMouseEnter={handleMattressMouseEnter}
              onMouseLeave={handleMattressMouseLeave}>
              <div className="row mattress-dropdown">
                <div className="col-lg-4">
                  <NavDropdown.Item href="#action3">Standard Latex Mattress</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Soft Latex Mattress
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Orthopedic Latex Mattress
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    7 zone comfort Mattress
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Coir Mattress
                  </NavDropdown.Item>
                </div>
                <div className="col-lg-4 bg-image hover-zoom">
                  <img src={mattressCategory} className="menu-image " />
                </div>
                <div className="col-lg-4 bg-image hover-zoom">
                  <img src={mattressCategory} className="menu-image" />
                </div>
              </div>
            </NavDropdown>
            <NavDropdown title="Pillows" id="navbarScrollingDropdown" className="nav-item"
              show={showPillowDropdown}
              onMouseEnter={handlePillowMouseEnter}
              onMouseLeave={handlePillowMouseLeave}>
              <div className="row pillow-dropdown">
                <div className="col-lg-6">
                  <NavDropdown.Item href="#action4">
                    Standard Latex Pillow
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Contour Latex Pillow
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Moon Latex Pillow
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Box Latex Pillow
                  </NavDropdown.Item>
                </div>
                <div className="col-lg-6">
                  <img src={mattressCategory} className="menu-image" />
                </div>
              </div>
            </NavDropdown>
            <NavDropdown title="Toppers" id="navbarScrollingDropdown" className="nav-item">
              <div className="row Topper-dropdown">
                <h3>Our Toppers</h3>
                <div className="col-lg-3">
                  <NavDropdown.Item href="#action5">
                    <img src={mattressCategory} className="menu-image" />
                    <h2>7 Zone comfort Latex</h2>
                  </NavDropdown.Item>
                </div>
                <div className="col-lg-3">
                  <NavDropdown.Item href="#action5">
                    <img src={mattressCategory} className="menu-image" />
                    <h2>7 Zone comfort Latex</h2>
                  </NavDropdown.Item>
                </div>
                <div className="col-lg-3">
                  <NavDropdown.Item href="#action5">
                    <img src={mattressCategory} className="menu-image" />
                    <h2>7 Zone comfort Latex</h2>
                  </NavDropdown.Item>
                </div>
                <div className="col-lg-3">
                  <NavDropdown.Item href="#action5">
                    <img src={mattressCategory} className="menu-image" />
                    <h2>7 Zone comfort Latex</h2>
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <NavDropdown title="Bedding" id="navbarScrollingDropdown" className="nav-item">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Baby/kids Range" id="navbarScrollingDropdown" className="nav-item">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Why Livon" id="navbarScrollingDropdown" className="nav-item">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex">
            <Nav.Link href="#action1" className="nav-item">Blog</Nav.Link>
            <FontAwesomeIcon icon={faPhone} className="nav-item icon" />
            <FontAwesomeIcon icon={faCartShopping} className="nav-item icon" onClick={handleShow} />
            <FontAwesomeIcon icon={faUser} className="nav-item icon" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
export default Header;
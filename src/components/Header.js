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
import pillowCategory from './../images/categories pillows.jpg';
import ContourCategory from './../images/contour pillow c.jpg';
import boxCategory from './../images/standard pillow d2.jpg';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import OtpInput from "./OtpInput";
import Addtocart from "./Addtocart";

function Header({show, handleShow, handleClose}) {
  const [showMattressDropdown, setShowMattressDropdown] = useState(false);
  const [mattressHoveredIndex, setMattressHoveredIndex] = useState(null);
  const [showPillowDropdown, setShowPillowDropdown] = useState(false);
  const [pillowHoveredIndex, setPillowHoveredIndex] = useState(null);
  const [showTopperDropdown, setShowTopperDropdown] = useState(false);
  const [TopperHoveredIndex, setTopperHoveredIndex] = useState(null);
  const [showBeddingDropdown, setShowBeddingDropdown] = useState(false);
  const [BeddingHoveredIndex, setBeddingHoveredIndex] = useState(null);
  const [showKidsDropdown, setShowKidsDropdown] = useState(false);
  const [KidsHoveredIndex, setKidsHoveredIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [sideBarshow, setSidebarShow] = useState(false);

  const handleLoginOpen = () => {
    setOpen(true);
  }
  const handleLoginClose = () => {
    setOpen(false);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);

  }
  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    //phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber < 10 || regex.test(phoneNumber)) {
      alert("Invalid phone Number");
      return;
    }
      //show otp field
      setShowOtpInput(true);
    
  }
  const handleGoogleSignIn = () => {
    // Redirect to Google sign-in page
    window.open("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F%3Fptid%3D19027681%26ptt%3D8%26fpts%3D0&ec=futura_hpp_co_si_001_p&ifkv=ASKXGp3MtpfyCyvQnrduLFH5o9SO-FNxAdqnQY8YMqfevp3-kFJZAnAtIB1QLt8JSAnLrTjJxuJV4g&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1811037472%3A1706179039408278&theme=glif", "_blank");
  };
  const onOtpSubmit=(otp)=>{
      console.log("Login Successful",otp)
  }

  const handleMattressMouseEnter = (index) => {
    setShowMattressDropdown(true);
    setMattressHoveredIndex(index);
  };

  const handleMattressMouseLeave = () => {
    setShowMattressDropdown(false);
    setMattressHoveredIndex(null);
  };

  const handlePillowMouseEnter = (index) => {
    setShowPillowDropdown(true);
    setPillowHoveredIndex(index);
  };

  const handlePillowMouseLeave = () => {
    setShowPillowDropdown(false);
    setPillowHoveredIndex(null);
  };
  const handleTopperMouseEnter = (index) => {
    setShowTopperDropdown(true);
    setTopperHoveredIndex(index);
  };

  const handleTopperMouseLeave = () => {
    setShowTopperDropdown(false);
    setTopperHoveredIndex(null);
  };
  const handleBeddingMouseEnter = (index) => {
    setShowBeddingDropdown(true);
    setBeddingHoveredIndex(index);
  };

  const handleBeddingMouseLeave = () => {
    setShowBeddingDropdown(false);
    setBeddingHoveredIndex(null);
  };
  const handleKidsMouseEnter = (index) => {
    setShowKidsDropdown(true);
    setKidsHoveredIndex(index);
  };

  const handleKidsMouseLeave = () => {
    setShowKidsDropdown(false);
    setKidsHoveredIndex(null);
  };

  // handle add to cart sidenav
  const handleAddToCartSideNav = () => {
 setSidebarShow(!sideBarshow);
  }
  const handleCloseSideNav = (data) => {
    setSidebarShow(data);
  }
  return (
    <>
      <Navbar expand="lg" className="bg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/"><img src={companyLogo} alt="BigCo Inc. logo" className="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" className="nav-item">Home</Nav.Link>
              <NavDropdown title="Mattress" id="navbarScrollingDropdown" className="nav-item"
                show={showMattressDropdown}
                onMouseEnter={() => handleMattressMouseEnter(null)}
                onMouseLeave={handleMattressMouseLeave}>
                <div className="row mattress-dropdown">
                  <div className="col-lg-6">
                    <NavDropdown.Item href="/product/mattress/1/Standard-Latex-Mattress"
                      onMouseEnter={() => handleMattressMouseEnter("standard-mattress")}
                      onMouseLeave={handleMattressMouseEnter}
                    >Standard Latex Mattress</NavDropdown.Item>
                    <NavDropdown.Item href="/product/Mattress/2/Soft-Latex-Mattress"
                      onMouseEnter={() => handleMattressMouseEnter("Soft-mattress")}
                      onMouseLeave={handleMattressMouseEnter}
                    >
                      Soft Latex Mattress
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/product/Mattress/3/Orthopedic-Latex-Mattress"
                      onMouseEnter={() => handleMattressMouseEnter("Orthopedic-mattress")}
                      onMouseLeave={handleMattressMouseEnter}
                    >
                      Orthopedic Latex Mattress
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/product/Mattress/4/7-zone-comfort-Mattress"
                      onMouseEnter={() => handleMattressMouseEnter("7-zone-mattress")}
                      onMouseLeave={handleMattressMouseEnter}
                    >
                      7 zone comfort Mattress
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/product/Mattress/5/Coir-Mattress"
                      onMouseEnter={() => handleMattressMouseEnter("Coir-mattress")}
                      onMouseLeave={handleMattressMouseEnter}
                    >
                      Coir Mattress
                    </NavDropdown.Item>
                  </div>
                  <div className="col-lg-6">
                    {(mattressHoveredIndex === null || mattressHoveredIndex === "standard-mattress") && (
                      <img src={mattressCategory} className="menu-image" />
                    )}
                    {mattressHoveredIndex === "Soft-mattress" && (
                      <img src={ContourCategory} className="menu-image" />
                    )}
                    {mattressHoveredIndex === "Orthopedic-mattress" && (
                      <img src={pillowCategory} className="menu-image" />
                    )}
                    {mattressHoveredIndex === "7-zone-mattress" && (
                      <img src={boxCategory} className="menu-image" />
                    )}
                    {mattressHoveredIndex === "Coir-mattress" && (
                      <img src={boxCategory} className="menu-image" />
                    )}
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown title="Pillows" id="navbarScrollingDropdown" className="nav-item"
                show={showPillowDropdown}
                onMouseEnter={() => handlePillowMouseEnter(null)}
                onMouseLeave={handlePillowMouseLeave}>
                <div className="row pillow-dropdown">
                  <div className="col-lg-6">
                    <NavDropdown.Item
                      href="/pillowProduct/1"
                      onMouseEnter={() => handlePillowMouseEnter("standard")}
                      onMouseLeave={handlePillowMouseLeave}
                    >
                      Standard Latex Pillow
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/pillowProduct/2"
                      onMouseEnter={() => handlePillowMouseEnter("Contour")}
                      onMouseLeave={handlePillowMouseLeave}
                    >
                      Contour Latex pillow
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/pillowProduct/3"
                      onMouseEnter={() => handlePillowMouseEnter("moon")}
                      onMouseLeave={handlePillowMouseLeave}
                    >
                      Moon Latex Pillow
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/pillowProduct/4"
                      onMouseEnter={() => handlePillowMouseEnter("Box")}
                      onMouseLeave={handlePillowMouseLeave}
                    >
                      Box Latex Pillow
                    </NavDropdown.Item>
                  </div>
                  <div className="col-lg-6">
                    {(pillowHoveredIndex === null || pillowHoveredIndex === "standard") && (
                      <img src={mattressCategory} className="menu-image" />
                    )}
                    {pillowHoveredIndex === "Contour" && (
                      <img src={ContourCategory} className="menu-image" />
                    )}
                    {pillowHoveredIndex === "moon" && (
                      <img src={pillowCategory} className="menu-image" />
                    )}
                    {pillowHoveredIndex === "Box" && (
                      <img src={boxCategory} className="menu-image" />
                    )}
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown title="Toppers" id="navbarScrollingDropdown" className="nav-item"
                show={showTopperDropdown}
                onMouseEnter={() => handleTopperMouseEnter(null)}
                onMouseLeave={handleTopperMouseLeave}
              >
                <div className="row Topper-dropdown">
                  <div className="col-lg-6">
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleTopperMouseEnter("7-Zone-topper")}
                      onMouseLeave={handleTopperMouseLeave}
                    >
                      7 Zone Comfort Latex Topper
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleTopperMouseEnter("Plush-topper")}
                      onMouseLeave={handleTopperMouseLeave}
                    >
                      Plush Latex Topper
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleTopperMouseEnter("Firm-topper")}
                      onMouseLeave={handleTopperMouseLeave}
                    >
                      Firm Latex T0pper
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleTopperMouseEnter("Firm-Medium-topper")}
                      onMouseLeave={handleTopperMouseLeave}
                    >
                      Firm Medium Latex Topper
                    </NavDropdown.Item>
                  </div>
                  <div className="col-lg-6">
                    {(TopperHoveredIndex === null || TopperHoveredIndex === "7-Zone-topper") && (
                      <img src={mattressCategory} className="menu-image" />
                    )}
                    {TopperHoveredIndex === "Plush-topper" && (
                      <img src={ContourCategory} className="menu-image" />
                    )}
                    {TopperHoveredIndex === "Firm-topper" && (
                      <img src={pillowCategory} className="menu-image" />
                    )}
                    {TopperHoveredIndex === "Firm-Medium-topper" && (
                      <img src={boxCategory} className="menu-image" />
                    )}
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown title="Bedding" id="navbarScrollingDropdown" className="nav-item"
                show={showBeddingDropdown}
                onMouseEnter={() => handleBeddingMouseEnter(null)}
                onMouseLeave={handleBeddingMouseLeave}
              >
                <div className="row Bedding-dropdown">
                  <div className="col-lg-6">
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleBeddingMouseEnter("7-Zone-Bedding")}
                      onMouseLeave={handleBeddingMouseLeave}
                    >
                      Organic Cotton Mattress Protector
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleBeddingMouseEnter("Plush-Bedding")}
                      onMouseLeave={handleBeddingMouseLeave}
                    >
                      Organic Cotton Pillow Cover
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleBeddingMouseEnter("Firm-Bedding")}
                      onMouseLeave={handleBeddingMouseLeave}
                    >
                      Aloevera Mattress Protector
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleBeddingMouseEnter("Firm-Medium-Bedding")}
                      onMouseLeave={handleBeddingMouseLeave}
                    >
                      Turmeric Mattress Protector
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleBeddingMouseEnter("Firm-Medium-Bedding")}
                      onMouseLeave={handleBeddingMouseLeave}
                    >
                      Silver Mattress Protector
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleBeddingMouseEnter("Firm-Medium-Bedding")}
                      onMouseLeave={handleBeddingMouseLeave}
                    >
                      Tencel Mattress Protector
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleBeddingMouseEnter("Firm-Medium-Bedding")}
                      onMouseLeave={handleBeddingMouseLeave}
                    >
                      Bamboo Mattress Protector
                    </NavDropdown.Item>
                  </div>
                  <div className="col-lg-6">
                    {(BeddingHoveredIndex === null || BeddingHoveredIndex === "7-Zone-Bedding") && (
                      <img src={mattressCategory} className="menu-image" />
                    )}
                    {BeddingHoveredIndex === "Plush-Bedding" && (
                      <img src={ContourCategory} className="menu-image" />
                    )}
                    {BeddingHoveredIndex === "Firm-Bedding" && (
                      <img src={pillowCategory} className="menu-image" />
                    )}
                    {BeddingHoveredIndex === "Firm-Medium-Bedding" && (
                      <img src={boxCategory} className="menu-image" />
                    )}
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown title="Kids/Baby Range" id="navbarScrollingDropdown" className="nav-item"
                show={showKidsDropdown}
                onMouseEnter={() => handleKidsMouseEnter(null)}
                onMouseLeave={handleKidsMouseLeave}
              >
                <div className="row Kids-dropdown">
                  <div className="col-lg-6">
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleKidsMouseEnter("7-Zone-Kids")}
                      onMouseLeave={handleKidsMouseLeave}
                    >
                      Mattress
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleKidsMouseEnter("Plush-Kids")}
                      onMouseLeave={handleKidsMouseLeave}
                    >
                      Pillows
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"
                      onMouseEnter={() => handleKidsMouseEnter("Firm-Kids")}
                      onMouseLeave={handleKidsMouseLeave}
                    >
                      Kidss
                    </NavDropdown.Item>
                  </div>
                  <div className="col-lg-6">
                    {(KidsHoveredIndex === null || KidsHoveredIndex === "7-Zone-Kids") && (
                      <img src={mattressCategory} className="menu-image" />
                    )}
                    {KidsHoveredIndex === "Plush-Kids" && (
                      <img src={ContourCategory} className="menu-image" />
                    )}
                    {KidsHoveredIndex === "Firm-Kids" && (
                      <img src={pillowCategory} className="menu-image" />
                    )}
                    {KidsHoveredIndex === "Firm-Medium-Kids" && (
                      <img src={boxCategory} className="menu-image" />
                    )}
                  </div>
                </div>
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
              <FontAwesomeIcon icon={faPhone} className="nav-item icon" />
              <FontAwesomeIcon icon={faCartShopping} onClick={handleAddToCartSideNav} className="nav-item icon" />
              <FontAwesomeIcon icon={faUser} className="nav-item icon" onClick={handleLoginOpen} />
              <Dialog
                open={open}
                onClose={handleLoginClose}>
                <DialogContent>
                  <div className="fs-2 my-3 icon text-center">
                    <FontAwesomeIcon icon={faUser} className="nav-item icon" />
                    <h4 className="fw-bold my-4 fs-4" >WELCOME</h4>
                    <h6 className="mb-2 fw-bold signin">SIGN IN or SIGN UP</h6>
                  </div>
                  <hr />
                  <div classNameName="form-data">
                    {!showOtpInput? (<form onSubmit={handlePhoneSubmit}>
                      <p className="text-center otp my-4">Enter your phone number and we will send you a 6 digit OTP.</p>
                        <input type="text"
                          value={phoneNumber}
                          placeholder="Enter Phone Number"
                          className="w-100 phonenumber"
                          onChange={handlePhoneNumber}
                          required />
                        <div className="mobileotp">
                          <button type="submit" className="btn btn-outline-success fw-bold" >SEND OTP</button>
                        </div>
                      </form> ):
                      (<div><p>We have sent a 6 digit OTP to {phoneNumber}. Please enter it here. Resend OTP?</p>
                      <OtpInput length={6} onOtpSubmit={onOtpSubmit}/>
                      </div>)
                    }
                
                  </div>
                  <div class="mb-2">
                <button class="popup-close" id="close" type="button" onClick={handleLoginClose}>
                  &#10006;
                </button>
              </div>
                </DialogContent>
              </Dialog>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {sideBarshow && <Addtocart handleCloseSideNav={handleCloseSideNav} sideBarshow={sideBarshow}></Addtocart>}
    </>
  );
}
export default Header;
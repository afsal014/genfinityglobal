import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { FaAppStoreIos, FaAvianex, FaBattleNet, FaOdnoklassnikiSquare, FaPhoenixSquadron } from 'react-icons/fa';
import { LinkContainer } from "react-router-bootstrap";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motions"
import './header.css';

function Header() {
  
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.25 }}
    >
      <Navbar bg='transperent' variant='light' expand='lg' collapseOnSelect>
        <Container style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className="nav-holder">
            <LinkContainer to={'/'}>
              <Navbar.Brand style={{ fontWeight: 'bold' }} href='/'><img className='logo' src="Logo/GG_Logo.png" alt="" /></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <LinkContainer to={'/admin'}>
                  {/* <Nav.Link className='navigation-links'> Admin </Nav.Link> */}
                  <div className="navigation-links">
                    Admin
                  </div>
                </LinkContainer>
                <LinkContainer to={'/login'}>
                  <div className="navigation-links">
                    Explore
                  </div>
                </LinkContainer>
                <LinkContainer to={'/login'}>
                  <div className="navigation-links">
                    Account
                  </div>
                </LinkContainer>
                <LinkContainer to={'/login'}>
                  <div className="navigation-links">
                    Service
                  </div>
                </LinkContainer>
              </Nav>
              <a role="button" id="globalnav-menubutton-link-search" class="globalnav-link globalnav-link-search" data-topnav-flyout-trigger-regular="" data-topnav-flyout-trigger-compact="" aria-label="Search apple.com" aria-expanded="false" data-analytics-title="open - search field"><span class="globalnav-image-compact"><svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg">
                <path d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z"></path></svg></span></a>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </motion.div>
  )
}

export default Header

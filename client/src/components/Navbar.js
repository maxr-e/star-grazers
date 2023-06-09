import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, } from 'react-bootstrap';
import SignUpForm from '../pages/Signup';
import LoginForm from '../pages/Login';
import '../styles/Nav.css';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className="nav" variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
          Star-gazers
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'>
            <Nav className='ml-auto d-flex'>
            <Nav.Link className="navlinks" as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link className="navlinks" as={Link} to='/stars'>
                Star Talk
              </Nav.Link>
              <Nav.Link className="navlinks" as={Link} to='/moonphases'>
                Moon Phases
              </Nav.Link>
              <Nav.Link className="navlinks" as={Link} to='/starcharts'>
                Star Charts
              </Nav.Link>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link className="navlinks" as={Link} to='/me'>
                  {Auth.getProfile().data.username}'s Profile
                  </Nav.Link>
                  <Nav.Link className="navlinks" onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                <Nav.Link className="navlinks" onClick={() => setShowModal(true)}>Login/Signup</Nav.Link>
                </>
              )}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};


export default AppNavbar;

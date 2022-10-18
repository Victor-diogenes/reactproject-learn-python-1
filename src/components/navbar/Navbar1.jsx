import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
//import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

//import { NavLink } from "react-router-dom"
import './navbar.css'
//import Logo from './vc.png'
import Logo1 from './V.png'


const Navbar1 = () => {
  return (
    <>
      <Navbar  collapseOnSelect expand="lg" bg="light" variant="light" sticky='top'>
        <Container>
        <Navbar.Brand href="/"><img src={Logo1} alt="" className='logo'/><a className='v' href='/'>V</a><a className='m' href='/'>M</a><a className='v' href='/'>D</a><a className='t' href='/'>Tutorials</a></Navbar.Brand>
    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id='link'>
           
             
              <Nav.Link href="/getstarted">PYTHON</Nav.Link>
              <Nav.Link href='#blog'> BLOG</Nav.Link>
              <Nav.Link href="#plus">PYTHON PLUS</Nav.Link>
            
          </Nav>
          <Nav>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
         < Nav.Link href="#terms">   TERMS</Nav.Link>
           <Nav.Link href="/privacy">  PRIVACY</Nav.Link>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </>
  )
}

export default Navbar1
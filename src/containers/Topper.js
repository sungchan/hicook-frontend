import '../App.css';
import React from 'react';
import { Navbar, Nav, Button, NavDropdown, Form, FormControl, Container, Col, Row } from 'react-bootstrap';

class Topper extends React.Component {

	render(){
		return (

				<Navbar expand="md" >
	  			<Navbar.Brand href="#home" align='bottom'>
	  				<img src='/logo-text.png' height={ 60 }/>
  				</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav>
				      <Nav.Link href="#home">Home</Nav.Link>
				      <Nav.Link href="#about">About</Nav.Link>
				      <Nav.Link href="#menu">Menu</Nav.Link>
				      <Nav.Link href="#visit">Visit</Nav.Link>
				    </Nav>
					</Navbar.Collapse>
				</Navbar>
 
		);
	};
}

export default Topper;
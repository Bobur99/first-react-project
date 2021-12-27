import React, { Component } from 'react';
import { 
    Button, 
    Container, 
    Form, 
    FormControl, 
    Nav,
    Navbar, 
    NavbarBrand, 
    NavLink    
} from 'react-bootstrap';
import logo from './logo192.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';



export default class Header extends Component {
    render() {
        return (
            <>
            <Router>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                         /> React site
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse 
                    id="responsive-navbar-nav" 
                    className="justify-content-between">

                        <Nav className="mr-auto text-center">
                            <Link to="/"> Home </Link>
                            <Link to="/about"> About us </Link>
                            <Link to="/contacts"> Contacts </Link>
                            <Link to="/blog"> Blog</Link>
                        </Nav>

                        <Form inline>
                            <FormControl 
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            />   
                            <Button 
                            className="btn-search"
                        variant="outline-info">Search</Button>                          
                        </Form>  

                    </Navbar.Collapse>                        
                </Container>
            </Navbar>

            
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
            </Router>
            </>
        )
    }
}
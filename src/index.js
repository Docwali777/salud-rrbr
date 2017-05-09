import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style/styles.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../components/Home'
import {Nav, Navbar, NavDropdown, NavItem, MenuItem, LinkContainter } from 'react-bootstrap'
const { Header, Collapse, Toggle, Brand } = Navbar
import About from '../components/About'
import Contact from '../components/Contact'



const App=()=>{
    return(
      <div>
        <Router>
          <div>
        <Navbar inverse collapseOnSelect>
          <Header>
            <Brand>
                  <Link to='/'>SaluD/Os</Link>
            </Brand>
            <Toggle/>
          </Header>
          <Collapse>
            <Nav>

                <NavItem><Link className='nav-item-link' to='/about'>About</Link></NavItem>
                <NavItem><Link className='nav-item-link' to='/contact'>Contact Us</Link></NavItem>

            </Nav>
          </Collapse>
        </Navbar>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
      </Router>

              </div>
)
}


render(<App />
  , document.getElementById('root'))

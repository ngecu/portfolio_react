import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './App.css'
import {Home,Skills,Projects} from './components'
import styled from 'styled-components';
import './App.css';
import { AnimatedSwitch } from 'react-router-transition';

export default function App() {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #E73C83;
`;

  return (
    <Router>
      <div className="App">
      <Navbar >
    <Nav className="mr-auto">
 
    </Nav>
    <Nav className="mr-auto">
      <Nav.Link ><Link to="/skills">Skills</Link></Nav.Link>
      <Nav.Link > <Link to="/">
        <Title>Dev Ngecu</Title>
        </Link></Nav.Link>
      <Nav.Link href="#pricing"> <Link to="/projects">Projects</Link></Nav.Link>
    </Nav>
    
  </Navbar>

        <Switch>
          <Container>
        <AnimatedSwitch
      atEnter={{ opacity: 0, offset: -100 }}
      atLeave={{ opacity: 0 ,offset: -100}}
      atActive={{ opacity: 1,offset: 0 }}
      mapStyles={(styles) => ({
        transform: `translateX(${styles.offset}%)`,
      })}
      className="switch-wrapper"
    >
      
          <Route path="/skills">
          <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
          <Home />
            
          </Route>
          </AnimatedSwitch>
          </Container>
        </Switch>
        
      </div>
      
    </Router>
  );
}

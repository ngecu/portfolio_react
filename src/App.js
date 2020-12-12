import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import './App.css'
// import {Home,SKills,Projects} from './component'
import Home from './component/Home/Home.js';
import Skills from './component/Skills/Skills.js';
import Projects from './component/Projects/Projects.js';
import styled from 'styled-components';
import {Container} from 'react-bootstrap'
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

  
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }


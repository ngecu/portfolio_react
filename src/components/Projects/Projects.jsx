import React, { Component } from 'react'
import {Row,Col,Card,Button} from 'react-bootstrap';
import './Projects.css';
import advicepic from '../../images/advice.png';
import covidpic from '../../images/covid19Dashborad.png';
import currencyConverterpic from '../../images/currencyConverter.png';
import Ecommercepic from '../../images/Ecommerce.png';
import funcactivitypic from '../../images/funactivity.png';
import mywebsitepic from '../../images/mywebsite.png';
import schoolsystempic from '../../images/schoolsystem.png';
import webdictionarypic from '../../images/webdictionary.jpg';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                 <Row className="d-flex" >
                     <h1 className="someProjects"> SOME OF MY PROJECTS</h1>
                 </Row>

                <Row>
                   
                    <Col xs={12} md={4}>
                    <a href="https://kenyacovid19.herokuapp.com/">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>KENYA COVID 19 DASHBOARD</Card.Title>
    <Card.Text>
      
    <img src={covidpic} />
    <div class="overlay">
    <div class="text">
      July, 2020 
      <br/>
      <img src="https://www.vectorlogo.zone/logos/javascript/javascript-vertical.svg" alt=""/>
    <br/>
    Fetch Concept
  
    <br/>
    &#127775; &#127775; &#127775;  &#127775;  &#127775; 

    </div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>

                    <Col xs={12} md={4}>
                    <a href="https://fun-activity.netlify.app/">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>FUN ACTIVITY REACT APP</Card.Title>
    <Card.Text>
    <img src={funcactivitypic} />
    <div class="overlay">
    <div class="text">
    Sep, 2020
    <br/>
      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt=""/>
      <br/>
      State Mutation Concept
      <br/>
      &#127775; &#127775; &#127775;  &#127775;  &#127775; 

      </div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>

                    <Col xs={12} md={4}>
                    <a href="https://devngecu.herokuapp.com/">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>TUTORIALS WEB BLOG</Card.Title>
    <Card.Text>
            <img src={mywebsitepic} />
            <div class="overlay">
    <div class="text">
      Aug, 2020 
      <br/>
      <img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" alt=""/>
      <br/>
      Django Project
      <br/>
      &#127775; &#127775; &#127775;  &#127775;  &#127775; 

    </div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>
                    
                    
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                    <a href="https://devngecudictionaryapp.netlify.app/">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>DICTIONARY WEB APP</Card.Title>
    <Card.Text>
        <img src={webdictionarypic} />
        <div class="overlay">
    <div class="text">
    Jul, 2020
    
    <br/>
    <img src="https://www.vectorlogo.zone/logos/javascript/javascript-vertical.svg" alt=""/>
  <br/>
  Destructuring JSON Concept
  <br/>
  &#127775; &#127775; &#127775;  &#127775;  &#127775; 
    </div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>   

                    <Col xs={12} md={4}>
                    <a href="https://github.com/ngecu/NodeRESTAPIExample">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>NODE REST API (SC)</Card.Title>
    <Card.Text>
        <img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15921/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png"/>
        <div class="overlay">
    <div class="text">
      Dec,2020
      <br/>
      <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" alt=""/>
      <br/>
      CRUD Operations on servers
      <br/>
      &#127775; &#127775; &#127775;  &#127775;  &#127775; 

    </div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>   

                    <Col xs={12} md={4}>
                    <a href="https://github.com/ngecu/converter_currency">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>CURRENCY CONVERTER(SC)</Card.Title>
    <Card.Text>
        <img src={currencyConverterpic}/>
        <div class="overlay">
        <div class="text">
    Dec, 2020
    <br/>
      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt=""/>
      <br/>
      State Mutation Concept
      <br/>
      &#127775; &#127775; &#127775;  &#127775;  &#127775; 

      </div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>   

                </Row>

                <Row>
                   
                   <Col xs={12} md={4}>
                   <a href="https://devngecuadviceapp.netlify.app/">
                   <Card className="text-center">
 <Card.Body>
   <Card.Title>API ADVICE W.APP</Card.Title>
   <Card.Text>
   <img src={advicepic} />
   <div class="overlay">
   <div class="text">
    Sep, 2020
    <br/>
      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt=""/>
      <br/>
      State Mutation Concept
      <br/>
      &#127775; &#127775; &#127775;  &#127775;  &#127775; 

      </div>
  </div>
   </Card.Text>
  
 </Card.Body>
</Card>
</a>
                   </Col>

                   <Col xs={12} md={4}>
                 
                   <Card className="text-center">
 <Card.Body>
   <Card.Title>E-COMMERCE SYS </Card.Title>
   <Card.Text>
   <img src={Ecommercepic} alt="ecomeerce sys ui" />
   <div class="overlay">
    <div class="text">Django Framework</div>
  </div>
      
   </Card.Text>
  
 </Card.Body>
</Card>

                   </Col>

                   <Col xs={12} md={4}>
                   
                   <Card className="text-center">
 <Card.Body>
   <Card.Title>SCHOOL SYSTEM </Card.Title>
   <Card.Text>
           <img src={schoolsystempic} alt="school sys ui" />
           <div class="overlay">
    <div class="text">Django Framework</div>
  </div>
   </Card.Text>
  
 </Card.Body>
</Card>

                   </Col>
                   
                   
               </Row>
                
                
            
            </div>
        )
    }
}

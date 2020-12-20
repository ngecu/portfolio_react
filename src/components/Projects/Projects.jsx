import React, { Component } from 'react'
import {Row,Col,Card,Button} from 'react-bootstrap';
import './Projects.css';
import logo from './schoolsystem.png'
export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                 <Row className="d-flex" >
                     <h1 className="someProjects"> SOME OF MY PROJECTS</h1>
                 </Row>

                <Row>
                   
                    <Col>
                    <a href="https://kenyacovid19.herokuapp.com/">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>KENYA COVID 19 DASHBOARD</Card.Title>
    <Card.Text>
      
    <img src="http://devngecu.herokuapp.com/images/covid19Dashborad.png" />
    <div class="overlay">
    <div class="text">Vanilar JavaScript</div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>

                    <Col>
                    <a href="https://fun-activity.netlify.app/">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>FUN ACTIVITY REACT APP</Card.Title>
    <Card.Text>
    <img src="https://raw.githubusercontent.com/ngecu/Fun_Activity_App/master/preview.png" />
    <div class="overlay">
    <div class="text">React JS</div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>

                    <Col>
                    <a href="https://devngecu.herokuapp.com/">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>TUTORIALS WEB BLOG</Card.Title>
    <Card.Text>
            <img src="http://devngecu.herokuapp.com/images/mywebsite.png"/>
            <div class="overlay">
    <div class="text">Django FrameWork</div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>
                    
                    
                </Row>
                <Row>
                    <Col>
                    <a href="https://devngecudictionaryapp.netlify.app/">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>DICTIONARY WEB APP</Card.Title>
    <Card.Text>
        <img src="http://devngecu.herokuapp.com/images/dictionary_demo.jpg"/>
        <div class="overlay">
    <div class="text">Vanilar JavaScript</div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>   

                    <Col>
                    <a href="https://github.com/ngecu/NodeRESTAPIExample">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>NODE REST API (SC)</Card.Title>
    <Card.Text>
        <img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15921/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png"/>
        <div class="overlay">
    <div class="text">JavaScript</div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>   

                    <Col>
                    <a href="https://github.com/ngecu/converter_currency">
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>CURRENCY CONVERTER(SC)</Card.Title>
    <Card.Text>
        <img src="https://raw.githubusercontent.com/ngecu/converter_currency/main/src/images/currencyCOnverter.png"/>
        <div class="overlay">
    <div class="text">React</div>
  </div>
    </Card.Text>
   
  </Card.Body>
</Card>
</a>
                    </Col>   

                </Row>

                <Row>
                   
                   <Col>
                   <a href="https://devngecuadviceapp.netlify.app/">
                   <Card className="text-center">
 <Card.Body>
   <Card.Title>API ADVICE W.APP</Card.Title>
   <Card.Text>
   <img src="http://devngecu.herokuapp.com/images/advice.png" />
   <div class="overlay">
    <div class="text">React</div>
  </div>
   </Card.Text>
  
 </Card.Body>
</Card>
</a>
                   </Col>

                   <Col>
                 
                   <Card className="text-center">
 <Card.Body>
   <Card.Title>E-COMMERCE SYS </Card.Title>
   <Card.Text>
   <img src="https://raw.githubusercontent.com/ngecu/converter_currency/main/src/images/Ecommerce.png" alt="ecomeerce sys ui" />
   <div class="overlay">
    <div class="text">Django Framework</div>
  </div>
      
   </Card.Text>
  
 </Card.Body>
</Card>

                   </Col>

                   <Col>
                   
                   <Card className="text-center">
 <Card.Body>
   <Card.Title>SCHOOL SYSTEM </Card.Title>
   <Card.Text>
           <img src={logo} alt="school sys ui" />
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
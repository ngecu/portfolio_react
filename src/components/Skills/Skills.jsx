import React, { Component } from 'react'
import {Row,Col,Card,Button} from 'react-bootstrap';
import './Skills.css';

export default class Skills extends Component {
    render() {
        return (
            <div className="skills">
                 <Row>
                    <Col xs={12} md={4}>
                    <img src="https://github-readme-stats.vercel.app/api?username=ngecu&&show_icons=true&theme=radical" className="w-100" alt="Ngecu's Github Stats"/>

                    </Col>
                    
                    <Col>
                    <p className="someProjects">
                   Hobbies $ Interests
                   </p>
                   <p>
                   Besides my passion for coding, I love to play video games, specifically RPGs and MMORPGs.I'm a Netflix and Hulu binger. I am a huge fan of Pickey Blinders.You can find me yelling at my TV when my favorite Survivor castaway gets voted off the island. My favorite foods are ugali and Chicken. 
                   </p>
                    </Col>
                   
                </Row>

                <Row>
                    <Col>
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>FRONTEND</Card.Title>
    <Card.Text>
    <img src="https://chrischindev.com/assets/tech/reactlogo2.png" />
        <img src="https://chrischindev.com/assets/tech/htmllogo.png" />
        <img src="https://chrischindev.com/assets/tech/csslogo.png"/>
        <img src="https://chrischindev.com/assets/tech/bootstraplogo.png" />
        <img src="https://chrischindev.com/assets/tech/jquery.png"/>
    </Card.Text>
   
  </Card.Body>
</Card>
                    </Col>

                    <Col>
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>BACKEND</Card.Title>
    <Card.Text>
    <img src="https://chrischindev.com/assets/tech/nodelogo.png" />
        <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" />
        
        <img src="https://chrischindev.com/assets/tech/oauth.png" />
        
            <img src="https://chrischindev.com/assets/tech/postgreslogo.png"/>
            <img src="https://chrischindev.com/assets/tech/socket-io-logo.png"/>
    </Card.Text>
   
  </Card.Body>
</Card>
                    </Col>

                    <Col>
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>DEVOPS</Card.Title>
    <Card.Text>
    <img src="https://chrischindev.com/assets/tech/gitlogo.png" />
        <img src="https://chrischindev.com/assets/tech/githublogo.png" />
            <img src="https://chrischindev.com/assets/tech/npm.png"/>
            <img src="https://chrischindev.com/assets/tech/webpack.png"/>
            <img src="https://chrischindev.com/assets/tech/heroku.png"/>
    </Card.Text>
   
  </Card.Body>
</Card>
                    </Col>
                    
                    
                </Row>
                <Row>
                    <Col>
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>LANGUAGES</Card.Title>
    <Card.Text>
    <img src="https://chrischindev.com/assets/tech/jslogo.png" />
        <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" />
        <img src="https://chrischindev.com/assets/tech/c++.png"/>
        <img src="https://www.vectorlogo.zone/logos/microsoft_vb/microsoft_vb-ar21.svg"/>
    </Card.Text>
   
  </Card.Body>
</Card>
                    </Col>

                    <Col>
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>TOOLS</Card.Title>
    <Card.Text>
    <img src="https://chrischindev.com/assets/tech/vscode.png" />
        <img src="https://chrischindev.com/assets/tech/postman.png" />
        <img src="https://www.vectorlogo.zone/logos/atom_io/atom_io-icon.svg" />
        <img src="https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg" />
        
        
     
    </Card.Text>
   
  </Card.Body>
</Card>
                    </Col>

                    <Col>
                    <Card className="text-center">
  <Card.Body>
    <Card.Title>OTHER</Card.Title>
    <Card.Text>
    <img src="https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" />
        <img src="https://andrewborstein.com/assets/img/photoshop.png" />
            <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"/>
            <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"/>
    </Card.Text>
   
  </Card.Body>
</Card>
                    </Col>
                    
                    
                </Row>
                <Row>
                    <Col className="youtube">
                    
                    </Col>
                    <Col xs={12} md={6}>
                    <p className="someProjects" >Experience</p>
                    <p>
                        Am currently the lead web developer at <a href="http://momonick.com/"> <span> MOMONICKS LIMITED </span> </a> and <a href="https://eventornado.com/event/eu-africa-the-post-crisis-journey#home">  <span>  hackathon </span> </a>
                        </p>
                        <p>
                    I also run a <a href="https://www.youtube.com/channel/UCUEr3z34uxW_3r0ruUxqzkw"> <span>  Youtube Channel</span> </a> and build new projects just to tickle my brain and love teaching others how they're made.
                    </p>
                    <p>
                        The youtube projects go hand in hand with writing tech related blogs.So i also run a tech tutorial blog page <a href="https://devngecu.herokuapp.com/"> <span>  Have a look </span> </a>
                    </p>
                    </Col>
                </Row>
               
            
            </div>
        )
    }
}

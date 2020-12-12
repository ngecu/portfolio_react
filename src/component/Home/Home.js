import React, { Component } from 'react'
import {Row,Col,Button} from 'react-bootstrap';
import './Home.css'
import axios from 'axios'
import {Bar} from 'react-chartjs-2';
import {AiFillGithub,AiFillInstagram,AiFillFacebook,AiFillTwitterCircle,AiFillMail,AiOutlineDownload} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa'
// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }



export default class Home extends Component {

  componentDidMount(){
    this.fetchAPI()
  }

  fetchAPI = ()=>{
axios.get('https://covid19.mathdro.id/api')
.then((response)=>{
  const {confirmed,recovered,deaths} = response.data
  this.setState({confirmed,recovered,deaths})
})
  }

  state = {
    labels :  ['confirmed','recovered','deaths'],
    confirmed: "",
    recovered: " ",
    deaths: " "
  }
  render() {
    const {data,confirmed,recovered,deaths,labels} = this.state
    console.log("data:",data)
    return (
       <div>
        <Row>
    <Col sm  className="img">
    
    </Col>
          <Col sm className="col2">
              <Row>
              <p>
          Hey there! My name is <span>Robinson Ngecu</span> from the great mother land of Kenya.&#128521;I am a Web Developer currently learning JavaScript and Python.I post videos on 
        <div class="g-ytsubscribe" data-channelid="UCUEr3z34uxW_3r0ruUxqzkw" data-layout="default" data-count="hidden"></div>
        and code on<a class="github-button" href="https://github.com/ngecu" target="_blank" aria-label="Follow @ngecu on GitHub">Github</a> 
          </p>

              </Row>
         
          <Row>
          <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Cases',
              data: [confirmed.value, recovered.value, deaths.value],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
                
            ],
            borderColor: [
                '#ffd600',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
            color:'rgba(1, 1, 1, 0.2)',
            },
            
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in the world` },

          scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 18,
                    beginAtZero: true
                }
            }]
        }
        }}
      />
          </Row>
          </Col>
        </Row>
        <Row>
          <h1 className="Alias">FROM &#127472;&#127466; TO THE 🌍 </h1>
        </Row>
        <Row>
          <p className="text-c">
          Working as an online editor, I started learning basic HTML and CSS to update the website, but the immense satisfaction I got from figuring out solutions drove me to learn more. I was struck by how many parallels there are between writing code and writing more generally—after all, an errant semicolon is an errant semicolon whether it’s in a line of JavaScript or an essay about Impressionist painting.
          <br/>
          And I always love to chat So go ahead: write me an email, add me on LinkedIn, even peruse my code on Github if you're so inclined.
                    </p>
        </Row>
        <Row>
          <Col >
          <ul className="text-c">
            <li>
              <p>
              <a href="https://github.com/ngecu/">
              <AiFillGithub/>  Github
              </a>
              </p>
            </li>

            <li>
              <p>
              <a href="https://www.linkedin.com/in/robinson-ngecu-6a037688/">
              <FaLinkedinIn/> Linkedin
              </a>
              </p>
            </li>

            <li>
              <p>
              <a href="https://twitter.com/_ngecu">
              <AiFillTwitterCircle/> Twitter
              </a>
              </p>
            </li>
           
          </ul>
          </Col>
          <Col>
          
          <ul className="text-c">
          <li>
              <p>
              <a href="https://www.facebook.com/ngecuN">
              <AiFillFacebook/> Facebook
              </a>
              </p>
            </li>

            <li>
              <p>
              <a href="https://www.instagram.com/_ngecu/">
              <AiFillInstagram/> Instagram 
              </a>
              </p>
            </li>
            
            <li>
              <p>
              <a href="mailto:devngecu@gmail.com">
              <AiFillMail/> Mail 
              </a>
              </p>
            </li>
            </ul>
            </Col>
          
         
        </Row>
      
        <Row className="text-c">
        <Button variant="warning" size="lg" > <AiOutlineDownload/> Resume</Button>{' '}
        </Row>
        </div>
    );
  }
}
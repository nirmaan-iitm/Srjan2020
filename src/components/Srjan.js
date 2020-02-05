import React, {Component} from 'react'
import SrjanNav from './SrjanNav/SrjanNav'
import "./Srjan.css"
import AOS from 'aos'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import logo from './img/logo.png'
import iit_mandi from './img/iit_mandi.png'
import nirmaan from './img/nirmaan.png'
import autocad from './img/autocad.png'
import staadpro from './img/staadpro.jpg'
import bridge from './img/bridge.jpg'
import 'aos/dist/aos.css'; 
import avatar from './img/avatar.jpg'
import { SocialIcon } from 'react-social-icons';
import MaterialIcon from 'material-icons-react';

AOS.init()
AOS.refresh();

class Srjan extends Component{
    render(){
        return (
            <div style={{ overflowX: "hidden"}}>
                <div id="TopSection">
                <SrjanNav />
                    <div data-aos="fade-up" data-aos-duration="1000" className="aosSrjan1">
                            <div className="row">
                                <div className="col">
                                <Card id="card-nirmaan-logo" style={{float: "right"}}>
                                    <center>
                                        <img src={nirmaan} id="logotop" alt="logo"></img>
                                    </center>
                                </Card>
                                </div>
                                <div className="col">
                                <Card id="card-iit-logo">
                                    <center>
                                        <img src={iit_mandi} id="logo_iit" alt="logo"></img>
                                    </center>
                                </Card>
                                </div>
                            </div>    
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" className="aosSrjan2" id="cardTop">
                    <Card bg="light" className="cardSrjan cardSrjan1">
                        <Card.Header><img src={logo} id="logo" alt="logo"></img></Card.Header>
                    </Card>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000" className="aosSrjan3" id="cardSecond">
                    <Card bg="light" className="cardSrjan cardSrjan2">
                        <Card.Body>
                        <Card.Title><h1>सृजन</h1></Card.Title>
                        <hr></hr>
                        <Card.Title><h1>Srijan</h1></Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                    <div data-aos="fade-up" className="aosSrjan4">
                    </div>
                    <center>
                    <h1>
                        <Badge className="date" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" variant="secondary">21</Badge>
                        <Badge className="date" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700" variant="secondary">-</Badge>
                        <Badge className="date" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="900" variant="secondary">23</Badge>
                    </h1>
                    <h3>
                        <Badge data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100" variant="secondary">Feb'20</Badge>
                    </h3>
                    </center>
                </div>
                <Container id="SecondSection">
                <Jumbotron fluid data-aos="flip-up" data-aos-duration="1000">
                    <Container>
                        <h1>About Us</h1>
                        <hr></hr>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem pariatur repudiandae numquam, maiores rerum laborum eveniet, omnis, soluta cum unde cumque officiis praesentium quae ipsam mollitia asperiores iusto perspiciatis sunt?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias impedit possimus vitae reprehenderit atque expedita quae sequi dolorem assumenda ipsum? Voluptatum, deleniti doloremque aperiam architecto pariatur minima veritatis. Aspernatur, voluptates.
                        </p>
                    </Container>
                </Jumbotron>
                </Container>
                <Container fluid id="events">
                    <br></br>
                    <h1><Badge variant="info" data-aos="zoom-in-down" data-aos-duration="1000">Events</Badge></h1>
                    <br></br>
                <Container id="eventcontainer">
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                <center>
                <Card data-aos="fade-up-right" className="cards">
                    <img src={staadpro} alt="cardpic" className="cardpic"></img>
                </Card>
                </center>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 card-info">
                <center>
                <Card border="primary" data-aos="fade-up-left" className="card-right">
                    <Card.Header></Card.Header>
                    <Card.Body>
                    <Card.Title>STAAD.Pro Designing</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </center>
                </div>
                </div>
                <br></br>
                <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 card-info">
                <center>
                <Card border="primary" data-aos="fade-up-right" className="card-right">
                    <Card.Header></Card.Header>
                    <Card.Body>
                    <Card.Title>AutoCAD design</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </center>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <center>
                <Card data-aos="fade-up-left" className="cards">
                    <img src={autocad} alt="cardpic" className="cardpic"></img>
                </Card>
                </center>
                </div>
                </div>
                <br></br>
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                <center>
                <Card data-aos="fade-up-right" className="cards">
                    <img src={bridge} alt="cardpic" className="cardpic"></img>
                </Card>
                </center>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 card-info">
                <center>
                <Card border="primary" data-aos="fade-up-left" className="card-right">
                    <Card.Header></Card.Header>
                    <Card.Body>
                    <Card.Title>Bridge Designing</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </center>
                </div>
                </div>
                </Container>
                </Container>
                <Container id="contact">
                    <Container id="contact-theme">
                    </Container>
                    <Container>
                    <div id="card-contact">
                    <center>
                    <Card border="primary" id="card-contact-main">
                        <Card.Header><h2>Contact Us</h2></Card.Header>
                        <Card.Body id="card-contact-body">
                            <SocialIcon url="https://www.facebook.com/nirmaaniitmandi/" className="socialicon"/>
                            <SocialIcon url="https://github.com/nirmaan-iitm" className="socialicon"/>
                            <SocialIcon url="https://www.linkedin.com/company/nirmman-iit-mandi/" className="socialicon"/>
                            <SocialIcon url="mailto:nirmaan_club@students.iitmandi.ac.in" className="socialicon"/>
                        </Card.Body>
                    </Card>
                    </center>
                    </div>
                    </Container>
                </Container>
                <Container id="team">
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <h4>Team</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Badge variant="primary">Actor</Badge>
                            <br></br>
                            <Image className="avatar" src={avatar} rounded />
                            <br></br>
                            <Badge variant="secondary">Rajnikant</Badge>
                            <br></br>
                            <a href="https://www.google.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+91"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="mailto:"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Badge variant="primary">Actor</Badge>
                            <br></br>
                            <Image className="avatar" src={avatar} rounded />
                            <br></br>
                            <Badge variant="secondary">Rajnikant</Badge>
                            <br></br>
                            <a href="https://www.google.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+91"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="mailto:"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Badge variant="primary">Actor</Badge>
                            <br></br>
                            <Image className="avatar" src={avatar} rounded />
                            <br></br>
                            <Badge variant="secondary">Rajnikant</Badge>
                            <br></br>
                            <a href="https://www.google.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+91"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="mailto:"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={6}>
                            <Badge variant="primary">Actor</Badge>
                            <br></br>
                            <Image className="avatar" src={avatar} rounded />
                            <br></br>
                            <Badge variant="secondary">Rajnikant</Badge>
                            <br></br>
                            <a href="https://www.google.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+91"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="mailto:"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={6}>
                            <Badge variant="primary">Actor</Badge>
                            <br></br>
                            <Image className="avatar" src={avatar} rounded />
                            <br></br>
                            <Badge variant="secondary">Rajnikant</Badge>
                            <br></br>
                            <a href="https://www.google.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+91"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="mailto:"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Badge variant="primary">Actor</Badge>
                            <br></br>
                            <Image className="avatar" src={avatar} rounded />
                            <br></br>
                            <Badge variant="secondary">Rajnikant</Badge>
                            <br></br>
                            <a href="https://www.google.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+91"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="mailto:"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Badge variant="primary">Actor</Badge>
                            <br></br>
                            <Image className="avatar" src={avatar} rounded />
                            <br></br>
                            <Badge variant="secondary">Rajnikant</Badge>
                            <br></br>
                            <a href="https://www.google.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+91"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="mailto:"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Badge variant="primary">Actor</Badge>
                            <br></br>
                            <Image className="avatar" src={avatar} rounded />
                            <br></br>
                            <Badge variant="secondary">Rajnikant</Badge>
                            <br></br>
                            <a href="https://www.google.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+91"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="mailto:"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                    </Row>
                    </Container>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                </Container>
                <hr></hr>
                <center>
                    &copy; Srjan 2020
                </center>
                <hr></hr>
            </div>
        )
    }
}

export default Srjan
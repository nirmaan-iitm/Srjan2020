import React, {Component} from 'react'
import SrjanNav from './SrjanNav/SrjanNav'
import "./Srjan.css"
import AOS from 'aos'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import logo from './img/logo.png'
import 'aos/dist/aos.css'; 
import cardimg from './img/cardimg.jpg'
import { SocialIcon } from 'react-social-icons';

AOS.init()
AOS.refresh();

class Srjan extends Component{
    render(){
        return (
            <div>
                <div id="TopSection">
                <SrjanNav />
                    <div data-aos="fade-right" className="aosSrjan1" id="cardTop">
                    <Card bg="light" className="cardSrjan">
                        <Card.Header><img src={logo} id="logotop" alt="logo"></img></Card.Header>
                    </Card>
                    </div>
                    <div data-aos="fade-right" className="aosSrjan2" id="cardSecond">
                    <Card bg="light" className="cardSrjan">
                        <Card.Body>
                        <Card.Title><h1>सृजन</h1></Card.Title>
                        <hr></hr>
                        <Card.Title><h1>Srjan</h1></Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                    <div data-aos="fade-up" className="aosSrjan3">
                        <hr className="cardSrjan" id="hrTop"></hr>
                    </div>
                    <div data-aos="fade-up" className="aosSrjan4">
                        <p id="presenter">Presented By</p>
                        <p id="presenter">NIRMAAN</p>
                    </div>
                </div>
                <Container id="SecondSection">
                <Jumbotron fluid>
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
                    <h1>Events</h1>
                    <br></br>
                <Container id="eventcontainer">
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                <center>
                <Card data-aos="fade-up-right" className="cards">
                    <img src={cardimg} alt="cardpic" className="cardpic"></img>
                </Card>
                </center>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 card-info">
                <center>
                <Card border="primary" data-aos="fade-up-left" className="card-right">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
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
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
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
                    <img src={cardimg} alt="cardpic" className="cardpic"></img>
                </Card>
                </center>
                </div>
                </div>
                <br></br>
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                <center>
                <Card data-aos="fade-up-right" className="cards">
                    <img src={cardimg} alt="cardpic" className="cardpic"></img>
                </Card>
                </center>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 card-info">
                <center>
                <Card border="primary" data-aos="fade-up-left" className="card-right">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
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
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
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
                    <img src={cardimg} alt="cardpic" className="cardpic"></img>
                </Card>
                </center>
                </div>
                </div>
                <br></br>
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                <center>
                <Card data-aos="fade-up-right" className="cards">
                    <img src={cardimg} alt="cardpic" className="cardpic"></img>
                </Card>
                </center>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 card-info">
                <center>
                <Card border="primary" data-aos="fade-up-left" className="card-right">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
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
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
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
                    <img src={cardimg} alt="cardpic" className="cardpic"></img>
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
                        <Card.Text>
                            <SocialIcon url="https://www.facebook.com/nirmaaniitmandi/" className="socialicon"/>
                            <SocialIcon url="https://github.com/nirmaan-iitm" className="socialicon"/>
                            <SocialIcon url="https://www.linkedin.com/company/nirmman-iit-mandi/" className="socialicon"/>
                            <SocialIcon url="mailto:nirmaan_club@students.iitmandi.ac.in" className="socialicon"/>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </center>
                    </div>
                    </Container>
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
// import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import "../components/Hero/style.css";


function About() {
  return (
    <Container style={{ marginTop: 30 }}>
    <Row><Col size="md-3">
      <div className="headshot"></div></Col></Row>
    <Row>
      <Col size="md-9">
        <h1 id="about">Indira Endaya welcomes you to Codeswitch Studio</h1>   
      </Col>
    </Row>
    <Row>
      <Col size="md-9">
        <p>
        Hello! I am a multi-disciplinary designer with a background in media, communication and culture. I enjoy bringing research to life visually and am experienced in crafting and enhancing content for various audiences and platforms; turning complex information into engaging and accessible stories and explaining technical issues to non-technical people.</p>
        <p>In my journey so far, I have had the pleasure of working with some amazing people: academics and policymakers in the UK; grassroots-based feminists and community radio broadcasters in the global south; teenagers learning how to write for the web; deaf students needing training in Photoshop; musicians, DJs, and artists all eager to share their valuable insights.</p>
        <p>I like learning new things and exploring new places. I am happiest when working in that sweet spot where technology, art and storytelling come together.     </p>   
        
        <h2 id="skills">My Skills</h2>
        <p>Core Adobe CC programmes, Figma and Visual Studio Code. p5js libraries, Touch Designer,Spark AR, Open AI apps. Current bootcamp skills list: HTML/CSS/Git, GitHub, User experience design, JavaScript, Bootstrap, The DOM, APIs, JQuery, JSON, AJAX, Agile development, Node.js, ES6, Object-oriented programming, Test-driven development, React, Behavior-driven development, Agile development, Project demonstration and storytelling.</p>
      </Col>
    </Row>
    <Row>
      <p>Find me on <a className='cv' href='https://www.linkedin.com/in/indira-endaya-3a02088/'>LinkedIn</a>.</p>
      <p>Check out my recent <a className='cv' href='https://tinyurl.com/5f4h6kmf'>graphic design work</a>.</p>


    </Row>

  </Container>
  );
}

export default About;

import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';


function Contact() {
  return (
    <Container style={{ marginTop: 30 }}>
    <Row>
      <Col size="md-9">
        <h1>CONTACT FORM</h1>
      </Col>
    </Row>
    <Row>
      <Col size="md-9">
        <p>
        I am a multi-disciplinary designer with a background in media, communication and culture. I enjoy bringing research to life visually and am experienced in crafting and enhancing content for various audiences and platforms; turning complex information into engaging and accessible stories and explaining technical issues to non-technical people. 
</p><p>
In my journey so far, I’ve had the pleasure of working with some amazing people: academics and policymakers in the UK; grassroots-based feminists and community radio broadcasters in the global south; teenagers learning how to write for the web; deaf students needing training in Photoshop; musicians, DJs, and artists all eager to share their valuable insights. 
</p><p>
I like learning new things and exploring new places. I am happiest when working in that sweet spot where technology, art and storytelling come together.            </p>
        
      </Col>
    </Row>
  </Container>
  );
}

export default Contact;
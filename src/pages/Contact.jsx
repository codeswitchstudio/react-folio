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
        * [ ] Contact:
  * [ ] Must have contact information
  * [ ] Have a contact form for handling events
        ### Updated Social Media Presence

#### LinkedIn

* Make sure to update your LinkedIn Profile with the new skills you've acquired since the last time it was updated.
* If you do not have a LinkedIn profile, please create one.

#### GitHub
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
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import '../components/Hero/style.css';

function Contact() {
  return (
    <Container style={{ marginTop: 30 }}>

    <Row>
      <h1 id='contact-h1'>Contact Information</h1>
      
    </Row>
      
    <Row>
      <p>LinkedIn</p>
      <p>Email</p>
    </Row>

  </Container>
  );
}

export default Contact;





// function Contact() => {
//   return {
//     <>
//      <h1>Contact me here</h1>
//     </>
//   }
// }
// import React from 'react';
// import { Form, Input, TextArea, Button } from 'semantic-ui-react';

// import '../utils/App.css';

// const Contact = () => {

//   {/* --- handleOnSubmit method --- */}

//   return (
//     <div className = 'Contact'>
//       <Form onSubmit={handleOnSubmit}>
//         <Form.Field
//           id='form-input-control-email'
//           control={Input}
//           label='Email'
//           name='user_email'
//           placeholder='Email…'
//           required
//           icon='mail'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-input-control-last-name'
//           control={Input}
//           label='Name'
//           name='user_name'
//           placeholder='Name…'
//           required
//           icon='user circle'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-textarea-control-opinion'
//           control={TextArea}
//           label='Message'
//           name='user_message'
//           placeholder='Message…'
//           required
//         />
//         <Button type='submit' color='green'>Submit</Button>
//       </Form>
//     </div>
//   );
// }

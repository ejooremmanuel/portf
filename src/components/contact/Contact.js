import React from "react";
import { Container, Form } from "semantic-ui-react";

const Contact = () => {
  return (
    <Container style={{ marginTop: "10%" }}>
      <Form style={{ width: "80%" }}>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
        </Form.Group>
        <Form.TextArea
          label="Your message"
          style={{ resize: "none" }}
          placeholder="Please drop your message..."
        />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button primary>Send</Form.Button>
      </Form>
    </Container>
  );
};

export default Contact;

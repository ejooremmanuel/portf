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
          label="About"
          style={{ resize: "none" }}
          placeholder="Tell us more about you..."
        />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button>Submit</Form.Button>
      </Form>
    </Container>
  );
};

export default Contact;

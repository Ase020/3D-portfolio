import styled from "styled-components";
import emailjs from "@emailjs/browser";

import { MapChart } from "../components";
import { useRef, useState } from "react";

// const serviceID = import.meta.env.SERVICE_ID;
// const templateID = import.meta.env.TEMPLATE_ID;
// const apiKey = import.meta.env.PUBLIC_API_KEY;

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    padding: 20px 25px;
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: 200;
`;

const Input = styled.input`
  padding: 10px;
  background: #eceaea;
  border: none;
  outline: none;
  border-radius: 4px 4px 0 0;
`;

const TextArea = styled.textarea`
  background: #eceaea;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 0 0 4px 4px;

  ::placeholder {
    font-weight: 500;
  }
`;

const Button = styled.button`
  background: #da4ea2;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
`;

const Contacts = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    emailjs
      .sendForm(
        "service_fkxrj53",
        "template_8fq0b3l",
        form.current,
        "maz5XYDLGqV1Eo4h7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(false);
          alert("Your message has been sent. I'll get back to you soon :)");
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          alert("Your message hasn't been sent. Please try again later!");
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit} ref={form}>
            <Label>Contact Me</Label>
            <Input placeholder="Name" name="name" />
            <Input
              placeholder="Email"
              style={{ borderRadius: 0 }}
              name="email"
            />
            <TextArea placeholder="Your message" rows={10} name="message" />
            <Button type="submit">{success ? "Sending..." : "Send"}</Button>
          </Form>
        </Left>

        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  );
};

export default Contacts;

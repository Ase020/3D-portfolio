import styled from "styled-components";
import { MapChart } from "../components";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Label>Contact Me</Label>
            <Input placeholder="Name" />
            <Input placeholder="Email" style={{ borderRadius: 0 }} />
            <TextArea placeholder="Your message" rows={10} />
            <Button type="submit">Send</Button>
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

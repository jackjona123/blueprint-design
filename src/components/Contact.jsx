import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 95%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0px;
  text-align: center;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    margin: 20px;
    font-size: 50px;
    margin-top: 0px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: 350px;
  }
  
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0px;
  }
  
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  font-size: 15px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
  @media only screen and (max-width: 980px) {
    padding: 20px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  font-size: 15px;
  @media only screen and (max-width: 480px) {
    padding: 30px 20px;
    margin-top: 15px;
  }
  
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 20px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    display: none;
  }
  @media only screen and (max-width: 980px) {
    width: 100%;
    margin-top: 80px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 980px) {
    margin-bottom: 40px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form action="https://formspree.io/f/xknkydap" method="POST">
            <LeftForm>
              <Input name="name" type="text" placeholder="Your Name" required/>
              <Input type="email" name="_replyto" placeholder="Your Email" required/>
              <Input name="subject" type="text" placeholder="Subject" required/>
            </LeftForm>
            <RightForm>
              <TextArea name="message" type="text" placeholder="Your Message" required/>
              <Button type="submit">Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>6233 Cantay Rd. Mississauga, ON L5R 3Y9</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+1 (647) 499-4219</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@jackjona.live</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;

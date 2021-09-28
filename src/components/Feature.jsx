import React from "react";
import styled from "styled-components";
import App from "../img/app.png";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 980px) {
    flex-direction: column;
    padding: 30px 20px;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
  @media only screen and (max-width: 980px) {
    border-radius: 80px;
    display: none
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 980px) {
    width: 60%;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.span`
  font-size: 70px;
  padding-left: 40px;
  margin-top: -80px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
    padding-left: 10px;
    width: 100%;
  }
  @media only screen and (max-width: 980px) {
    width: 100%;
    padding-top: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
  padding-left: 10px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Desc = styled.p`
  padding-left: 10px;
  font-size: 20px;
  color: #777;
  margin-top: 30px;
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
  
  @media only screen and (max-width: 480px) {
    margin-top: 50px;
    display: none;
  }
  @media only screen and (max-width: 980px) {
    margin-top: 50px;
    display: none;
  }
`;

const Feature = () => {
  return (
    <Container id="features">
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>Good</b> Design
          <br />
          <b>Good</b> Business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
    </Container>
  );
};

export default Feature;

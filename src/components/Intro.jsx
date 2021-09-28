import React from "react";
import styled from "styled-components";
import Woman from '../img/women.png'
import AnimatedShapes from "./AnimatedShapes";
import Scroll from "./Scroll";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding-top: 120px;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 980px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 60px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 980px) {
    width: 100%; 
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (max-width: 980px) {
    width: 80%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
  @media only screen and (max-width: 980px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    
  }
  @media only screen and (max-width: 980px) {
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 980px) {
    margin-top: 20px;
  }
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
  @media only screen and (max-width: 980px) {
    color: lightblue;
  }
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
  @media only screen and (max-width: 980px) {
    color: white;
  }
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }

  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const ImageMobile = styled.img`
  width: 100%;
  display: none;
  @media only screen and (max-width: 980px) {
    position: absolute;
    width: 70%;
    margin-left: 800px;
    z-index: -1;
    display: visible;
  }
`;

const Image = styled.img`
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const Bottom = styled.div`
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Intro = () => {
  return (
    <Container id="intro">
      <Left>
        <Title>Adventures In The Creative Age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <ImageMobile src={Woman}/>
        <Info>
          <Link href="#contact">
            <Button>START A PROJECT</Button>
          </Link>
          <Contact>
            <Phone>Call Us (647) 499-4219</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right><Image src={Woman}/></Right>
      <AnimatedShapes/>
      <Bottom>
          <Scroll />
      </Bottom>
    </Container>
  );
};

export default Intro;

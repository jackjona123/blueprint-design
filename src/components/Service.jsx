import React, { useState } from "react";
import styled from "styled-components";
import How from "../img/how.png";
import MiniCard from "./MiniCard";
import MiniCard2 from "./MiniCard2";
import MiniCard3 from "./MiniCard3";
import Play from "../img/play.png";
import AnimatedShapes from "./AnimatedShapes";


const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const Image = styled.img`
  height: auto;
  width: auto;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  border-radius: 10px;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 980px) {
    padding: 20px;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  
  @media only screen and (max-width: 480px) {
    font-size: 50px;
    margin-top: 70px;
    justify-content: center;
    align-items: center;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  align-items: center;
  display: none;

  @media only screen and (max-width: 480px) {
    margin-bottom: 60px;
  }
`;

const ButtonClick = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 480px) {
    margin-bottom: 60px;
    margin-top: 50px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container id="services">
      <Left>
        <Image src={How} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard2 />
            <MiniCard3 />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works
          </Button>
          <Link href="https://player.vimeo.com/video/617339515" target="_blank" rel="noopener noreferrer">
            <ButtonClick>
              <Icon src={Play} />
              How it works
            </ButtonClick>
          </Link>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
      <AnimatedShapes/>
    </Container>
  );
};

export default Service;

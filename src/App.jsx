import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 480px) {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 980px) {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerAlt = styled.div`
  height: 80vh;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 480px) {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 980px) {
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 60vh
  }
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
  @media only screen and (max-width: 480px) {
    display: none;
  }
  @media only screen and (max-width: 980px) {
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: lightpink;
  @media only screen and (max-width: 480px) {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
  }
  @media only screen and (max-width: 980px) {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
  }
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
  @media only screen and (max-width: 980px) {
    clip-path: polygon(99% 0, 100% 0%, 100% 100%, 33% 100%);
    background-color: coral;
  }
  
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
  @media only screen and (max-width: 480px) {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
  }
  @media only screen and (max-width: 980px) {
    clip-path: polygon(33% 0, 100% 0%, 100% 100%, 99% 100%);
  }
`;

const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <ContainerAlt>
        <Feature />
        <FeatureShape />
      </ContainerAlt>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;

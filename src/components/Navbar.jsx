import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    justify-content: space-evenly;
    align-items: center;
  }
  @media only screen and (max-width: 980px) {
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  text-align: center;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
  @media only screen and (max-width: 920px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 50px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Link = styled.a`
  text-decoration: none;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 15px 25px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 20px;
  text-decoration: none;
  @media only screen and (max-width: 480px) {
    padding: 15px 18px;
    font-size: 13px;
    margin-right: 0px;
  }
  @media only screen and (max-width: 980px) {
    padding: 15px 18px;
    font-size: 13px;
    margin-right: 0px;
    margin-left: 80px;
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Navbar = () => {
  return (
    <Container id="home">
      <Wrapper>
        <Left>
          <Logo>Blueprint Design</Logo>
          <Menu>
            <MenuItem><Link href="#home">Home</Link></MenuItem>
            <MenuItem><Link href="#features">Features</Link></MenuItem>
            <MenuItem><Link href="#services">Services</Link></MenuItem>
            <MenuItem><Link href="#pricing">Pricing</Link></MenuItem>
            <MenuItem><Link href="#contact">Contact</Link></MenuItem>
          </Menu>
        </Left>
        <ContactLink href="#contact">
          <Button>JOIN TODAY</Button>
        </ContactLink>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

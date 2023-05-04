import React, { useRef } from "react";
import styled from "styled-components";
import logo from "../assests/images/logo.jfif";
import {Link} from 'react-router-dom';
import Featured from "./Featured";
const Container = styled.div`
height: 90px;
// background-color: #1b1a1d;
overflow: hidden;
background-color: transparent;
position: fixed;
top: 0;
width: 100vw;
transition: background-color 0.5s ease-in-out;
z-index: 1;
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-start;

color: white;
padding: 0px 0px;

// font-size:30px;
`;

const Right = styled.div`
flex: 0.5;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
padding: 5px 0px;
`;
const AboutUs = styled.div`
font-size: 18px;
cursor: pointer;
font-weight: 500;
`;
const Services = styled.div`
font-size: 18px;
cursor: pointer;
font-weight: 500;
`;
const LoginButton = styled.div`
font-size: 18px;
cursor: pointer;
font-weight: 500;
color:white;
`;
const Button = styled.button`
padding: 4px 15px;
font-size: 18px;
cursor: pointer;
font-weight: 500;
background-color: transparent;
border: solid 1px #ffffff;
color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
color: white;
border-radius: 3px;
height: 100%;
`;
const ImgContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 2px;
`;
const LogoContent = styled.div`
display: flex;
flex-direction: column;
`;

const Content = styled.div`
font-size: 12px;
font-weight: 500;
`;



const Navbar = () => {


  return (
    <Container >
      <Wrapper>
        <Left>
          <LogoContent>
            <ImgContainer>
              <img
                src={logo}
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                alt="logo"
              />
            </ImgContainer>
            <Content>Make your appearance Effective</Content>
          </LogoContent>
        </Left>

        <Right>
          <AboutUs>About</AboutUs>
          <Services>Services</Services>
          <Link to="/login"><LoginButton>Login</LoginButton></Link>
          <Link to="/register"><Button>Join</Button></Link>
        </Right>
      
      </Wrapper>

    </Container>
  );
};

export default Navbar;

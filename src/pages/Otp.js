import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useUserAuth } from "../context/UserAuthContext";
import {auth} from '../firebase';
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Input = styled.input`
  width: 30px;
  height: 30px;
  font-size: 20px;
  text-align: center;
  margin: 5px;
`;
const Content = styled.div`
  flex: 1;
  margin: 25px 0px 0 0;
`;
const Inputs = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const Otp = () => {
    const navigate = useNavigate();
    const [result,setResult] = useState('');
    const {setUpRecaptha} = useUserAuth();
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');
    
    useEffect(() => {
      configureCatcha();
    const phoneNumber = "+91"+phone;
    console.log(phoneNumber);
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
       
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent!!!");
      }).catch((error) => {
        
        console.log(error);
      });
      },[phone]);
  
    
  


  const handleChange = (element,index) => {
    
    if(isNaN(element.value)) return false;
    setOtp([...otp.map((val,idx)=>(idx===index)?element.value:val)]);
    if(element.nextSibling)
    element.nextSibling.focus();
   
  }
  function onSignInSubmit(e){
    e.preventDefault();
    configureCatcha();
    const phoneNumber = "+91"+phone;
    console.log(phoneNumber);
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
       
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent!!!");
      }).catch((error) => {
        
        console.log(error);
      });
  
  }
  
  const configureCatcha=()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log("recaptcha verified");
      },
      defaultCountry:"IN"
    }, auth);
  } 
  const onSubmitOTP=(e)=>{
    const code = otp.join("");
    console.log(code);
  window.confirmationResult.confirm(code).then((result) => {
  
  const user = result.user;
  console.log(JSON.stringify(user));
  alert("User is verified!!");
  navigate(`/register/otp/details?name=${name}&email=${email}&phone=${phone}`)
}).catch((error) => {
  
  console.log("Please Enter valid OTP!!");
});

  }
  return (
    <Container>
      <Wrapper>
        <Title>OTP VERIFICATION</Title>
        <Form onSubmit={onSignInSubmit}>
          <Content>
            Your OTP has been sent successfully to your registered E-mail.
          </Content>
          <Inputs>
            {otp.map((data, index) => {
              return (
                <Input 
                type="text" 
                maxLength="1" 
                onChange={(e)=>handleChange(e.target,index)} 
                key={index} 
                value={data}
                onFocus={(e)=>e.target.select()}/>
              );
            })}
          </Inputs>
                {/* <button onClick={onSubmitOTP}>Verify</button> */}
                <div id="sign-in-button"></div>
                <p>OTP entered:-{otp.join("")}</p>
                <Button onClick={onSubmitOTP}>NEXT</Button>
          
                {/* <button type="submit">Generate</button> */}
                
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Otp;

import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.25)
    ),
    url("https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
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
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Url = styled.a`
  margin: 5px 0px;
  cursor: pointer;
  font-size: 12px;
  text-decoration: underline;
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      console.log("Login Successfully!!!");

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
        setError("Invalid Credentials")
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{color:"red"}}>{error?error:""}</p>
          <Button type="submit" onClick={handleSubmit}>
            LOGIN
          </Button>
          <Url>DO NOT REMEMBER YOUR PASSWORD</Url>
          <Url>
            <Link to="/register">CREATE A NEW ACCOUNT</Link>
          </Url>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

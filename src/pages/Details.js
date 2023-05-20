import React, { useState } from "react";
import styled from "styled-components";
import { useLocation,useNavigate } from 'react-router-dom';
import { useUserAuth } from "../context/UserAuthContext";


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
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const InputChamber = styled.input`
  flex: 1;
  width: 25%;
  margin: 20px 15px 0 0px;
  padding: 10px;
`;
const Inputs = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;
const Dropdown = styled.select`
  flex: 1;
  min-width: 44%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const DropdownInputChamber = styled.select`
  flex: 1;
  width: 26%;
  margin: 20px 20px 0 0px;
  padding: 10px;
`;





const Details = () => {
    const location = useLocation();
    const [error,setError] = useState('');

    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [barId,setBarId] = useState('');
    const [year,setYear] = useState('');
    const [state,setState] = useState('');
    const [chamber,setChamber] = useState('');
    const [courtName,setCourtName] = useState('');
    const [address,setAddress] = useState('');
    const [languages,setLanguages] = useState('');
    const [expertise,setExpertise] = useState('');
    const [aadhar,setAadhar] = useState('');

    const navigate = useNavigate();
    const { signUp } = useUserAuth();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');
  const startYear = 1970;
  const endYear = 2023;
  const states = [
    "Bar Registration Place",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Lakshadweep",
    "Puducherry",
  ];
  const yearOptions = [
    <option key="default" value="">
      Year
    </option>,
    ...Array.from({ length: endYear - startYear + 1 }, (_, i) => (
      <option key={i} value={startYear + i}>
        {startYear + i}
      </option>
    )),
  ];
  const stateOptions = states.map((state) => (
    <option key={state} value={state}>
      {state}
    </option>
  ));
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    
    console.log(selectedFile);
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      if(!name || !email || !password || !confirmPassword || !barId || !phone || !year || !state || !chamber || !courtName || !address || !languages || !expertise ||!aadhar  )
      return setError("Please fill all the required fields!!");

      if(password!==confirmPassword)
      return setError("Your Password should match with Confirm Password!!");
      if(password.length<8)
      return setError("Your Password should have length at least 8 characters");

      const {user} = await signUp(email, password);
      // await db.collection('userdata').doc(user.uid).set({
      //   uid:user.uid,
      //   name,
      //   email,
      //   password,
      //   confirmPassword,
      //   barId,
      //   phone,
      //   year,
      //   state,
      //   chamber,
      //   courtName,
      //   address,
      //   languages,
      //   expertise,
      //   aadhar
      // })
      
      const res = await fetch(`https://registration-36f08-default-rtdb.firebaseio.com/userdata.json/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uid:user.uid,
          name,
          email,
          password,
          confirmPassword,
          barId,
          phone,
          year,
          state,
          chamber,
          courtName,
          address,
          languages,
          expertise,
          aadhar
        })
      })
      if(res){
      console.log("Data Stored",user);
      navigate('/dashboard');  
    }
      else
      console.log("Error in data storing");
    
    } 
    
      catch(err){
        setError("User already registered with this e-mail");
      console.log(err.message);
    }
  }
  return (
    <Container>
      <Wrapper>
        <Title>DETAILS</Title>
        <Form onSubmit={handleSubmit}>
          <Inputs>
            <Input placeholder="Name" type="text" value={name} disabled/>
            <Input placeholder="Phone No." type="number" value={phone} disabled/>
            <Input placeholder="Email" type="email" value={email} disabled/>
            <Input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <Input placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <Input placeholder="BAR ID Number" value={barId} onChange={(e)=>setBarId(e.target.value)}/>
            <Dropdown value={year} onChange={(e)=>setYear(e.target.value)}>{yearOptions}</Dropdown>
            <Dropdown value={state} onChange={(e)=>setState(e.target.value)}>{stateOptions}</Dropdown>
            <InputChamber placeholder="Chamber No." value={chamber} onChange={(e)=>setChamber(e.target.value)}/>
            <DropdownInputChamber>{stateOptions}</DropdownInputChamber>

            <InputChamber placeholder="Court Name" value={courtName} onChange={(e)=>setCourtName(e.target.value)}/>
            <Input placeholder="Office Address (if any)" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <Input placeholder="Languages(e.g. Hindi,English" value={languages} onChange={(e)=>setLanguages(e.target.value)}/>
            <Input placeholder="Expertise In(e.g. Criminal,Property)" value={expertise} onChange={(e)=>setExpertise(e.target.value)}/>
            <Input placeholder="Aadhar No." value={aadhar} onChange={(e)=>setAadhar(e.target.value)} maxLength="14"/>

            <Input type='file'accept=".pdf,.doc,.docx,.txt" onChange={handleFileUpload}/>
          </Inputs>
            <p style={{color:"red"}}>{error?error:""}</p>
          <Agreement>
            All the details are correct under my Knowledge Lorem ipsum dolor sit amet conmollitia.
          </Agreement>
        <Button type="submit">CREATE</Button>

        </Form>

      </Wrapper>
    </Container>
  );
};

export default Details;

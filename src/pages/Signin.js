import {React,useState} from 'react'
import styled from 'styled-components'
import {Link,useNavigate} from 'react-router-dom';
const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
  
    center;
display:flex;
align-items:center;
justify-content:center;    
`
const Wrapper = styled.div`
width:30%;
padding:20px;
background-color:white;

`
const Title = styled.h1`
font-size:24px;
font-weight:300;
`
const Form = styled.form`
display:flex;
// flex-wrap:wrap;
flex-direction:column;

`
const Agreement = styled.p`
font-size:12px;
margin:20px 0;
`
const Button = styled.button`
width:100%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;


`
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0;
padding:10px;


`
const Inputs = styled.div`
max-height: 200px; 
  overflow-y: auto;
  display:flex;
  flex-direction:column;
  margin:0px 0px 25px 0px;
`
const Signin = () => {
  const navigate = useNavigate();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  return (
    <Container>
        <Wrapper>
            <Title>SIGNIN</Title>
            <Form>
                <Inputs>
                <Input placeholder="Name" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <Input placeholder="E-mail" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <Input placeholder="Phone No." type="tel" maxLength="10" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                </Inputs>
                <Button onClick={()=>navigate(`/register/otp?name=${name}&email=${email}&phone=${phone}`)}>NEXT</Button>
            </Form>

        </Wrapper>
    </Container>
  )
}

export default Signin
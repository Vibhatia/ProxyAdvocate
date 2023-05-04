import React from "react";
import styled from "styled-components";
const Container = styled.div`
height: 200vh;
width: 100vw;
// background-color:red;
// margin:10px;
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`;
const Contents = styled.div`
display: flex;
width: 100%;
height: 50%;
`;
const ImgContainer = styled.div`
flex: 1;
`;
const TextContainer = styled.div`
flex: 1;
// width: 100%;
height: 100%;
// margin: 20px auto;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`;
const TextContent = styled.div`

width:500px;
height:300px;

`;
const Background = styled.div`
background: url("../assests/images/p21.jpg") no-repeat center center ;
background-size: 10% 10%;
`
const Content = () => {

  return (
    <Container>
      <Wrapper>
        <Contents>
          <ImgContainer>
            <img
              src="https://images.pexels.com/photos/4427428/pexels-photo-4427428.jpeg"
              style={{ width: "100%", height: "100%" }}
              alt="expertise"
            />
          </ImgContainer>
          <TextContainer>
            
           <TextContent>
            <div style={{textAlign:"center",fontSize:"40px"}}>Ours Expertise</div>
            <div style={{width:"100%",height:"100%"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quam
            ab laborum iste optio odio nisi eveniet suscipit totam, asperiores
            mollitia facilis adipisci quasi omnis, praesentium nobis est
            inventore accusamus perspiciatis maiores iusto? Reiciendis accusamus
            alias nostrum voluptatem dolor sunt iste eveniet fugit, earum
            placeat inventore maiores similique soluta aut.
            </div>
           </TextContent>
          </TextContainer>
        </Contents>
        <Contents>
          <TextContainer>
          <TextContent>
            <div style={{textAlign:"center",fontSize:"40px"}}>Ours Expertise</div>
            <div style={{width:"100%",height:"100%"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quam
            ab laborum iste optio odio nisi eveniet suscipit totam, asperiores
            mollitia facilis adipisci quasi omnis, praesentium nobis est
            inventore accusamus perspiciatis maiores iusto? Reiciendis accusamus
            alias nostrum voluptatem dolor sunt iste eveniet fugit, earum
            placeat inventore maiores similique soluta aut.
            </div>
           </TextContent>
           {/* <Background>
            mmm
           </Background> */}
          </TextContainer>
          <ImgContainer>
          <img
              src="https://images.pexels.com/photos/4427428/pexels-photo-4427428.jpeg"
              style={{ width: "100%", height: "100%" }}
              alt="expertise"
            />
          </ImgContainer>

        </Contents>
      </Wrapper>
    </Container>
  );
};

export default Content;

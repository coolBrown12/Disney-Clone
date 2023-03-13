import styled from "styled-components";

const Login=()=>{
    return (
        <Container>
            <Content>
                <CTA>
                    <CtaLogOne src="/images/cta-logo-one.png"/>
                    <Signup>GET ALL THERE </Signup>
                    <Description>Get all the latest soloution to the website in one source whoch is the disney + clone here it is used for motivional and eductional purposes</Description>
                    <CtaLogoTwo src="/images/cta-logo-two.png"></CtaLogoTwo>
                </CTA>
                
            </Content>
            <BgImage/>
            
        </Container>
    )
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA=styled.div`
margin -bottom: 2vw;
max-width: 650px;
display:flex;
flex-direction:column;


`
const CtaLogOne=styled.img`
margin-bottom:12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;
const Signup=styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border: 1px solid transparent;
border-radius:4px;


&:hover{
    background-color:#0483ee;
}
`;

const Description=styled.p`
color:hsla(0,0%,95.35,1);
font-size:11px;
margin:0 0 24px;
line-height:1.5em;
letter-spacing:1.5px;



`
const CtaLogoTwo=styled.img`
max-width:600px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
width:100%;
`

 
export default Login;

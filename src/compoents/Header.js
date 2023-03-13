import styled from "styled-components";

const Header=()=>{
    return <Nav>
        <Logo>
            <img src="/images/logo.svg" alt="yash"></img>
        </Logo>
        <Navmenu>
            <a href="/homw">
                <img src="/images/home-icon.svg" alt="y1"></img>
            <span>Home</span>
            </a>
        </Navmenu>
    </Nav>
}
const Nav=styled.nav`
postion:fixed;
top:0;
left=0;
right=0;
height:70px;
display:flex;
justify-content:space-between;
align-item:center;
padding 15px 36px;
letter-spacing:16px;
z-index:3;
background-color:#090b13;



 
`
const Logo=styled.a`
padding:0;
width:80px;
margin-top:4px;
max-height:70px;
font-size:0;
display:inline-block;
img{
    display:block;
    width:100%;
}
`
const Navmenu=styled.div`
align-item:centre;
display:flex;
flex-flow:row nowrap;
padding:15px 0;
height:100%;
justify-content:flex-end;
margin:0px;
position:relative;
margin-right:auto;
margin-left:25px;
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    img{
        height:20px;
        padding-top: 3px;
        min-width:20px;
        width:20px;
        z-index:auto;
    }
    span{
        color:rgb(249,249,249);
        font-size:13px;
        letter-spacing:1.42px;
        line-height:1.08;
        padding-top: 6px;
        white-space:nowrap;
        postition:relative;
    
    }
}

// @media (max-width: 768px){
//     display:none;               
// }



`
export default Header
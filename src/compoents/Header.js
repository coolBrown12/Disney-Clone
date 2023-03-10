import styled from "styled-components";
import { auth,provider } from "../firebase";

const Header=(props)=>{
    const handleauth=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            alert(error.mesage)
        });
    }
    return <Nav>
        <Logo>
            <img src="/images/logo.svg" alt="yash"></img>
        </Logo>
        <Navmenu>
            <a href="/homw">
                <img src="/images/home-icon.svg" alt="y1"></img>
            <span>Home</span>
            </a>
            <a href="/homw">
                <img src="/images/search-icon.svg" alt="y1"></img>
            <span>search</span>
            </a>
            <a href="/homw">
                <img src="/images/watchlist-icon.svg" alt="y1"></img>
            <span>Watchlist</span>
            </a>
            <a href="/homw">
                <img src="/images/original-icon.svg" alt="y1"></img>
            <span>originals</span>
            </a>
            <a href="/homw">
                <img src="/images/movie-icon.svg" alt="y1"></img>
            <span>movie</span>
            </a>
            <a href="/homw">
                <img src="/images/series-icon.svg" alt="y1"></img>
            <span>series</span>
            </a>
        </Navmenu>
        <Login onClick={handleauth}>Login</Login>
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
    span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        &:before {
          background-color: rgb(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          bottom: -6px;
          content: "";
          height: 2px;
          left: 0px;
          opacity: 0;
          position: absolute;
          right: 0px;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
          width: auto;
        }
      }
      &:hover {
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }
// @media (max-width: 768px){
//     display:none;               
// }



`
const Login=styled.a`
background-color:rgba(0,0,0,0.6);
padding:11px 16px;
text-transform:uppercase;
letter-spacing:1.5px;
border:1px solid #f9f9f9;
border-radius:4px;
transition:all 0.2s ease 0s;

&:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
}


`
export default Header
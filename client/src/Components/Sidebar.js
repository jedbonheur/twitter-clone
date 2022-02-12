import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { BsHouseDoor,BsBookmark} from "react-icons/bs";
import { IoMdNotificationsOutline} from "react-icons/io";
import { BiUser} from "react-icons/bi";
import {ReactComponent as Logo} from "../assets/logo.svg"
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
const Sidebar = () => {
  const {currentUser} = useContext(CurrentUserContext);
  const userLinkHandle = () => {
    if (!currentUser){
       return
    }
    return  currentUser.profile['handle']
  }

 return (
  <>
 <Wrapper>
  <nav>
    <ul>
     <div className="logo">
       <Logo />
     </div>
      <li>
       <NavLink exact activeClassName="selected" to="/">
        <div className="svg-wrapper">
         <BsHouseDoor />
         <span>Home</span>
        </div>
        </NavLink>
      </li>
      <li>
       <NavLink exact activeClassName="selected" to={`/profile/${userLinkHandle()}`}>
        <div className="svg-wrapper">
         <BiUser /> 
         <span>Profile</span>
        </div>
        </NavLink>
      </li>
      <li>
       <NavLink activeClassName="selected" to="/notifications">
        <div className="svg-wrapper">
          <IoMdNotificationsOutline />
          <span>Notifications</span>
        </div>
        </NavLink>
      </li>
      <li>
       <NavLink activeClassName="selected" to="/bookmarks">
        <div className="svg-wrapper">
          <BsBookmark />
          <span>Bookmarks</span>
        </div>
        </NavLink>
      </li>
    </ul>
  </nav>
 </Wrapper>
  </>
 );
};

const Wrapper = styled.section`
nav ul  {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

 }
 .svg-wrapper {
    display: flex;
    align-items: center;
}
 nav ul li a:hover {
    background: hsl(258deg 100% 50% / 18%);
    border-radius: 25px;
    color: hsl(258deg 100% 50%);
}

nav ul li{
    list-style: none
}
nav ul li a {
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    padding: 15px 10px;
    margin: 4px 0px;
    text-decoration: none;
}.selected {
    color: hsl(258deg, 100%, 50%);
}
svg {
    font-size: 24px;
    font-weight: bolder;
    padding-right: 20px;
}
.logo svg {
    width: 74px;
}


`
export default Sidebar;
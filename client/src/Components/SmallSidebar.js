import React, {useState} from 'react';
import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi'
import Sidebar from './Sidebar'
const SmallSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
 const handleSidebar = () => {
   setShowSidebar(!showSidebar)
   }
   return (
    <Wrapper onClick={handleSidebar} >
      <div className = {showSidebar ? 'full-height' : ''}>
         <GiHamburgerMenu />
         {showSidebar && (
            <Sidebar/>
          )}
      </div>
  </Wrapper>
 );
};

const Wrapper = styled.section`
position: absolute;
    padding: 5px 5px;
    color: #4c00ff;
    background: #eeeeee;
    width: 100%;
    top: 0;
    z-index:99;
    
  .full-height {
     height: 100%;
      position: fixed;
      background: #eeeeee;
      width: 100%;
  }
svg {
     font-size: 30px;

}
`
export default SmallSidebar;
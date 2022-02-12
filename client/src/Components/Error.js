import React from 'react';
import styled from 'styled-components';
import {GiBoltBomb} from "react-icons/gi";
const Error = () => {
 return (
  <Wrapper>
   <div className="container">
     <div className="error-page">
       <div className="bomb-icon">
           <GiBoltBomb />
       </div>
       <div className="error-info">
         <h3>An unknown error has occurred</h3>
          <p>
           Please try refreshing the page, or 

           <a href="/"> contact support </a>
           if the problem persists.
          </p>
       </div>
     </div>
   </div>
  </Wrapper>
 );
};

const Wrapper = styled.section`
.container {
 text-align:center
 display:flex;
 justify-content: center;
 align-items: flex-start;
 height:100vh
}
.error-page {
    padding: 5vw 5vw;
    text-align: center;
}
.bomb-icon svg {
    font-size: 3rem;
}

.error-info h3 {
    padding: 20px 0px;
}

.error-info p {
    font-size: 16px;
}


`
export default Error;
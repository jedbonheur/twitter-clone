// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle `
  :root{
   --primary-color:"hsl(258deg, 100%, 50%)",
  }
  body {
    margin: 0;
    padding: 0;
    font-family: arial, Sans-Serif;
    
  }
  h3 {
        font-size: 17px;
    font-weight: bolder;
    margin: 5px 0px;
 
  @media screen and (max-width: 768px) {
        font-size: 13px;
        }
  }

`;
 
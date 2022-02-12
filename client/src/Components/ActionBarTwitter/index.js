import React from "react";
import styled from "styled-components";
import ActionBar from "./ActionBar";


const Tweet = ({numLikes}) => {

  return (
    <Wrapper>
      <ActionBar numLikes={numLikes} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;



export default Tweet;

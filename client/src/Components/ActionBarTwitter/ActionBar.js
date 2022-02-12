import React, {useState} from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

const ActionBar = ({ numLikes }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [numlikes,setNumLikes] = useState(0)
  const handleToggleLike = () => {
    setIsLiked(!isLiked)
    if(isLiked){
      setNumLikes(numlikes - 1)
    }else {
      setNumLikes(numlikes + 1)
    }
  }
   return (
    <Wrapper>
      <div className="actionWrapped">
        <Action color="rgb(27, 149, 224)" size={40}>
          <TweetActionIcon kind="reply" />
        </Action>
      </div>
      <div className="actionWrapped">
        <Action color="rgb(23, 191, 99)" size={40}>
          <TweetActionIcon
            kind="retweet"
          />
        </Action>
        <span>{numLikes > 0 ? numLikes : '' }</span>
      </div>
      <div className="actionWrapped">
        <Action onClick={handleToggleLike} color="rgb(224, 36, 94)" size={40}>
          <LikeButton  isLiked={isLiked} />
        </Action>
        <span>{numlikes > 0 ? numlikes : '' }</span>
      </div>
      <div className="actionWrapped">
        <Action color="rgb(27, 149, 224)" size={40}>
          <TweetActionIcon kind="share" />
        </Action>
     </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
  gap: 0px 10px;
  .actionWrapped {
    display: flex;
    align-items: center;
    gap: 0px 13px;
}
`;


export default ActionBar;

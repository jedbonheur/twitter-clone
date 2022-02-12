import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import ActionBarTwitter from './ActionBarTwitter'
import {AiOutlineConsoleSql, AiOutlineRetweet} from "react-icons/ai"
import {useHistory, useLocation} from 'react-router-dom'


const SingleTweet = ({data}) => {
  let locatation = useLocation()
  let history = useHistory();

  const goToprofileHandler = () => {
    const entry = locatation.pathname.split('/')[1]
    console.log('entry',entry)
    if(entry ==='profile'){
      history.push(`/profiler/${data.author.handle}`)
    }else {
      history.push(`/profile/${data.author.handle}`)
    }
  } 
  return (
   <>
     <FeedsOuterWrapper>
       <div className="retweet">
         {data.retweetFrom &&(
           <AiOutlineRetweet />
         )} 
         {data.retweetFrom &&(
           data.retweetFrom.displayName + ' Remeowed'
         )} 
       </div>
      <FeedsWrapper>
      <div className="info">
         <div className="userAvatar">
           <img src={data.author.avatarSrc} alt={data.author.handle} />
         </div>
         <div>
              <h3 onClick={goToprofileHandler}>{data.author.displayName}</h3>
              <span className="handle">@{data.author.handle}</span>
         </div>
      </div>
      <div className="post">
          <p>{data.status}</p>
      </div>
      <div className="media">
          {data.media.map((media)=> {
            return  <img key={media.url}  src={media.url} alt={media.type}/>
          })}
      </div>
      
      <div className="single-info time">
            {moment(data.timestamp).format('H:MM A')}
            <span> - </span>
            {moment(data.timestamp).format('MMM Do YYYY')}
            <span> - </span>
            <span>Critter web app</span>
       </div>
        <div className="handle-action">
          <ActionBarTwitter  numLikes={data.author.numLikes} />
        </div>
      </FeedsWrapper>
    </FeedsOuterWrapper>
  </>
 );
};

const FeedsOuterWrapper = styled.section`
border: 1px solid #a3a3a330;
padding: 20px;
svg {
  font-size: 20px
}
.retweet {
    color: #7e7e7e;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 0.7vw;
}

`
const FeedsWrapper = styled.section`
    .userAvatar img {
        width: 70px;
        border-radius: 50%;
       }
    .info {
       display: flex;
       gap: 10px;
   }
  .info h3:hover {
        cursor: pointer;
        text-decoration-line: underline;
    }
   .single-info.time {
    padding: 4vh 0;
    border-bottom: 1px solid #a3a3a330;
   }
   .media img{
        width: 100%;
        height: auto;
        border-radius: 16px;
    }
    .author-info {
        display: flex;
        align-items: center;
        gap: 10px 5px;
    }
    .handle , .point, .time  {
      color : #7e7e7e;
      display: relative
    }
    .info-section {
      width: 100%;
      position: relative;
    }
    
    .post p {
        line-break: anywhere;
    }
    .point:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 3px;
        background: #706e6e;
        height: 3px;
        border-radius: 50%;
        text-align: center;
    }
    .tweet p {
        margin: 5px 0px;
    }
`

export default SingleTweet;
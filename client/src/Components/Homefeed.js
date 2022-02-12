import React, {useContext} from 'react';
import Feed from './Feed';
import styled from 'styled-components';
import Loader from './Loader'
import PostTweet from './PostTweet'
import {FeedContext} from '../Contexts/FeedContext'

const Homefeed = () => {
 const {feeds } = useContext(FeedContext)
 if(!feeds) {
   return (
     <WrapperLoader>
       <Loader/>
     </WrapperLoader>
   )
 }
 return (
   <>
      <Title>Home</Title>
      <PostTweet />
      <Wrapper>
      {feeds.tweetIds.map((tweetId)=>{
        return <Feed key={tweetId}  data={feeds.tweetsById[tweetId]}/>
      })  
      }
      </Wrapper>
  </>
 );
};

const Wrapper = styled.section`

`
const WrapperLoader = styled.section`
    margin: 40px auto;
    text-align:center
`
const Title = styled.section`;
    gap: 0px 16px;
    border: 1px solid #a3a3a330;
    font-size: 21px;
    font-weight: bold;
    padding: 15px 20px;
`

export default Homefeed;
import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import Loader from './Loader';
import SingleTweet from './SingleTweet';
import { useHistory } from 'react-router-dom';

const TweetDetails = () => {
const history = useHistory()
const { tweetId } = useParams();
 const [data, setData] = useState(false)
 

 useEffect(() => {
   fetch(`/api/tweet/${tweetId}/`)
   .then(res=> res.json())
   .then(data => {
    setData(data)
   }).catch(()=>{
      history.push('/error')
   })
   
 }, []);
 

 if(!data) {
   return (
     <WrapperLoader>
       <Loader/>
     </WrapperLoader>
   )
 }
 
 return (
   <Wrapper>
    <SingleTweet key={data.tweet.id}  data={data.tweet}/>
   </Wrapper>
 );
};

const Wrapper = styled.section`
    .btn-follow {
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    font-weight: bold;
    color: #fff;
    font-size: 19px;
    background: hsl(258deg 100% 50%);
   }
   .btn-follow:hover {
    background: hsl(258deg 100% 50%);
    cursor: pointer;
   }
   .grey {
     color : #7e7e7e;
   }
   .profile-banner img {
    width: 100%;
    height: auto;
  }
  .profile-avatar img{
    width: 150px;
    border-radius: 50%;
    outline: 5px solid white;
  }
  .padding {
      padding: 0px 1.5vw;
  }
  .profile-info {
      display: flex;
      margin-top: -90px;
      position: relative;
      align-items: flex-end;
      justify-content: space-between;
  }.location-wrapper {
    display: flex;
    gap: 2vw;
    padding-bottom: 20px;
  }.location {
    display: flex;
    gap: 3px;
    align-items: center;
  }.joined {
    display: flex;
    gap: 3px;
    align-items: center;
  }
  .followings {
      display: flex;
      gap: 2vw;
      padding-bottom: 20px;
  }
  .profile-nav a {
    padding: 15px 0px;
    text-decoration: none;
    color: #000;
    width: 25%;
    text-align: center;
    border-bottom: 2px solid rgb(0 0 0 / 0%);
    
}.profile-nav {
    display: flex;
    justify-content: space-between;
}.profile-nav a:hover {
    color: hsl(258deg 100% 50%);
    border-bottom: 2px solid hsl(258deg 100% 50%);
}
}.profile-nav a.active {
    color: hsl(258deg 100% 50%);
    border-bottom: 2px solid hsl(258deg 100% 50%);
}

`
const WrapperLoader = styled.section`
    margin: 40px auto;
    text-align:center
`
export default TweetDetails;




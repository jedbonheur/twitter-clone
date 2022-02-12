import React, {useContext} from 'react';
import styled from 'styled-components';
import {FeedContext} from '../Contexts/FeedContext'
import {CurrentUserContext} from '../Contexts/CurrentUserContext'
import Loader from './Loader'
import { useHistory } from 'react-router-dom';


const PostTweet = () => {
const history = useHistory()
const {currentUser} = useContext(CurrentUserContext);
const {updateFeeds ,setUpdateFeeds} = useContext(FeedContext);
const tweetHandler = (e) => {
   
   const payload = {
    status : e.target[0].value
   }
   e.preventDefault();
   const requestOptions = {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(payload)
   }
   fetch('/api/tweet', requestOptions)
   .then(response => response.json())
   .then(res => {
    setUpdateFeeds(!updateFeeds)
    e.target[0].value = ''
   }).catch(()=>{
       history.push('/error')
   })
}

if(!currentUser) {
 return (
  <PostLoader>
   <Loader/>
  </PostLoader>
 )
}
 return (
 <PostWrapper>
        <div className="userAvatar">
          <img src={currentUser.profile.avatarSrc} alt={currentUser.profile.avatarSrc} />
        </div>
        <div className="tweetPost">
            <form onSubmit={tweetHandler}>
              <textarea rows = "10" cols = "10" name ="tweet"
              placeholder="What's happening?"
              >
              </textarea>
          <div className="tweetAction">
              <span>280</span>
              <button type="submit" value="Submit">Meow</button>
          </div>
            </form>
        </div>
  </PostWrapper>
 );
};

const PostWrapper = styled.section`
    display: flex;
    gap: 0px 16px;
    border: 1px solid #a3a3a330;
    border-bottom: 15px solid #a3a3a330;
    padding: 20px;
        .userAvatar img {
        width: 70px;
        border-radius: 50%;
    }
    .tweetPost {
    width: 100%;
    }
    textarea {
    font-family: arial,Sans-Serif;
    width: 100%;
    height: 120px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 17px;
    resize: none;
    border:none
   }
   textarea:focus-visible {
    outline: none;
   }
   button {
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    font-weight: bold;
    color: #fff;
    font-size: 19px;
    background: hsl(258deg 100% 50% / 40%);
   }
   button:hover {
    background: #4C00FF;
    cursor: pointer;
   }
  .tweetAction {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
    color: #a3a3a3;
    }

`
const PostLoader = styled.section`
    margin: 40px auto;
    text-align:center;
    .container {
     height: 100%!important;
    }
`

export default PostTweet;
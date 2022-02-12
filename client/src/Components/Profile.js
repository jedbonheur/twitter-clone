import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import Loader from './Loader';
import moment from 'moment';
import { BiMap} from "react-icons/bi";
import { RiCalendarLine} from "react-icons/ri";
import Feed from './Feed';
import { useHistory } from 'react-router-dom';

const Profile = () => {
const history = useHistory()
const { profileId } = useParams();
 const [profile, setProfile] = useState(false)
 const [feeds, setFeeds] = useState(false)
 
 useEffect(() => {
   fetch(`/api/${profileId}/profile`)
   .then(res=> res.json())
   .then(data => {
    setProfile(data.profile)
   }).catch(()=>{
      history.push('/error')
   })
 }, []);

 useEffect(() => {
   fetch(`/api/${profileId}/feed`)
   .then(res=> res.json())
   .then(data => {
    setFeeds(data)
   }).catch(()=>{
      history.push('/error')
   })
   
 }, []);
 

 if(!profile || !feeds) {
   return (
     <WrapperLoader>
       <Loader/>
     </WrapperLoader>
   )
 }
 
 return (
   <Wrapper>
    <div className="profile">
          <div className="profile-banner">
            <img src={profile.bannerSrc} alt={profile.avatarSrc} />
          </div>
          <div className="padding">
            <div className="profile-info">
              <div className="profile-avatar">
                <img src={profile.avatarSrc} alt={profile.avatarSrc} />
              </div>
              <div className="follow-action">
                <button className="btn-follow">Following</button>
              </div>
            </div>
            <div className="user-info">
              <h3>{profile.displayName}</h3>
              <div className="handlewrapper grey">
                <span>@{profile.handle}</span>
                <span>{profile.isFollowingYou ? 'Follows you' : ''}</span>
              </div>
              <p>{profile.bio}</p>
            </div>
            <div className="location-wrapper grey">
              <div className="location">
              <BiMap />
              {profile.location}
              </div>
              <div className="joined">
              <RiCalendarLine />
              <span>Joined </span>
              {moment(profile.joined).format('MMMM Do')}
              </div>
            </div>
            <div className="followings ">
              <div>
                <span>{profile.numFollowing} </span>
                <span className="grey">Following</span>
              </div>
              <div>
                <span>{profile.numFollowers} </span>
                <span className="grey">Followers</span>
              </div>
            </div>
          </div>
    </div>
    <div className="profile-nav">
        <a href="#" className="active" >Tweets</a>
        <a  href="#">Media</a>
        <a href="#">Likes</a>
    </div>
    {feeds.tweetIds.map((tweetId)=>{
        return <Feed key={tweetId}  data={feeds.tweetsById[tweetId]}/>
      })  
    }
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
export default Profile;



import React from 'react';
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';


export const FeedContext = React.createContext()

export const FeedContextProvider = ({ children }) => {
const history = useHistory()
 const [feeds, setFeeds] = useState(false)
 const [updateFeeds,setUpdateFeeds] = useState(false)

 useEffect(() => {
   fetch('/api/me/home-feed')
   .then(res=> res.json())
   .then(data => {
    setFeeds(data)
   }).catch(()=>{
      history.push('/error')
   })
 }, [updateFeeds]);


  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`

  return (
    <FeedContext.Provider value={{ feeds, updateFeeds, setUpdateFeeds }}>
      {children}
    </FeedContext.Provider>
  );
};
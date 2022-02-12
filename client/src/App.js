import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Sidebar from './Components/Sidebar'
import Bookmarks from './Components/Bookmarks';
import Homefeed from './Components/Homefeed';
import Notifications from './Components/Notifications';
import Profile from './Components/Profile';
import Profiler from './Components/Profiler';
import TweetDetails from './Components/TweetDetails';
import Error from './Components/Error';


const App = () => {
  return (
    <>
    <Wrapper>
      <GlobalStyles />
      <Router>
        <Sidebar />
        <ContentSide>
          <Switch>
              <Route exact path="/" >
                <Homefeed/>
              </Route>
              <Route exact path="/bookmarks" >
                <Bookmarks/>
              </Route>
              <Route exact path="/notifications" >
                <Notifications/>
              </Route>
              <Route exact path="/tweet/:tweetId" >
                <TweetDetails/>
              </Route>
              <Route exact path="/profile/:profileId" >
                <Profile/>
              </Route>
              <Route exact path="/profiler/:profileId" >
                <Profiler/>
              </Route>
              <Route exact path="/error" >
                <Error/>
              </Route>
          </Switch>
        </ContentSide>
      </Router>
    </Wrapper>
  </>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 5vw;
  
`
const ContentSide = styled.section`
    width: 60vw;
    height: 100%;
    border: 1px solid #a3a3a330;
`

export default App;


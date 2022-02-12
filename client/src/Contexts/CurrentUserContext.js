import React from 'react';
import { useHistory } from 'react-router-dom';

export const CurrentUserContext = React.createContext()

export const CurrentUserProvider = ({ children }) => {
  const history = useHistory()
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");
  React.useEffect(() => {
    fetch('/api/me/profile')
      .then(res => res.json())
      .then(data => {
       setCurrentUser(data)
       setStatus('idle')
      }).catch(()=>{
      history.push('/error')
   });
  }, []);
  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
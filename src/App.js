import { useEffect, useState, createContext } from 'react';
import { Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState();
  
  const API = "http://localhost:5555/cakecity/api";
  
  // Check log in status
  const login = "/login";
  const API_LOGIN = API + login;

  useEffect(() => {
    const API_OPT = {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    };
    fetch(API_LOGIN, API_OPT).then(
      (resp) => {
        if (resp.ok) {
          resp.json().then(
            (user) => {
              setUser(user)
            }
          );
        }
      }
    )
  }, [API_LOGIN]);

  return (
    <div>
      <Switch>
        <UserContext.Provider value={user}>
          <Route exact path="/">
            <Header />
            <NavBar />
            <Home />
          </Route>
        </UserContext.Provider>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;


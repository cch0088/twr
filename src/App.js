import { useEffect, useState, createContext } from 'react';
import { Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Header from './components/Header';
import UserControl from './components/UserControl';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState();
  
  const API = "https://www.travelwithreason.com:8080/api/test";
  
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
          <Header />
          <UserControl />
          <NavBar />
          <Route exact path="/">
            <Home />
          </Route>
          <Footer />
        </UserContext.Provider>
      </Switch>
    </div>
  );
}

export default App;


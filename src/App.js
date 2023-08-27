import { Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import UserControl from './components/UserControl';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';

function App() {
  
  //const API = "https://www.travelwithreason.com:8080/api/test";
  
  /* Check log in status
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
  */

  return (
    <>
      <Header />
      <NavBar />
      <UserControl />
      <Route exact path="/">
        <Home />
      </Route>
      <Footer />
    </>
  );
}

export default App;


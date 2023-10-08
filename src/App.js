import { Route } from "react-router-dom";
import * as API from "./config";
import Header from './components/Header';
import UserControl from './components/UserControl';
import Main from "./components/Main";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <UserControl />
      <Route exact path="/">
        <Main route={API.FRONT}/>
      </Route>
      <Route exact path="/news">
        <Main route={API.NEWS}/>
      </Route>
      <Route exact path="/guides">
        <Main route={API.GUIDES}/>
      </Route>
      <Route exact path="/store">
        <Main route={API.STORE}/>
      </Route>
      <Route exact path="/community">
        <Main route={API.COMMUNITY}/>
      </Route>
      <Route exact path="/about">
        <Main route={API.ABOUT}/>
      </Route>
      <Route exact path="/contact">
        <Main route={API.CONTACT}/>
      </Route>
      <Route exact path="/vendors">
        <Main route={API.VENDORS}/>
      </Route>
      <Route exact path="/terms">
        <Main route={API.TERMS}/>
      </Route>
      <Route exact path="/privacy">
        <Main route={API.PRIVACY}/>
      </Route>
      <Route exact path="/orders">
        <Main route={API.ORDERS}/>
      </Route>
      <Route exact path="/search">
        <Main route={API.SEARCH}/>
      </Route>
      <Route exact path="/register">
        <Main route={API.REGISTER}/>
      </Route>
      <Footer />
    </>
  );
}

export default App;


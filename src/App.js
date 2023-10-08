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
        <Main route={API.FRONT_PAGE}/>
      </Route>
      <Route exact path="/privacy">
        <Main route={API.PRIVACY_POLICY}/>
      </Route>
      <Footer />
    </>
  );
}

export default App;


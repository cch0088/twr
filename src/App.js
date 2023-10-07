import { Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import UserControl from './components/UserControl';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';

function App() {
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


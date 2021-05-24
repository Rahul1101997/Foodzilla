import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import authentication from './Service/authentication';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import FavrouiteRes from './Components/FavrouiteRes/FavrouiteRes';
import Restaurant from './Components/Restaurant/Restaurant';
import Logout from './Components/Logout/Logout';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  //states of component
  const [isLoggedIn, setIsLoggedIn] = useState(authentication.isLoggedInfun());
  const [search, setsearch] = useState("");
  const [location, setlocation] = useState("");
  //handle display of header
  function loginHandlerFunction(status) {
    setIsLoggedIn(status);
  }
  //getting data from event and set states
  function getLatlang(search, location) {
    setsearch(search);
    setlocation(location);
  }

  return (
    // routes of application
    <Router>
      <Header loginStatus={isLoggedIn} getLatlang={getLatlang} />
      <Switch>
        <Route exact path="/" component={() => <Home search={search} location={location} />} />
        <Route exact path="/favrouite" component={() => isLoggedIn ? <FavrouiteRes /> : <Redirect to="/login" />} />
        <Route exact path="/login" component={() => <Login loginHandler={loginHandlerFunction} />} />
        <Route exact path="/logout" component={() => <Logout loginHandler={loginHandlerFunction} />} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/resdetail/:id" component={Restaurant} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;

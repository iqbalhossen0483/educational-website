import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Component/AboutUs/AboutUs';
import Classes from './Component/Classes/Classes';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Service from './Component/Service/Service';
import ServiceDetails from './Component/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Service></Service>
          </Route>
          <Route path="/services/details/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/classes">
            <Classes></Classes>
          </Route>
          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

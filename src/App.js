import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';



function App() {
  return (
    <>
    <Router>
     < Navbar />
     <Switch>
       <Route path='/' exact component= {Home} />
       <Route path='/products' exact component= {Products} />
       <Route path='/contact-us' exact component= {Contact} />
       <Route path='/sign-up' exact component= {SignUp} />
     </Switch>
     </Router>
    </>  
  );
}

export default App;

import React , {Component} from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import './App.css';
import Contact from './components/contact';
import Index from './components/index';
import Navbar from './components/navbar';




class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/contact" component={Contact}/>
      </BrowserRouter>
      
    );
  }
}

export default App;

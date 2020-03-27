import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;

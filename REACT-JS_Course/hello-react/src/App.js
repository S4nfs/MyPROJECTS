import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import CHeader from './components/ClassHeader';
import Channel from './components/Channel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Functional component */}
        <Header name="Sagar" />
        <p>He is a full stack engineer </p>
        <Header name="Prateek" />
        <Header name="Anjali" />
        <Header name="Sanju" />

        {/* Class component */}
        <CHeader name="ClassSanju" />
        <Channel />


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

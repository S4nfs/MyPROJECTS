import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import CHeader from './components/ClassHeader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/ClassFunctionClick';
import StateWithList from './components/StateWithList';
import Stylesheet from './components/Stylesheet';
import styles from './components/waiting.module.css';  //css module (important filename)
import Form from './components/Form';
import Routing from './components/Routing';
import LifeCycleA from './components/LifeCycleA';
import ProductA from './components/ProductA';
import ProductB from './components/ProductB';
import PostAxios from './components/PostAxios';

//without jsx 
const withoutJSXformat = React.createElement('h2', { className: 'antiJSX' }, 'i am h2 tag from non jsx');

//function App is itself an example of JSX format 😊
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {withoutJSXformat}

        {/* Functional component */}
        <Header name="Sagar" />
        <p>He is a full stack engineer </p>
        <Header name="Prateek" />
        <Header name="Anjali" />
        <Header name="Sanju" />

        {/* Class component */}
        <CHeader name="ClassSanju" />
        <Channel />
        <FunctionClick />
        <CFunctionClick roll="22" />
        <StateWithList />
        <Stylesheet />
        <Routing />
        <h2 className={styles.wait}>Waiting .. Done</h2>
        <Form />
        <LifeCycleA />
        <ProductA />
        <ProductB />
        <PostAxios />


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

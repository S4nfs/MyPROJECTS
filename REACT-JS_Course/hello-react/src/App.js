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
import GetAxios from './components/AxiosPost';
import PostAxios from './components/AxiosGet';
import HookUseState from './components/HookUseState';
import HookUseEffect from './components/HookUseEffect';
import HookObject from './components/HookObject';
import HookArray from './components/HookArray';
import MouseClass from './components/MouseClass';
import MouseFunction from './components/MouseFunction';
import AContextApi from './components/AContextApi';
import BContextApi from './components/BContextApi';
import CContextApi from './components/CContextApi';
import PersonA from './components/PersonA';
import PersonB from './components/PersonB';
import Test from './components/Test';
import FunctionContextA from './components/FunctionContextA';
import ReduxContainer from './containers/ReduxContainer';
import ReduxClassComponent from './components/ReduxClassComponent';

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

        <GetAxios />
        <PostAxios />

        <HookUseState />
        <HookUseEffect />
        <HookObject />
        <HookArray />

        <MouseClass />
        <MouseFunction />

        {/* <AContextApi /> */}
        {/* <BContextApi /> */}
        {/* <CContextApi /> */}

        <FunctionContextA />
        <PersonA />
        <PersonB />
        <Test />
        <ReduxContainer />
        <ReduxClassComponent />
        <a
          className="App-link"
          href="https://github.com/S4nfs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made By S4nfs
        </a>
      </header>
    </div>
  );
}

export default App;

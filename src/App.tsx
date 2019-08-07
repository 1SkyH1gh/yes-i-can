import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Container} from "./components/Container";
import {Header} from "./Header/Header";
import {ContainerAll} from "./components/ContainerAll";

const App: React.FC = () => {

  return (
    <React.Fragment>
     <ContainerAll/>


    </React.Fragment>

  );
}

export default App;

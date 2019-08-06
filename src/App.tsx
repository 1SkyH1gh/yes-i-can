import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Container} from "./components/Container";
const App: React.FC = () => {
  /*
  const ADD_TO_KEYWORDS="add to keywords"
  const DELETE_KEYWORD="delete keyword"
  const DELETE_ALL_WORD="delete all words"
   const AddToKeywords=()=>{
    return{
      type:"ADD_TO_KEYWORDS",

    }

    const deleteKeyword=()=>{
      return{
        type:"DELETE_KEYWORD"
      }
    }
    const deleteAllWord=()=>{
      return{
        type:"DELETE_ALL_KEYWORDS"
      }
    }

  }

  const container=(state,action)=>{
      switch(action.type){
        case 'ADD_TO_KEYWORDS':
          return{

        }
      }
  }
  const store=createStore(Reducer)
  */
  return (

    <Container/>

  );
}

export default App;

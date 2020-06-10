import React from 'react';
//import { createStore } from 'redux';
import { Provider } from 'react-redux'
import store from './Store'
import Count from './Components/Count';
import Control from './Components/Control';
function App() {


    // const reducer = (state={}, action) => {
    //   if(action.type === 'A'){
    //     return {
    //       ...state,
    //       A: 'I am A'
    //     }
    //   }

    //   if(action.type === 'B'){
    //     return {
    //       ...state,
    //       B: 'I am B'
    //     }
    //   }
    //   return state;
    // }
    // const store = createStore(reducer);

    // store.subscribe(() => {
    //   console.log(store.getState().A);
    // })

    // store.subscribe(() => {
    //   console.log(store.getState().B);
    // })

    // store.dispatch({type: 'B'})
    // store.dispatch({type: 'Something'})
    // store.dispatch({type: 'A'})
    // store.dispatch({type: 'Something'})


  return (
    <Provider store = {store}>
      <div className="App">
        <h1>Redux Learning</h1>
        <Count />
        <Control />
      </div>
    </Provider> 
  );
}

export default App;

// Store -> Will hold all of our appplication data/state
// Reducer -> A function who returns a specific  amount of state or date
// Action -> Event occurs 
// Dispatch 
// Subscriber 

// 1. Create a Reducer 
// 2. Create Store with the help of reducer 
// 3. Now we can subscribe 
// 4. Dispatch (action) 

// React will be responsible for only view layer 
// Redux will be responsible for only Data Layer
// React-Redux 
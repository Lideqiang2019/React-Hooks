import React from "react";
import { createStore,applyMiddleware,combineReducers} from "redux";
import { Provider, useSelector, useDispatch,connect } from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ChildComponentUseReactRedux from './ChildComponentUseConnect'

const initialCount = { num: 0 };

const count = (state = initialCount, action) => {
  switch (action.type) {
    case "decrement":
      return { ...state, num: state.num - 1 };
    case "increment":
      return { ...state, num: state.num + 1 };
    default:
      return state;
  }
};

const initUser = {
  username:"deqiang",
  msg:"", 
}

const user = (state = initUser,action) =>{
  switch (action.type){
    case "AUTHER_SUCCESS":
      console.log("action.data",action.data)
      return action.data
    case "ERROR_MSG": // 而errMsg并不会将state，重置，而是保留
      return {...state,msg:action.data}
    default:
      return state;
  }
}


const reducer = combineReducers({
  user,
  count,
})

// console.log("reducer",reducer)

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// console.log("store",store)

const ComponentUseReactRedux = () => {
  return (
    <div>
      <h2>ComponentUseReactRedux</h2>
      <Provider store={store}>
        <ChildComponentUseReactRedux />
      </Provider>
    </div>
  )
}


export default ComponentUseReactRedux
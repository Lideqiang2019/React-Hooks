import React from "react";
import { createStore,applyMiddleware,combineReducers} from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

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

// const initUser = {
//   username:"deqiang",
//   // msg:"", 
// }

// const user = (state = initUser,action) =>{
//   switch (action.type){
//     case "AUTH_SUCCESS":
//       return action.data
//     case "ERROR_MSG": // 而errMsg并不会将state，重置，而是保留
//       return {...state,msg:action.data}
//     default:
//       return state;
//   }
// }


const count1 = (state = initialCount, action) => {
  switch (action.type) {
    case "decrement":
      return { ...state, num: state.num - 1 };
    case "increment":
      return { ...state, num: state.num + 1 };
    default:
      return state;
  }
};

const reducer = combineReducers({
  // user,
  count,
  count1
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

const ChildComponentUseReactRedux = () => {
  const {num} = useSelector(state => state.count);
  // const {userdata} = useSelector(state => state.user);
  const {num1} = useSelector(state => state.count1);
  console.log("num",num)
  console.log("num1",num1)
  // console.log("user",userdata)
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Using useSelector, useDispatch</h3>
      Number: {num} 
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {/* <button onClick={() => dispatch({ type: "AUTH_SUCCESS",data:{username:"lili"} })}>username</button> */}
    </div>
  );
};

export default ComponentUseReactRedux;
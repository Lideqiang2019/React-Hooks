import React from 'react';
import {connect} from 'react-redux'
import {login,increment,decrement} from './actions'

const ChildComponentUseReactRedux = (props) => {
    console.log("props",props)
    
    const {count,user,login,increment,decrement} = props
  
    return (
      <div>
        <h3>Using useSelector, useDispatch</h3>
        Number: {count.num} Username:{user.username}
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => login({username:"admin",password:"admin"})}>username</button>
      </div>
    );
  };
  
export default connect(
    state=>({count:state.count,user:state.user}),
    {login,increment,decrement}
)(ChildComponentUseReactRedux);
  
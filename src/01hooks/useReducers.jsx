import React,{useReducer} from 'react';

const initData = {
    count:0
}

function init(initData){
    return {count:initData.count}
}

function incrementAnyValue(value){
    return {type:'incrementAny',data:value}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
               count: state.count + 1 
            }
        case 'decrement' :
            return{...state, count: state.count - 1}
        case 'reset':
            return init(action.data)
        case 'incrementAny':
            return {count:action.data}
        default:
            return state;
    }
};

const value=10

export default function UseReducer(){
    const [state,dispatch] = useReducer(reducer,initData,init)
    console.log(state)
    return (
        <div>
            Count: {state.count}
            <button onClick={()=>dispatch({type:'reset',data:initData})}>reset</button>
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
            <button onClick={()=>dispatch({type:'decrement'})}>-</button>
            <button onClick={()=>dispatch(incrementAnyValue(value))}>incrementAny</button>
        </div>
    )
} 
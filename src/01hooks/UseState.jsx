import React from 'react';
import {useState,useEffect} from 'react'

function Counter(props){
    const [count,setCount] = useState(0)

    function handleClick(){
        // setCount(count+1)
        setCount((count)=>{
            return count+1
        })
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>点击我</button>
        </div>
        
    )
}

export default Counter
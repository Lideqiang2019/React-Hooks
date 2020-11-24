import React from 'react';
import {useState,useEffect} from 'react'

function CountEffect(props){
    const [data,setCount] = useState({count:0})

    function handleClick(){
        // setCount({count:2})
        setCount((data)=>({count:data.count+1}))
    }
    /** 你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合*/
    useEffect(()=>{
        console.log("effect")
    }) 
    useEffect(()=>{
        console.log("effect111")
    },[]) // 空数组表示，不依赖任何值更新，只做一次

    useEffect(()=>{
        console.log("effect222")
    },[data]) // data变化，会重新渲染

    useEffect(()=>{
        return ()=>{
            console.log("unmount")
        }
    },[]) // data变化，会重新渲染

    return (
        <div>
            <p>{data.count}</p>
            <button onClick={handleClick}>点击我</button>
        </div>
        
    )
}

export default CountEffect
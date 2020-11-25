import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios'

function CountEffect(props){
    const [data,setCount] = useState({count:0})

    const loadData = ()=>{
        return axios.get("api/manage/user/list")
    }

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

    /**
     * DiMount和WillUnmout可以放在一起使用，但是发送ajax请求的函数必须是一个函数的返回值
     */

    useEffect(()=>{
        // 发送ajax请求
        ;(async ()=>{
            const result = await loadData()
            console.log("result",result)
        })()

        return ()=>{
            console.log("unmount")
        }
    },[]) 

    return (
        <div>
            <p>{data.count}</p>
            <button onClick={handleClick}>点击我</button>
        </div>
        
    )
}

export default CountEffect
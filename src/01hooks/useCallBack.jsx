import React,{useCallback,memo,useState} from 'react';

/*
把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，
该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去
避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。
 */

const Child  = memo(function(props){
    console.log("child")
    return (
        <div>
            <p>hello</p>
            <button onClick={props.onAdd}>add</button>
        </div>
    )
})

export default function UseCallBack(props){
    console.log("parent")
    const [count,setCount] = useState(0)

    // const handleAdd = ()=>{
    //     console.log("add.")
    // }
    const handleAdd = useCallback(
        () => {
            console.log("add.")
        },
        [],
    );

    return (
        <div>
            <div>{count}</div>
            <Child onAdd={handleAdd}/>
            <button onClick={()=>setCount(count+1)}>change count</button>
        </div>
    )
}
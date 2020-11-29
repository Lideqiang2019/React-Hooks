import React,{useCallback,useMemo,memo,useState} from 'react';

/*
把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，
该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去
避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。
 */

const ChildHood = (props)=>{
    return (
        <div>child hood</div>
    )
}

const Child  = memo(function(props){
    console.log("child")
    const Child1 = useMemo(() => ()=><ChildHood a={props.a}/>, [props.a]);
    const Child2 = useMemo(() => ()=><ChildHood b={props.b}/>, [props.b]);
    return (
        <div>
            <p>hello</p>
            <button onClick={props.onAdd}>add</button>
            <Child1/>
            <Child2/>
        </div>
    )
})

export default function UseMemo(props){
    console.log("parent")
    const [count,setCount] = useState(0)
    const [a,setA] = useState('abc')

    const handleAdd = ()=>{
        console.log("add.")
    }
    // const handleAdd = useMemo(() => {
    //     return ()=>{
    //         console.log("add")
    //     }
    // }, []); // 可以替代useCallback,但是仍然需要memo

    return (
        <div>
            <div>{count}</div>
            <Child 
            onAdd={handleAdd}
            a={a}
            b={'ddd'}
            />
            <button onClick={()=>setCount(count+1)}>change count</button>
            <button onClick={()=>setA({a:'mmm'})}>点我改变A</button>
        </div>
    )
}
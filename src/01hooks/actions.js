import axios from 'axios'
// 同步错误消息
const errorMsg = (msg)=>({type:"ERROR_MSG",data:msg});

// 同步成功消息
const autherSuccess = (user)=>({type:"AUTHER_SUCCESS",data:user});

export const increment = ()=>({ type: "increment" })

export  const decrement = ()=>({ type: "decrement" })
// 异步登录
export const login = ({username,password})=>{
    return async dispatch=>{
        const response = await axios.post('/api/login',{username,password});
        const result = response.data;
        console.log("result",result)
        // debugger
        if(result.status===0){
            console.log("111")
            dispatch(autherSuccess(result.data))
        }else{
            dispatch(errorMsg(result.msg))
        }
    }
}
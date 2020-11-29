###  React Hooks
#### 为什么使用React Hooks
    1. 代码看起来简洁
    2. React Class的生命周期难以理解
    3. 组件化思维
    4. Redux状态管理，概念多，比较难以理解，可以用useContext+useReducer替代redux，而useSelector和useDispatch可以替代connect，但是没有必要
    5. 高阶组件理解起来不太容易
    6. 函数组件可以和Tyscript结合，更加简单，不需要写类组件
#### React Hooks的函数集合及其作用
    1. useState：相当于class组件中的state和setState，有setState所有的特性，个人觉得改进并不是多大
    2. useEffect：改进比较大，相当于class组件的生命周期函数
        1) 你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
        2）useEffect(()=>{
            console.log("effect111")
            },[]) // 空数组表示，不依赖任何值更新，只做一次，相当于DidMount
        3) 可以依赖数组中数据的变化，进行更新
        4）/**
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
    3. UseContext：与类组件差不多，使用useContext有诸多好处，用于全局的声明，比如主题颜色，语言首选项等。
    用法：
    1)声明：let themeContext = createContext({ theme: 'green' })
    2）包裹组件：<nameContext.Provider value={{name:'zhongxing'}}>
                    <ToolBar />
                </nameContext.Provider>
    3）在子组件中使用 let theme = useContext(themeContext)
    4. useCallback记忆函数体和useMemo 记忆计算结果
    5. useReducer，其实就是用redux的方法进行管理state
    6. useRef、useImperativeHandle可以让我们在使用ref时自定义暴露给父组件的实例值、forwardRef
    7. 自定义Hooks组件

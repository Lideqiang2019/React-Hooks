import React, { createContext, useContext } from 'react';

let nameContext = createContext({ name: '华为' })
let themeContext = createContext({ theme: 'green' })

export default function UseContext() {
    return (
        <nameContext.Provider value={{name:'zhongxing'}}>
            <ToolBar />
        </nameContext.Provider>
    )
}

function ToolBar() {
    return (
        <Phone></Phone>
    )
}

function Phone() {
    let name = useContext(nameContext)
    let theme = useContext(themeContext)
    return (
        <div>
            {name.name} : {theme.theme}
        </div>
    )
}
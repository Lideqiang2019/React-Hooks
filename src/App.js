import React from 'react';
import Counter from './01hooks/UseState'
import CountEffect from './01hooks/UseEffect'
import ContextNoOne from './01Class/Context01'
import ContextNoTwo from './01Class/Context02'

import UseContext from './01hooks/UseContext'

import UseReducer from './01hooks/useReducers'
import ComponentUseReactRedux from './01hooks/Function-connnect'

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Counter/>
                <CountEffect/>
                <ContextNoOne/>
                <ContextNoTwo/>
                <UseContext/>
                <UseReducer/>
                <ComponentUseReactRedux/>
            </div>
        )
    }
}
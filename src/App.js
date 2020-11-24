import React from 'react';
import Counter from './01hooks/UseState'
import CountEffect from './01hooks/UseEffect'

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Counter/>
                <CountEffect/>
            </div>
        )
    }
}
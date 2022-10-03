import React, { Component } from 'react'
import BContextApi from './BContextApi'
import CContextApi from './CContextApi';

//pass data to other component without using props, Here Context API helps
export const mycontext = React.createContext(); //can also pass default values in createContext parameter

export class AContextApi extends Component {
    state = {
        name: "Sagar Verma",
        roll: 28
    }
    render() {
        return (
            <div>
                <h1>Component A</h1>
                <mycontext.Provider value={this.state}>
                    <BContextApi />
                    <CContextApi />
                </mycontext.Provider>
            </div>
        )
    }
}

export default AContextApi
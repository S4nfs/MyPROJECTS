import React, { Component } from 'react'
import { Provider } from './ABCcontext'
import BContextApi from './BContextApi';
import CContextApi from './CContextApi';
//pass data to other component without using props, Here Context API helps
export const mycontext = React.createContext(); //can also pass default values in createContext parameter

export class AContextApi extends Component {
    state = {
        name: "Sagar Verma",
        roll: 28
    }
    handleClickContext = () => {
        this.setState({
            roll: this.state.roll + 1
        })
    }
    render() {
        const payload = {
            data: this.state,
            handlecheck: this.handleClickContext
        }
        return (
            <div>
                <h1>Component A</h1>
                <Provider value={payload}>
                    <BContextApi />
                    <CContextApi />
                </Provider>
            </div>
        )
    }
}

export default AContextApi
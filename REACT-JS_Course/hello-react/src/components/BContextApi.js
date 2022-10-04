import React, { Component } from 'react'
import { Consumer } from './ABCcontext'

export class BContextApi extends Component {
    render() {
        return (
            <div>
                <h1>Component B</h1>
                <Consumer>{
                    ({ data, handlecheck }) => (
                        <div>
                            <h3>{data.name},{data.roll}</h3>
                            <button onClick={handlecheck}>Change roll no using Context API</button>
                        </div>
                    )
                }</Consumer>
            </div>
        )
    }
}

export default BContextApi
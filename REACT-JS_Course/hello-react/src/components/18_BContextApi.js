import React, { Component } from 'react'
import { Mycontext } from './18_AContextApi'


export class BContextApi extends Component {
    render() {
        return (
            <div>
                <h1>Component B</h1>
                <Mycontext.Consumer>{
                    ({ data, handlecheck }) => (
                        <div>
                            <h3>{data.name},{data.roll}</h3>
                            <button onClick={handlecheck}>Change roll no using Context API</button>
                        </div>
                    )
                }</Mycontext.Consumer>
            </div>
        )
    }
}

export default BContextApi
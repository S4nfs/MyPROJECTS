import React, { Component } from 'react'
import { mycontext } from './AContextApi'

export class CContextApi extends Component {
    render() {
        return (
            <div>
                <h1>Component C</h1>
                <mycontext.Consumer>{data => <h3>{data.roll}</h3>}</mycontext.Consumer>
            </div>
        )
    }
}

export default CContextApi
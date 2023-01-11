import React, { Component } from 'react'
import { Mycontext } from './18_AContextApi'


export class CContextApi extends Component {
    render() {
        return (
            <div>
                <h1>Component C</h1>
                <Mycontext.Consumer>{data => <h3>{data.roll}</h3>}</Mycontext.Consumer>
            </div>
        )
    }
}

export default CContextApi
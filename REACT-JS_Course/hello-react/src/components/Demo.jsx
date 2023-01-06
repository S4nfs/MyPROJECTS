import React, { Component } from 'react'

export class Demo extends Component {
    constructor() {
        super()
        this.state = {
            name: "Sagar"
        }
    }
    render() {
        return (
            <>

                <p>Hello this is {this.state.name}</p>
                <button onClick={() => {
                    this.setState({ name: "Verma" })
                    console.log(this.state)
                }}>Change</button>

            </>
        )
    }
}

export default Demo
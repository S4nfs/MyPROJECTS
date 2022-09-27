import React, { Component } from 'react'



export class CFunctionClick extends Component {
    clickme() {
        alert("you just click me");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickme}>Click me ! I am a Class event listener</button>
            </div>
        )
    }
}

export default CFunctionClick
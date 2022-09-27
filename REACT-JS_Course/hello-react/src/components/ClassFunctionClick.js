import React, { Component } from 'react'
export class CFunctionClick extends Component {
    constructor(props) {
        super(props);
        // this.clickme = this.clickme.bind(this);  //bind to access "this" in clickme or you can use arrow in clickme to access "this"
        this.state = {
            course: "React",
            roll: this.props.roll
        }
    }
    clickme = () => {
        console.log("Made by sagar with", this.state.course, this.props.roll);
    }

    render() {
        return (
            <div>
                <button onClick={this.clickme}>Click me ! I am a Class event listener</button>
                {this.props.roll}
            </div>
        )
    }
}

export default CFunctionClick
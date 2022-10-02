import React, { Component } from 'react'
import axios from 'axios'
export class PostAxios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>Get/Post using Axios</div>
        )
    }
}

export default PostAxios
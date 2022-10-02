import React, { Component } from 'react'
import axios from 'axios'
export class GetAxios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: [],
            error: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    post: res.data
                })
                console.log(res)
            }).catch(err => {
                this.setState({
                    error: 'Unable to fetch data :('
                })
                console.log(err)
            })
    }
    render() {
        const { post, error } = this.state
        return (
            <div>GET using Axios
                {
                    post.length ? post.map(posts => <div key={posts.id}> {posts.title} </div>) : null
                }
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

export default GetAxios
import React, { Component } from 'react'
import axios from 'axios'
export class GetAxios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            searchField: '',
            error: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    user: res.data
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
        const { user, error } = this.state
        //[{name:"sagar"},{ name:"antony"}]
        const filteredSearch = this.state.user.filter(elem => elem.name.toLocaleLowerCase().includes(this.state.searchField))
        return (
            <div>
                GET using Axios<br></br>

                <input type="search" name="" id="" placeholder='Search by name' onChange={(e) => {
                    const searchField = e.target.value.toLocaleLowerCase();

                    this.setState(() => {
                        return { searchField: searchField }
                    })
                }} />
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                    {
                        filteredSearch.length ? filteredSearch.map(users =>
                            <tr key={users.id}>
                                <td> {users.name}</td>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                            </tr>) : null
                    }
                </table>
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

export default GetAxios
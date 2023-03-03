import { useMutation } from '@apollo/client'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { DELETE_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries'
import { GET_PROJECTS } from '../queries/projectQueries'
const ClientRow = ({ client }) => {
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },

        //reflecting back changes to cache or you can fetch queries again, we are using first method ...
        // update(cache, { data: { deleteClient } }) {
        //     const { clients } = cache.readQuery({ query: GET_CLIENTS })
        //     cache.writeQuery({
        //         query: GET_CLIENTS,
        //         data: { clients: clients.filter(client => client.id !== deleteClient.id) }
        //     })
        // }
        //.....

        refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }] //updated both clients and projects
    })
    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td><button className="btn btn-danger btn-sm" onClick={deleteClient}><FaTrash /></button></td>
        </tr>
    )
}

export default ClientRow
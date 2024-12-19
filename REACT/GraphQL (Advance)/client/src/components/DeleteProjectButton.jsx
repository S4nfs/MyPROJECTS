import { useMutation } from '@apollo/client'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DELETE_PROJECT } from '../mutations/projectMutations'
import { GET_PROJECTS } from '../queries/projectQueries'

const DeleteProjectButton = ({ projectId }) => {
    const navigate = useNavigate()

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECTS }], //refetching queries instead of cache update
    })

    return (
        <>
            <d-flex className="mt-5 ms-auto"><button className="btn btn-info m-2" onClick={deleteProject}>Delete Project</button></d-flex>
        </>
    )
}

export default DeleteProjectButton
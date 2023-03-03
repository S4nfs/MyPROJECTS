import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { UPDATE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECT } from '../queries/projectQueries';

const EditProjectForm = ({ projectData }) => {
    console.log(projectData)
    const [name, setName] = useState(projectData.name)
    const [description, setDescription] = useState(projectData.description)
    const [status, setStatus] = useState(() => {
        switch (projectData.status) {
            case "Not Started":
                return "new";
            case "In Progress":
                return "progress";
            case "Completed":
                return "completed";
            default:
                throw new Error(`Unknown status: ${projectData.status}`);
        }
    });

    const [updateProject] = useMutation(UPDATE_PROJECT, {
        variables: { id: projectData.id, name, description, status },
        refetchQueries: [{ query: GET_PROJECT, variables: { id: projectData.id } }]
    })

    const onSubmit = (e) => {
        e.preventDefault()
        updateProject(name, description, status)
    }

    return (
        <div className='mt-5'>
            <h3>Update project details</h3>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="" className='form-label'>
                        Name
                    </label>
                    <input type="text" name="" id="name" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className='form-label'>
                        Description
                    </label>
                    <textarea type="text" name="" id="description" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className='form-label'>
                        Status
                    </label>
                    <select id="status" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="new">Not Started</option>
                        <option value="progress">In-Progress</option>
                        <option value="completed">Completed</option>

                    </select>
                </div>
                <button className="btn btn-secondary" type="submit" data-bs-dismiss="modal">Submit</button>
            </form>
        </div>
    )
}

export default EditProjectForm
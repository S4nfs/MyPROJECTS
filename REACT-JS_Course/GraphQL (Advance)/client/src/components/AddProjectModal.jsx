import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ADD_PROJECT } from '../mutations/projectMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';


const AddProjectModal = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [clientId, setClientId] = useState('')
    const [status, setStatus] = useState('new');
    const [show, setShow] = useState(false);

    const [addProject] = useMutation(ADD_PROJECT, {
        variables: { name, description, clientId, status },
        update(cache, { data: { addProject } }) {    //return value from addProject
            const { projects } = cache.readQuery({ query: GET_PROJECTS })
            cache.writeQuery({
                query: GET_PROJECTS,
                data: { projects: [...projects, addProject] }
            })
        }
    })

    //get clients for select
    const { data, error, loading } = useQuery(GET_CLIENTS)

    const onSubmit = (e) => {
        e.preventDefault()

        addProject(name, description, clientId, status)
        setName('');
        setDescription('')
        setStatus('new')
        setClientId('')
    }

    if (loading) return null
    if (error) return <p>Something Went Wrong ?</p>


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {!loading && !error && (
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Add project
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add a Project</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Clients</label>
                                    <select id="clientId" className="form-select" value={clientId} onChange={(e) => setClientId(e.target.value)} >
                                        <option value="">Select Client</option>
                                        {data.clients.map((client) => (
                                            <option value={client.id} key={client.id}>{client.name}</option>

                                        ))}
                                    </select>
                                </div>
                                <button className="btn btn-secondary" type="submit" data-bs-dismiss="modal">Submit</button>
                            </form>
                        </Modal.Body>
                    </Modal>
                </>
            )}

        </>

    )
}

export default AddProjectModal
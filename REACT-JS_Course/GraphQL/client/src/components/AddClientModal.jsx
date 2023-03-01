import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

const AddClientModal = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [show, setShow] = useState(false);

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: { name, email, phone },
        update(cache, { data: { addClient } }) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS })

            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: [...clients, addClient] }
            })
        }
    })

    const onSubmit = (e) => {
        e.preventDefault()
        addClient(name, email, phone)
        setName('');
        setEmail('')
        setPhone('')
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add client
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Client</Modal.Title>
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
                                Email
                            </label>
                            <input type="text" name="" id="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className='form-label'>
                                Phone
                            </label>
                            <input type="text" name="" id="phone" className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <button className="btn btn-secondary" type="submit" data-bs-dismiss="modal">Submit</button>
                    </form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>

    )
}

export default AddClientModal
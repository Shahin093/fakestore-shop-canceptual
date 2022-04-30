import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactMotal = ({ id }) => {
    console.log(id);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `https://fakestoreapi.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Detail
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal {product.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{product.title}</Modal.Body>
                <Modal.Body>Price : {product.price}</Modal.Body>
                <img className='w-50' src={product.image} alt="" />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactMotal;
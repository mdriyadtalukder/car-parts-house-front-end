import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './Modall.css'
const Modall = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btnn' onClick={handleShow}>
        See
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                value='Riyad'
                disabled
                readOnly
                autoFocus
              />

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>User Email</Form.Label>
              <Form.Control
                type="email"
                value='Riyad@gmail.com'
                disabled
                readOnly
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btnn' onClick={handleClose}>
            Close
          </button>
          <button className=' btn btnn' onClick={handleClose}>
            Ok
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modall;
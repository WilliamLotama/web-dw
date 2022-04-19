import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// import "./style.css";

const AlertDelete = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-danger btn-sm" onClick={handleShow}>
        Delete{" "}
      </button>

      <Modal
        variant="dark"
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure Want To Delete This Data?</Modal.Body>
        <Modal.Footer>
          <Button className="buttonEdit" onClick={handleClose}>
            Yes
          </Button>
          <Button className="buttonDelete" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AlertDelete;

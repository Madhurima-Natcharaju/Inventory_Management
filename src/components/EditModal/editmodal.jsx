import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./editmodal.css";

const EditModal = ({ show, handleClose, product, handleSave }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleChange = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
    setIsFormChanged(true);
  };

  const handleSubmit = () => {
    handleSave(editedProduct);
    handleClose();
  };

  useEffect(() => {
    if (!show || product !== editedProduct) {
      setIsFormChanged(false);
    }
  }, [show, product]);

  return (
    <div className="modal">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="black-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product-name">{editedProduct.name}</div>
          <Form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={editedProduct.category}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={editedProduct.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="quantity"
                  value={editedProduct.quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <Form.Label>Value</Form.Label>
                <Form.Control
                  type="text"
                  name="value"
                  value={editedProduct.value}
                  readOnly
                />
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!isFormChanged}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;

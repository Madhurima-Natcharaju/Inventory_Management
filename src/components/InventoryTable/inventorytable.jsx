import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  enableProduct,
  deleteProduct,
  disableProduct,
  updateProduct,
} from "../../store";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import "./inventoryTable.css";

const InventoryTable = ({ onEdit, disableActions }) => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory.inventory);

  const handleEdit = (item) => {
    if (!disableActions) {
      const updatedItem = { ...item, name: "Updated Product Name" };
      dispatch(updateProduct(updatedItem));
      onEdit && onEdit(item);
    }
  };

  const handleDisableEnable = (id, disabled) => {
    if (!disableActions) {
      dispatch(disabled ? enableProduct(id) : disableProduct(id));
    }
  };

  const handleDelete = (id) => {
    if (!disableActions) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="custom-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr
              key={item.id}
              className={item.disabled ? "table-secondary" : ""}
            >
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <span
                  onClick={() => handleEdit(item)}
                  style={{
                    color: "green",
                    cursor: disableActions ? "not-allowed" : "pointer",
                    opacity: disableActions ? 0.5 : 1,
                    marginRight: "12px",
                  }}
                  title={disableActions ? "Action disabled" : "Edit"}
                >
                  <MdModeEditOutline size={20} />
                </span>

                <span
                  onClick={() => handleDisableEnable(item.id, item.disabled)}
                  style={{
                    color: "purple",
                    cursor: disableActions ? "not-allowed" : "pointer",
                    opacity: disableActions ? 0.5 : 1,
                    marginRight: "12px",
                  }}
                  title={disableActions ? "Action disabled" : "Enable/Disable"}
                >
                  <IoEyeSharp size={20} />
                </span>

                <span
                  onClick={() => handleDelete(item.id)}
                  style={{
                    color: "red",
                    cursor: disableActions ? "not-allowed" : "pointer",
                    opacity: disableActions ? 0.5 : 1,
                  }}
                  title={disableActions ? "Action disabled" : "Delete"}
                >
                  <MdDelete size={20} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InventoryTable;

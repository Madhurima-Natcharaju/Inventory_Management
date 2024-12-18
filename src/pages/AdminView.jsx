import React, { useState } from "react";
import NavbarComponent from "../components/Navbar/navbar";
import TopWidgets from "../components/TopWidgets/topwidgets";
import InventoryTable from "../components/InventoryTable/inventorytable";
import EditModal from "../components/EditModal/editmodal";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../store";
import useInventoryFetch from "../hooks/useInventoryFetch";

const AdminView = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const inventory = useSelector((state) => state.inventory.inventory);

  const dispatch = useDispatch();

  useInventoryFetch();

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setShowEditModal(true);
  };

  const handleSaveProduct = (product) => {
    dispatch(updateProduct(product));
    setShowEditModal(false);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <div>
      <TopWidgets style={{ marginBottom: "30px" }} />
      <InventoryTable onEdit={handleEditProduct} />
      {currentProduct && (
        <EditModal
          show={showEditModal}
          handleClose={handleCloseEditModal}
          product={currentProduct}
          handleSave={handleSaveProduct}
        />
      )}
    </div>
  );
};

export default AdminView;

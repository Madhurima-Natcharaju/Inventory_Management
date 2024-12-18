import React, { useEffect, useState } from "react";
import inventoryService from "../../services/inventoryService";

const InventoryComponent = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    inventoryService()
      .then((data) => setInventory(data))
      .catch((err) => console.error(err.message));
  }, []);

  return <div></div>;
};

export default InventoryComponent;

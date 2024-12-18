import React from "react";
import TopWidgets from "../components/TopWidgets/topwidgets";
import InventoryTable from "../components/InventoryTable/inventorytable";
import useInventoryFetch from "../hooks/useInventoryFetch";

const UserView = () => {
  useInventoryFetch();
  return (
    <div>
      <TopWidgets />
      <InventoryTable disableActions={true} />{" "}
    </div>
  );
};

export default UserView;

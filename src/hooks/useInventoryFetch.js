import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInventory } from "../store";
import { fetchInventory } from "../services/inventoryService";

const useInventoryFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getInventoryData = async () => {
      const data = await fetchInventory();
      dispatch(setInventory(data));
    };
    getInventoryData();
  }, [dispatch]);
};

export default useInventoryFetch;

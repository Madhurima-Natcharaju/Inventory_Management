import { createStore, combineReducers } from "redux";

const SET_INVENTORY = "SET_INVENTORY";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const DISABLE_PRODUCT = "DISABLE_PRODUCT";
const ENABLE_PRODUCT = "ENABLE_PRODUCT";

export const setInventory = (inventory) => ({
  type: SET_INVENTORY,
  payload: inventory,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const disableProduct = (id) => ({
  type: DISABLE_PRODUCT,
  payload: id,
});

export const enableProduct = (id) => ({
  type: ENABLE_PRODUCT,
  payload: id,
});

const initialState = {
  inventory: [],
  totalProducts: 0,
  totalStoreValue: 0,
  outOfStock: 0,
  categoriesCount: 0,
};


const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INVENTORY:
      const updatedInventory = action.payload.map((item, index) => ({
        ...item,
        id: item.id || index, 
        disabled: item.disabled || false,
        price: parseFloat(item.price.replace("$", "").trim()) || 0,
      }));
      return {
        ...state,
        inventory: updatedInventory,
        totalProducts: updatedInventory.length,
        totalStoreValue: updatedInventory.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
        outOfStock: updatedInventory.filter((item) => item.quantity === 0)
          .length,
        categoriesCount: new Set(updatedInventory.map((item) => item.category))
          .size,
      };

    case UPDATE_PRODUCT: {
      const updatedInventory = state.inventory.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
      return calculateMetrics({ ...state, inventory: updatedInventory });
    }

    case DELETE_PRODUCT: {
      const updatedInventory = state.inventory.filter(
        (item) => item.id !== action.payload
      );
      return calculateMetrics({ ...state, inventory: updatedInventory });
    }

    case ENABLE_PRODUCT: {
      console.log("Enabling product with ID:", action.payload);
      const updatedInventory = state.inventory.map((item) =>
        item.id === action.payload ? { ...item, disabled: false } : item
      );
      return calculateMetrics({ ...state, inventory: updatedInventory });
    }

    case DISABLE_PRODUCT: {
      console.log("Disabling product with ID:", action.payload);
      const updatedInventory = state.inventory.map((item) =>
        item.id === action.payload ? { ...item, disabled: true } : item
      );
      return calculateMetrics({ ...state, inventory: updatedInventory });
    }

    default:
      return state;
  }
};

const calculateMetrics = (state) => {
  const activeInventory = state.inventory.filter((item) => !item.disabled);

  const totalProducts = activeInventory.length;
  const totalStoreValue = activeInventory.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const outOfStock = activeInventory.filter(
    (item) => item.quantity === 0
  ).length;
  const categoriesCount = new Set(activeInventory.map((item) => item.category))
    .size;

  console.log("Recalculated Metrics (Excluding Disabled):", {
    totalProducts,
    totalStoreValue,
    outOfStock,
    categoriesCount,
  });

  return {
    ...state,
    totalProducts,
    totalStoreValue,
    outOfStock,
    categoriesCount,
  };
};

const rootReducer = combineReducers({
  inventory: inventoryReducer,
});

const store = createStore(rootReducer);

export default store;

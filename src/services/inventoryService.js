export const fetchInventory = async () => {
  try {
    const response = await fetch(
      "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch inventory data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    return [];
  }
};

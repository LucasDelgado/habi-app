const orderArray = (array, key, order) => {
  if (order === "asc") {
    return array.sort((a, b) => a[key] - b[key]);
  }
  return array.sort((a, b) => b[key] - a[key]);
};
export default orderArray;

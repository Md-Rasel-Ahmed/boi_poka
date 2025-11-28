const getData = () => {
  let stordedData = localStorage.getItem("book-list");
  if (stordedData) {
    return (stordedData = JSON.parse(stordedData));
  } else {
    return (stordedData = []);
  }
};

const setData = (id) => {
  let storedData = getData();

  storedData.push(id);
  localStorage.setItem("book-list", JSON.stringify(storedData));
};
export { getData, setData };

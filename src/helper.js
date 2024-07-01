// formatting date
export const formatDateToLocalString = (epoch) =>
  new Date(epoch).toLocaleDateString();

// format currency
export const formatCurrency = (amt) => {
  return Math.round(amt);
};

// fetch data
export const fetchData = (key) => {
  if (JSON.parse(localStorage.getItem(key))) {
    return JSON.parse(localStorage.getItem(key));
  }

  return [];
};

// save career to localstorage
export const saveCareer = (career) => {
  const existing = fetchData("savedCareers") ?? [];

  return localStorage.setItem(
    "savedCareers",
    JSON.stringify([...existing, career])
  );
};

// delete career
export const deleteCareer = (key, id) => {
  const existingData = fetchData(key);

  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

// item exists
export const itemExistsInLocalStorage = (key, id) => {
  const existingData = JSON.parse(localStorage.getItem(key)) || [];

  const itemExists = existingData.some((item) => item.id === id);

  return itemExists;
};

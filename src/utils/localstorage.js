export const setToLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getFromLocalStorage = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export const removeFromLocalStorage = (name) => {
  return localStorage.removeItem(name);
};

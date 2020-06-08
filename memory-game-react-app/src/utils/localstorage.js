
export function setLocalStorage(keyName, keyValue) {
  localStorage.setItem(keyName, JSON.stringify(keyValue));
};

export function getLocalStorage(keyName) {
  return JSON.parse(localStorage.getItem(keyName));
};

export function checkKeyName(keyName) {
  return localStorage.hasOwnProperty(keyName);
};
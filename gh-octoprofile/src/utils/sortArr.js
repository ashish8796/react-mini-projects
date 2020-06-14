export function sortArr(arr, key) {

  return arr.sort((a, b) => b[key] - a[key]);
} 
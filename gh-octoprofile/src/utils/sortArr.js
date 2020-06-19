export function sortArr(arr, key) {
  const sortKey = {
    forks: "fork",
    stars: "star",
    size: "size"
  }

  return arr.sort((a, b) => b[sortKey[key]] - a[sortKey[key]]);
} 
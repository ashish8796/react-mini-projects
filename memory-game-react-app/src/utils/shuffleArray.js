export default function suffleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let k = Math.floor(Math.random() * (arr.length));
    [arr[i], arr[k]] = [arr[k], arr[i]];
  }

  return arr;
}
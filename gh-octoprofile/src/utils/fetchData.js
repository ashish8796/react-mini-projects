async function fetchData(link, cb = () => { }) {

  const response = await fetch(link);
  console.log(response.status)
  // if (response.status === 404) {
  //   throw new Error("User Not found")
  // };
  const data = await response.json();

  return data;

  // try {
  //   const response = await fetch(link);
  // if (response.status === 404) {
  //   throw new Error("User Not found")
  // }
  //   const data = await response.json();

  //   return data;
  // } catch (e) {

  //   if (e) {
  //     console.log(e.name);
  //     //   alert(
  //     //   "Slow or No Internet Connection"
  //     // );
  //   }
  // }
}

export default fetchData;
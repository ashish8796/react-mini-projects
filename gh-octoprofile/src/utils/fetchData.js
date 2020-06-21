async function fetchData(link, cb = () => { }) {
  try {
    const response = await fetch(link);
    const data = await response.json();

    return data;
  } catch (e) {
    // alert(e.name)

    if (e) {
      console.log(e.name);
      //   alert(
      //   "Slow or No Internet Connection"
      // );
    }
  }
}

export default fetchData;
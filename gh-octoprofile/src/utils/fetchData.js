
async function fetchData(link, cb = () => { }) {
  try {
    const response = await fetch(link);
    const data = await response.json();

    return data;
  } catch (e) {
    throw new Error(e);
  }
}

export default fetchData;
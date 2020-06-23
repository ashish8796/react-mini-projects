async function fetchData(link, cb = () => { }) {
  try {
    const response = await fetch(link);
    const fetchRemaining = response.headers.get("X-Ratelimit-Remaining");

    if (response.status === 404) {
      return {
        data: "user not found",
        requests: Number(fetchRemaining) - 2
      };
    }

    if (response.status === 403) {
      return {
        data: "Request Limit Exceeded",
        requests: Number(fetchRemaining) - 2
      }
    }

    if (response.status === 200) {
      const data = await response.json();

      return {
        data,
        requests: Number(fetchRemaining) - 2
      };
    }

  } catch (e) {

    if (e) {
      return e.name;
    }
  }
}

export default fetchData;
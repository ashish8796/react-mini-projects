class Api {
  constructor(props) {
    this.mainUrl = "http://localhost:5500";
  }

  async get(url) {
    try {
      await fetch(this.mainUrl + url);
    }
    catch (e) {
      console.log(e)
    }
  }

  async post(url, data) {
    try {
      await fetch(this.mainUrl + url, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    }
    catch (e) {
      console.log(e)
    }
  }
}

const api = new Api();

export const get = (url) => api.get(url);
export const post = (url, data) => api.post(url, data);



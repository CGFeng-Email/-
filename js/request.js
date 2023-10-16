const instance = axios.create({
  baseURL: "",
  timeout: 10000,
});

function get(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function post(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, params, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

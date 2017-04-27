const axios = require('axios');

module.exports = (apiKey) => {

  if (!apiKey) {
    throw new Error('API Key is required.')
  }

  const request = axios.create({
    baseURL: 'https://onesignal.com/api/v1',
    headers: {
      Authorization: `Basic ${apiKey}`
    }
  });

  return {
    getApps(cb) {
      let callback = cb || function () {};
      return request.get('/apps')
        .then(function (response) {
          callback(null, response.data);
          return response.data;
        })
        .catch((err) => {
          callback(err, null);
          return err;
        });

    },
    createApp(options, cb) {
      let callback = cb || function () {};
      return request.post('/apps', options)
        .then(function (response) {
          callback(null, response.data);
          return response.data;
        })
        .catch((err) => {
          callback(err, null);
          return err;
        });

    }
  }
}
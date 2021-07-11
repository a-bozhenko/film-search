export const REQUEST_TYPES = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DEL: 'DELETE',
};

export const replaceUrlPlaceholder = (url, param, val) => {
  return url.replace('{' + param + '}', val);
};

export const replaceUrlPlaceholders = (url, data) => {
  Object.keys(data).forEach((key) => {
    url = replaceUrlPlaceholder(url, key, data[key]);
  });
  return url;
};

export const getRequestConfig = (method, endpoint) => {
  let config = {
    method: method,
    url: process.env.REACT_APP_API_URL + endpoint,
  };

  if (method === REQUEST_TYPES.POST) {
    config.data = {};
  }

  return config;
};

export const makeParams = (params) => {
  const apikey = process.env.REACT_APP_PRIVAT_KEY; // api key to login

  return { ...params, apikey };
};

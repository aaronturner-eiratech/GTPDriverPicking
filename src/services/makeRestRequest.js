/**
 * Fetch Promise with preconfigured headers and JSON parsing of response.
 *
 * @param  {string} endpoint     URL to fetch from
 * @param  {object} body         to send with POST request
 * @param  {object} customConfig to override default config
 * @return {object}              returns parsed data from response
*/
export default function makeRestRequest(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return fetch(endpoint, config)
    .then(async (response) => {
      let data;
      try {
        data = await response.json();
      } catch (err) {
        // response is not in JSON format
        data = response;
      }
      if (response.ok) {
        return data;
      }
      return Promise.reject(data);
    })
    .catch((err) => Promise.reject(err));
}

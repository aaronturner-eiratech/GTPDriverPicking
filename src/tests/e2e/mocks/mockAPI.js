import vans from '../../fixtures/getVans.json';
import cells from '../../fixtures/getCells.json';

function jsonResponse(request, json) {
  return request.respond({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify(json),
  });
}

async function mockApi() {
  await page.setRequestInterception(true);
  page.on('request', async (request) => {
    const {
      pathname,
      port,
      searchParams,
    } = new URL(request.url());
    try {
      console.log("---------------------port is " + port);
      if (port === '7014') {
        if (pathname.includes('/cells')) {
          return jsonResponse(request, cells);
        } else if (pathname.includes('/vans')) {
          return jsonResponse(request, vans);
        } else if (pathname.includes('/release')) {
          return jsonResponse(request, {});
        }
      }
      else {
        request.continue();
      }
    } catch (error) {
      console.error(error, request.url(), request.postData());
    }
  });

  return Promise.resolve();
}

export default mockApi;
export {
  jsonResponse
};
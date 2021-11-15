import makeRestRequest from './makeRestRequest';

export default class SkyRestService {
  constructor() {
    this.port = '0.0.0.0';
    this.host = `${this.port}:7`;
  }

  /**
   * make GET request to get van list
   */
  async getVans() {
    try {
      const vans = await makeRestRequest(`http://${this.host}014/vans`);
      return vans;
    } catch (err) {
      console.error('GET van list failed with error:', err);
      return Promise.reject(err);
    }
  }

  /**
   * make GET request to get cells
   * @param   {string} id     van ID
   */
  async getCells(id) {
    try {
      const cells = await makeRestRequest(`http://${this.host}014/buffer/${id}/cells`);
      return cells;
    } catch (err) {
      console.error('GET cells failed with error:', err);
      return Promise.reject(err);
    }
  }

  /**
   * make POST request to get release buffer
   * @param   {string} id     van ID
   */
  async releaseBuffer(id) {
    try {
      const van = {
        van_id: id,
      };
      const releaseBuffer = await makeRestRequest(`http://${this.host}014/buffer/release`, {
        method: 'POST',
        body: van,
      });
      console.log('Response for releasing buffer', releaseBuffer);
      return releaseBuffer;
    } catch (err) {
      console.error('Release buffer failed with error:', err);
      return Promise.reject(err);
    }
  }

  // async releaseBuffer(id) {
  //   try {
  //     const buffer = await makeRestRequest(`http://${this.host}014/buffer/release/${id}`);
  //     return buffer;
  //   } catch (err) {
  //     console.error('Release Buffer failed with error:', err);
  //     return Promise.reject(err);
  //   }
  // }
}

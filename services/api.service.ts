import axios from 'axios';

export const ApiService = {
  async getData() {
    return await axios.get('/api/stats', {
      headers: {
        'content-type': 'application/json',
      },
    });
  },

  async getUserDataByUserAddress(address: string) {
    return await axios.get(`/api/user?address=${address}`, {
      headers: {
        'content-type': 'application/json',
      },
    });
  },
};

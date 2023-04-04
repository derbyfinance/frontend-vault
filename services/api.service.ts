import axios from 'axios';

export const ApiService = {
  async getData(chainId: number) {
    return await axios.get(`/api/stats?chainId=${chainId}`, {
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

  async getUserVaultById(id: string) {
    return await axios.get(`/api/vaults/${id}`, {
      headers: {
        'content-type': 'application/json',
      },
    });
  },

  async getNft() {
    return await axios.get(`/api/nft`, {
      headers: {
        'content-type': 'application/json',
      },
    });
  },

  async getRaceData() {
    return await axios.get(`/api/race`, {
      headers: {
        'content-type': 'application/json',
      },
    });
  },
};

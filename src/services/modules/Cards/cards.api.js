import axios from 'axios';
import { API_URL } from 'constants/base.constants';

const cardsApi = {
  async getCards() {
    const data = await axios.get(`${API_URL}/cards`);
    return data;
  },
};

export default cardsApi;

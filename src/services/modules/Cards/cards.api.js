import axios from 'axios';
import { API_URL } from 'constants/base.constants';

const cardsApi = {
  getCards() {
    return axios.get(`${API_URL}/cards`);
  },
};

export default cardsApi;

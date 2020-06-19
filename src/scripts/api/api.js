import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://store-6f41d.firebaseio.com/',
});

const catalogApi = {
  get() {
    return instance.get('/catalog.json').then(response => response.data);
  },
};

export { catalogApi };

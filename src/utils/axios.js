import axios from 'axios';

import MockAdapter from 'axios-mock-adapter';
import data from '../__mock__/tennats';

const customAxios = axios.create({
  baseURL: 'http://localhost:3000',
});

const mock = new MockAdapter(customAxios, { delayResponse: 1000 });
mock.onGet('/api/tenants').reply(200, data);

export default customAxios;

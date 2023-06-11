import ky from 'ky';

const api = ky.create(
    {prefixUrl: 'https://mebeldb.onrender.com/'}
);

export default api;
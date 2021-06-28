const axios = require('axios');
const url = 'https://musicbrainz.org/ws/2';

export async function get(queryType, queryParams) {
    return await axios.get(`${url}/${queryType}?query=${queryParams}`);
};

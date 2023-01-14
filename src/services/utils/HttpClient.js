import axios from 'axios';

// 'https://mycontacts-api.caiorosadev.com'

axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3333';

export default axios;

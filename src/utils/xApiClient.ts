import axios from 'axios';
import config from '../config/config';

const X_API_KEY = config.xApiKey;
const X_API_URL = config.xApiUrl;

if (!X_API_KEY || !X_API_URL) {
  console.warn('⚠️  X API environment variables are not fully set. X features may not work.');
  console.warn('   Ensure X_API_KEY and X_API_URL are in your .env file.');
}

const xApiClient = axios.create({
  baseURL: X_API_URL,
  headers: {
    'Authorization': `Bearer ${X_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

xApiClient.interceptors.request.use(
  (req) => {
    console.log(`[X API Client] Outgoing Request: ${req.method} ${req.url}`);
    return req;
  },
  (error) => {
    console.error('[X API Client] Request Error:', error);
    return Promise.reject(error);
  }
);

xApiClient.interceptors.response.use(
  (res) => {
    console.log(`[X API Client] Incoming Response: ${res.status} ${res.config.url}`);
    return res;
  },
  (error) => {
    console.error('[X API Client] Response Error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export default xApiClient;

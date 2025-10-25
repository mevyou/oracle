import axios from 'axios';
import config from '../config/config';

const XAI_API_KEY = config.xaiApiKey;
const XAI_API_URL = config.xaiApiUrl;

if (!XAI_API_KEY || !XAI_API_URL) {
  console.warn('⚠️  xAI API environment variables are not fully set. xAI features may not work.');
  console.warn('   Ensure XAI_API_KEY and XAI_API_URL are in your .env file.');
}

const xaiApiClient = axios.create({
  baseURL: XAI_API_URL,
  headers: {
    'Authorization': `Bearer ${XAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
  timeout: 360000, // 6 minutes timeout for reasoning models
});

xaiApiClient.interceptors.request.use(
  (req) => {
    console.log(`[xAI API Client] Outgoing Request: ${req.method} ${req.url}`);
    return req;
  },
  (error) => {
    console.error('[xAI API Client] Request Error:', error);
    return Promise.reject(error);
  }
);

xaiApiClient.interceptors.response.use(
  (res) => {
    console.log(`[xAI API Client] Incoming Response: ${res.status} ${res.config.url}`);
    return res;
  },
  (error) => {
    console.error('[xAI API Client] Response Error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export default xaiApiClient;

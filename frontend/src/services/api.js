/**
 * Centralized API service configuration
 * Robust URL normalization with hardcoded live fallback for high availability
 */

const LIVE_RENDER_BACKEND = 'https://hegde-punith-portfolio-backend.onrender.com/api';

const rawBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  LIVE_RENDER_BACKEND;

let cleanBaseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

if (!cleanBaseUrl.endsWith('/api') && cleanBaseUrl !== '/api') {
  cleanBaseUrl = `${cleanBaseUrl}/api`;
}

const API_BASE_URL = cleanBaseUrl;

/**
 * Generic fetch wrapper with robust JSON & HTML error handling
 */
async function fetchApi(endpoint, options = {}) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, config);
    const contentType = response.headers.get('content-type') || '';

    if (!contentType.includes('application/json')) {
      const textData = await response.text();
      if (!response.ok) {
        throw new Error(`Backend response error (${response.status})`);
      }
      throw new Error('Unexpected non-JSON response from backend');
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `API error (${response.status})`);
    }

    return data;
  } catch (error) {
    console.error(`API Fetch Error [${endpoint}]:`, error);
    throw error;
  }
}

/**
 * Health check API service
 */
export async function getHealthStatus() {
  return fetchApi('/health');
}

/**
 * Send contact message API service (POST /api/contact)
 */
export async function sendContactMessage(formData) {
  return fetchApi('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

export default {
  getHealthStatus,
  sendContactMessage,
};

/**
 * Centralized API service configuration
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

/**
 * Generic fetch wrapper with error handling
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
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
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

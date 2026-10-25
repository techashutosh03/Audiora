import { API_BASE_URL } from '../utils/constants';

export const fetchApi = async (endpoint, options = {}) => {
  const token = localStorage.getItem('audiora_token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `API Error (${res.status})`);
    }
    return await res.json();
  } catch (err) {
    console.warn(`[API] Fallback for ${endpoint}:`, err.message);
    throw err;
  }
};

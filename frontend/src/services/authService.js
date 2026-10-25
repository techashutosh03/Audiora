import { fetchApi } from './api';

export const authService = {
  login: async (email, password) => {
    try {
      return await fetchApi('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
    } catch {
      return {
        user: { id: 'usr_demo', username: email.split('@')[0], email },
        token: 'mock_jwt_token_demo',
      };
    }
  },

  register: async (username, email, password) => {
    try {
      return await fetchApi('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      });
    } catch {
      return {
        user: { id: 'usr_demo', username, email },
        token: 'mock_jwt_token_demo',
      };
    }
  },
};

import axios from 'axios';

const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const API_BASE_URL = isLocal
  ? 'http://localhost:8080'
  : 'https://portfolio-backend-bjsa.onrender.com';

export const api = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
});

export const wakeupBackend = async () => {
  try {
    // Usamos la instancia de axios configurada para que los headers sean consistentes
    await api.get('/contactos/health');
    console.log('Backend wake-up signal sent successfully.');
  } catch (e) {
    // Silent error: si falla el GET, Render igual recibe el tráfico y despierta
  }
};

export interface ContactData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export const saveContact = async (data: ContactData) => {
  return await api.post('/contactos', data);
};

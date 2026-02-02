const CLINICA_BASE_URL = 'http://localhost:9091/api/clinics';
const DOCTR_BASE_URL = 'http://localhost:9092/api/doctors';

const getAuthHeaders = () => {
  const username = 'admin';
  const password = 'admin123'; // for clinica, for doctr it's 'password'
  const credentials = btoa(`${username}:${password}`);
  return {
    Authorization: `Basic ${credentials}`,
    'Content-Type': 'application/json',
  };
};

const getAuthHeadersDoctr = () => {
  const username = 'admin';
  const password = 'password';
  const credentials = btoa(`${username}:${password}`);
  return {
    Authorization: `Basic ${credentials}`,
    'Content-Type': 'application/json',
  };
};

export const api = {
  // Clinica APIs
  getClinics: async (page = 0, size = 10) => {
    const response = await fetch(
      `${CLINICA_BASE_URL}?page=${page}&size=${size}`,
      {
        headers: getAuthHeaders(),
      },
    );
    return response.json();
  },
  getClinic: async (id) => {
    const response = await fetch(`${CLINICA_BASE_URL}/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.json();
  },
  createClinic: async (clinic) => {
    const response = await fetch(CLINICA_BASE_URL, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(clinic),
    });
    return response.json();
  },
  updateClinic: async (id, clinic) => {
    const response = await fetch(`${CLINICA_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(clinic),
    });
    return response.json();
  },
  deleteClinic: async (id) => {
    await fetch(`${CLINICA_BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
  },

  // Doctr APIs
  getDoctors: async (page = 0, size = 10) => {
    const response = await fetch(
      `${DOCTR_BASE_URL}?page=${page}&size=${size}`,
      {
        headers: getAuthHeadersDoctr(),
      },
    );
    return response.json();
  },
  getDoctor: async (id) => {
    const response = await fetch(`${DOCTR_BASE_URL}/${id}`, {
      headers: getAuthHeadersDoctr(),
    });
    return response.json();
  },
  createDoctor: async (doctor) => {
    const response = await fetch(DOCTR_BASE_URL, {
      method: 'POST',
      headers: getAuthHeadersDoctr(),
      body: JSON.stringify(doctor),
    });
    return response.json();
  },
  updateDoctor: async (id, doctor) => {
    const response = await fetch(`${DOCTR_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: getAuthHeadersDoctr(),
      body: JSON.stringify(doctor),
    });
    return response.json();
  },
  deleteDoctor: async (id) => {
    await fetch(`${DOCTR_BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeadersDoctr(),
    });
  },
};

import axios from 'axios';

const url = 'http://localhost:5000';

const getPrediction = (file: FormData, api: string) => {
  return axios.post(`${url}/api/${api}`, file, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

class api {
  getSalinity(file: FormData): Promise<any> {
    return getPrediction(file, 'salinity');
  }
}

export default api;

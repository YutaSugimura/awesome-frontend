import React, { useState, useEffect } from 'react';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/1',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  },
  proxy: false,
  responseType: 'json'
});

const sampleAPI = async () => {
  const data = await instance.get('/sample', {
    params: {
      state: 'params'
    }
  });
  return data;
}

const App: React.FC = () => {
  const [state, setState] = useState<string>('');

  useEffect(() => {
    (async () => {
      const { data } = await sampleAPI();
      setState(JSON.stringify(data));
    })();
  }, []);

  return (
    <div>
      <p>{state}</p>
    </div>
  );
}
export default App;

import React, { useEffect, useState } from 'react';
import ky from 'ky';

const sampleAPI = async () => {
  const result = await ky.get('https://pokeapi.co/api/v2/pokemon/1', { searchParams: { state: 'params' } }).json();
  return result;
}

const App: React.FC = () => {
  const [state, setState] = useState<string>('');

  useEffect(() => {
    (async () => {
      const data = await sampleAPI();
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

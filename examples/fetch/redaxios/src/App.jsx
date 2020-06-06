import React from 'react';
import axios from 'redaxios';

const sampleAPI = async () => {
  const { data } = await axios.get(
    'https://pokeapi.co/api/v2/pokemon/1',
  );
  return JSON.parse(data);
};

function App() {
  const [state, setState] = useState('');

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

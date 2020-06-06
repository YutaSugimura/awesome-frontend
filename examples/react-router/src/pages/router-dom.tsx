import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const Components: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { slug } = useParams();

  const [params, setParams] = useState<string>('');
  const [routeState, setRouteState] = useState<string>('');

  useEffect(() => {
    const search = location.search.replace('?state=', '');
    setParams(search);

    const routeState: any = location.state;
    if (routeState) {
      setRouteState(routeState);
    } else {
      setRouteState('');
    }
  }, [location.search, location.state]);

  const navigate = (path: string, param?: string, data?: string) => () => {
    const num = Number(slug) + 1;

    let body = path + '/' + num;
    if (param) {
      body = body + '?state=' + param;
    }

    if (data) {
      history.push(body, data);
    } else {
      history.push(body);
    }
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>react-router-dom</h1>
      <p>slug: {slug}</p>
      <p>params: {params}</p>
      <p>routeState: {routeState}</p>
      <button onClick={navigate('/react-router')}>navigate(simple)</button>
      <button onClick={navigate('/react-router', 'params')}>
        navigate(+params)
      </button>
      <button onClick={navigate('/react-router', 'params', 'moved')}>
        navigate(+simple, routeState)
      </button>
      <button onClick={goBack}>goBack</button>
    </div>
  );
};
export default Components;

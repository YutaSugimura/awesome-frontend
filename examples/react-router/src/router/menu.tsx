import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Components: React.SFC = () => {
  return (
    <Fragment>
      <ul>
        <li>react-router</li>
        <li>
          <Link to="/react-router/1">page1</Link>
        </li>
        <li>
          <Link to="/react-router/2">page2</Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default Components;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { injectGlobal } from 'styled-components';

injectGlobal`
  :focus {
    outline: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById('app'));

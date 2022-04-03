import { Grommet } from 'grommet';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { theme } from './theme';

ReactDOM.render(
  <Grommet full theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Grommet>, document.getElementById('root')
);

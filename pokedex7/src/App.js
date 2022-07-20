import React from 'react';
import GlobalStyle from './globalStyles'
import GlobalState from './components/global/GlobalState';
import Router from './routes/Router';

function App() {
  return (
    <div>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;

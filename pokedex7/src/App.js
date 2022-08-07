import React from 'react';
import GlobalStyle from './globalStyles'
import GlobalState from './components/global/GlobalState';
import Router from './routes/Router';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div>
      <GlobalStyle />
      <ChakraProvider>
        <GlobalState>
          <Router />
        </GlobalState>
      </ChakraProvider>
    </div>
  );
}

export default App;

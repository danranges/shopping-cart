import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import RouteSwitch from './RouteSwitch';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouteSwitch />
    </ChakraProvider>
  </React.StrictMode>
);

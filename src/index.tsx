import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import {theme} from './Constants/chakraTheme.ts'
import './index.css';
import App from './App.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider theme={theme}> 
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>  
);


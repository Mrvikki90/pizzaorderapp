import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import Router from './Router';


function App() {
  return (
 <>
  <ChakraProvider>
   <Router/>
  </ChakraProvider> 
 </>
  );
}

export default App;

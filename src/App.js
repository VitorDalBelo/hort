import SessionProvider from './context/Session';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import React from 'react';
import Produtos from './components/Produtos';

function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Produtos/>}/>
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  );
}

export default App;

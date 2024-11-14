import { BrowserRouter } from 'react-router-dom';

import { ToastProvider } from './context/ToastContextProvider';
import Router from './router';
function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;

import { BrowserRouter, Route } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';

import { Home } from './pages/Home';
import { NewRow } from './pages/NewRow';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rows/new" component={NewRow} />
      </AuthContextProvider>
    </BrowserRouter>

  );
}

export default App;

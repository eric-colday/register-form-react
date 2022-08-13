import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home"  element={<Home />} />
        <Route path="/" exact="true" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

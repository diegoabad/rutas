import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import Characters from './components/Characters';
import Detail from './components/Detail';

function App() {
  const [user, setUser] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const userLS = localStorage.getItem('user');
    if (userLS) {
      setUser(JSON.parse(userLS));
    }
  }, []);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then((response) => response.json())
      .then((data) => setCharacters(data.items));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h1>REACT ROUTER DOM</h1>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route
          path={'/characters'}
          element={<Characters characters={characters} />}
        />
        <Route path={'/characters/:id'} element={<Detail />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

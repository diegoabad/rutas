import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ user, setUser }) => {
  return (
    <nav style={{ width: '50%' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'red' : 'green')}
            to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'red' : 'green')}
            to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'red' : 'green')}
            to="/contact">
            Contact
          </NavLink>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'red' : 'green')}
              to="/characters">
              Characters
            </NavLink>
          </li>
        </li>
      </ul>
      {user && <p>{`Hola ${user.name}`}</p>}
      <button
        onClick={() => {
          if (user) {
            setUser(null);
            localStorage.removeItem('user');
          } else {
            setUser({ name: 'Diego' });
            localStorage.setItem('user', JSON.stringify({ name: 'Diego' }));
          }
        }}>
        {user ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

export default NavBar;

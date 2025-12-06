import { Link } from 'react-router-dom';
import { useAuth } from '../context/Auth_context';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1>Portafolio</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/portfolio">Proyectos</Link></li>
        <li>
          {user ? (
            <button onClick={logout} className="btn-nav">Salir</button>
          ) : (
            <Link to="/login" className="btn-nav">Acceso</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
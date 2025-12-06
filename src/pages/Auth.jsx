import { useState } from 'react';
import { useAuth } from '../context/Auth_context';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    
    login({ name: formData.name || 'Usuario', email: formData.email });
    navigate('/portfolio');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{isLogin ? 'Bienvenido' : 'Crear Cuenta'}</h2>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input 
              name="name" type="text" placeholder="Nombre completo" 
              onChange={handleChange} 
            />
          )}
          <input 
            name="email" type="email" placeholder="Correo electrónico" 
            onChange={handleChange} required 
          />
          <input 
            name="password" type="password" placeholder="Contraseña" 
            onChange={handleChange} required 
          />
          
          <button type="submit" className="btn-primary">
            {isLogin ? 'Ingresar' : 'Registrarse'}
          </button>
        </form>
        
        <p style={{ marginTop: '20px', cursor: 'pointer', color: '#4f46e5' }} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </p>
      </div>
    </div>
  );
};

export default Auth;
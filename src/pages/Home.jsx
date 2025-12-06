import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#1f2937' }}>
        Hola, soy <span style={{ color: '#4f46e5' }}>Andrés</span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto 40px' }}>
        Desarrollador Full Stack apasionado por crear experiencias web modernas y escalables.
      </p>
      <Link to="/portfolio">
        <button className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
          Ver mi trabajo
        </button>
      </Link>
    </div>
  );
};

export default Home;
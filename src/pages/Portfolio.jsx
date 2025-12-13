import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Github, Linkedin } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import Tabs from '../components/Tabs';
import Accordion from '../components/Accordion';
import SkillsChart from '../components/SkillsChart';

const COLORS = {
  JavaScript: '#F7DF1E',
  CSS: '#264DE4',
  HTML: '#E34F26',
  TypeScript: '#3178C6',
  PLpgSQL: '#336791',
  Other: '#9ca3af'
};

const projectsData = [
  { 
    id: 1, 
    category: 'Web', 
    title: 'App de Recetas (React)', 
    description: 'Aplicación interactiva para la gestión de recetas culinarias.',
    details: 'Permite crear, ver, editar y borrar recetas (CRUD). Desarrollada con React, gestionando el estado de los ingredientes y pasos de preparación de forma dinámica.',
    images: ['/img/receta-1.png', '/img/receta-2.png'],
    codeUrl: 'https://github.com/AndresANF/react-recetas-app', 
    languages: [
      { name: 'JavaScript', value: 57.6 },
      { name: 'CSS', value: 37.9 },
      { name: 'HTML', value: 4.5 }
    ]
  },
  { 
    id: 2, 
    category: 'Web', 
    title: 'Visualizador de Tiempo (Angular)', 
    description: 'Aplicación precisa para la visualización y gestión del tiempo.',
    details: 'Desarrollado con el framework Angular. Aprovecha la potencia de TypeScript para un tipado robusto y la arquitectura de componentes de Angular para una interfaz modular y escalable.',
    images: ['/img/reloj-1.png', '/img/reloj-2.png'],
    codeUrl: 'https://github.com/AndresANF/visualizador-tiempo', 
    languages: [
      { name: 'TypeScript', value: 34.5 },
      { name: 'CSS', value: 32.8 },
      { name: 'HTML', value: 32.7 }
    ]
  },
  { 
    id: 3, 
    category: 'Software', 
    title: 'Gestor de Eventos', 
    description: 'Sistema completo para la administración de eventos y logística.',
    details: 'Proyecto colaborativo (AndresANF & Diancafer). Backend robusto con lógica almacenada en base de datos (PostgreSQL/PLpgSQL) y lógica de negocio en JavaScript.',
    images: ['/img/eventos-1.png', '/img/eventos-2.png'], 
    codeUrl: 'https://github.com/Diancafer/gestor-eventos', 
    languages: [
      { name: 'JavaScript', value: 68.2 },
      { name: 'PLpgSQL', value: 29.9 },
      { name: 'CSS', value: 1.5 },
      { name: 'Other', value: 0.4 }
    ]
  },
  { 
    id: 4, 
    category: 'Web', 
    title: 'Cine WebRTC', 
    description: 'Plataforma de comunicación en tiempo real orientada a cine.',
    details: 'Implementación de tecnología WebRTC para conexiones peer-to-peer de video y audio. Estructura principal en HTML con lógica de conexión y señalización en JavaScript puro.',
    images: ['/img/cine-1.png', '/img/cine-2.png'], 
    codeUrl: 'https://github.com/AndresANF/cine-webrtc', 
    languages: [
      { name: 'HTML', value: 78.4 },
      { name: 'JavaScript', value: 21.6 }
    ]
  }
];

const LanguageStats = ({ data }) => {
  if (!data) return null;

  return (
    <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
      <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#6b7280' }}>Composición del Código:</h4>
      <div style={{ width: '100%', height: 200, fontSize: '12px' }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="40%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#8884d8'} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend 
              verticalAlign="middle" 
              align="right" 
              layout="vertical"
              formatter={(value, entry) => (
                <span style={{ color: '#374151', fontWeight: 500 }}>
                  {value}: {entry.payload.value}%
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#1f2937' }}>
          Portafolio de Andrés Alejandro Nava Finol
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <a 
            href="https://github.com/AndresANF" 
            target="_blank" 
            rel="noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '1.1rem', 
              color: '#333', 
              textDecoration: 'none', 
              fontWeight: '600',
              background: 'white',
              padding: '10px 20px',
              borderRadius: '30px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Github size={20} />
            GitHub
          </a>

          <a 
            href="https://www.linkedin.com/in/andres-nava-368979340/" 
            target="_blank" 
            rel="noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '1.1rem', 
              color: '#0077b5', 
              textDecoration: 'none', 
              fontWeight: '600',
              background: 'white',
              padding: '10px 20px',
              borderRadius: '30px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
      
      <SkillsChart />
      
      <div style={{ margin: '40px 0' }}></div>

      <Tabs 
        tabs={['Todos', 'Web', 'Software']} 
        activeTab={activeCategory} 
        onTabChange={setActiveCategory} 
      />

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-wrapper" style={{ width: '100%', maxWidth: '800px' }}>
            <ProjectCard project={project} />
            
            <div style={{ background: 'white', padding: '0 20px 20px', borderRadius: '0 0 16px 16px', border: '1px solid #e5e7eb', borderTop: 'none' }}>
                <Accordion title="Ver Detalles y Estadísticas">
                    <p>{project.details}</p>
                    {project.languages && <LanguageStats data={project.languages} />}
                </Accordion>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
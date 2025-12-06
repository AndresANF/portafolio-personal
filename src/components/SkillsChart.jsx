import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'JavaScript', nivel: 90 },
  { name: 'C++', nivel: 60 },        
  { name: 'React', nivel: 85 },
  { name: 'PostgreSQL', nivel: 65 }, 
  { name: 'HTML/CSS', nivel: 80 },
  { name: 'Python', nivel: 55 },     
  { name: 'Java', nivel: 75 },
  { name: 'TypeScript', nivel: 70 },
];

const SkillsChart = () => {
  return (
    <div style={{ width: '100%', height: 400, background: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', boxSizing: 'border-box' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Habilidades Técnicas</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 40,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            interval={0}
          />
          <YAxis domain={[0, 100]} />
          <Tooltip
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            cursor={{ fill: '#f3f4f6' }}
          />
          <Bar
            dataKey="nivel"
            fill="#4f46e5"
            radius={[8, 8, 0, 0]}
            barSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;
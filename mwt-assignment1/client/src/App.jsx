import Overview from './components/Overview';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ textAlign: 'center', fontSize: '28px', padding: '15px' }}>My Portfolio</h1>
      <Overview />
      <Education />
      <Experience />
    </div>
  );
}

export default App;

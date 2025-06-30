import React, { useEffect, useState } from 'react';

export default function Experience() {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getExp')
      .then(res => res.json())
      .then(setExp);
  }, []);

  return (
    <section style={{ padding: '15px 10px' }}>
      <h2 style={{ fontSize: '24px' }}>Experience</h2>
      {exp.map((item, index) => (
        <div key={index}>
          <h3 style={{ fontSize: '18px' }}>{item.role}</h3>
          <p style={{ fontSize: '16px' }}>{item.company} ({item.duration})</p>
        </div>
      ))}
    </section>
  );
}

import React, { useEffect, useState } from 'react';

export default function Education() {
  const [edu, setEdu] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getEdu')
      .then(res => res.json())
      .then(setEdu);
  }, []);

  return (
    <section style={{ padding: '15px 10px' }}>
      <h2 style={{ fontSize: '24px' }}>Education</h2>
      {edu.map((item, index) => (
        <div key={index}>
          <h3 style={{ fontSize: '18px' }}>{item.institution}</h3>
          <p style={{ fontSize: '16px' }}>{item.degree} ({item.year})</p>
        </div>
      ))}
    </section>
  );
}

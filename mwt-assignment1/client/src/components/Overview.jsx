import React, { useEffect, useState } from 'react';

export default function Overview() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading overview...</p>;

  return (
    <section style={{ padding: '15px 10px' }}>
      <h2 style={{ fontSize: '24px' }}>{data.name}</h2>
      <p style={{ fontSize: '16px' }}>{data.bio}</p>
    </section>
  );
}

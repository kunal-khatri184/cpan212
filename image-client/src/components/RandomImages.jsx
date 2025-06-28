import React, { useState } from 'react';
import axios from 'axios';

function RandomImages() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const res = await axios.get('http://localhost:3001/api/random-images');
    setImages(res.data);
  };

  return (
    <div>
      <h3>Random Images from Server</h3>
      <button onClick={fetchImages}>Get Random Images</button>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        {images.map((img, i) => (
          <img key={i} src={`http://localhost:3001${img}`} width={100} />
        ))}
      </div>
    </div>
  );
}

export default RandomImages;

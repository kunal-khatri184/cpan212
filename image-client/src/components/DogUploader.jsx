import React, { useState } from 'react';
import axios from 'axios';

function DogUploader() {
  const [dogUrl, setDogUrl] = useState('');

  const fetchDog = async () => {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    setDogUrl(res.data.message);
  };

  const uploadDog = async () => {
    await axios.post('http://localhost:3001/api/upload-dog', { imageUrl: dogUrl });
    alert('Dog image uploaded to server!');
  };

  return (
    <div>
      <h3>Random Dog Image</h3>
      <button onClick={fetchDog}>Get Dog</button>
      {dogUrl && (
        <>
          <img src={dogUrl} width={150} style={{ margin: '10px 0' }} />
          <br />
          <button onClick={uploadDog}>Upload to Server</button>
        </>
      )}
    </div>
  );
}

export default DogUploader;

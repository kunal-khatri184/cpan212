import React, { useState } from 'react';
import axios from 'axios';

function UploadImages() {
  const [files, setFiles] = useState(null);

  const upload = async () => {
    const formData = new FormData();
    for (let file of files) formData.append('images', file);

    await axios.post('http://localhost:3001/api/upload', formData);
    alert('Uploaded successfully!');
  };

  return (
    <div>
      <h3>Upload Images</h3>
      <input type="file" multiple onChange={e => setFiles(e.target.files)} />
      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default UploadImages;

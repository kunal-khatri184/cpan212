import UploadImages from './components/UploadImages';
import RandomImages from './components/RandomImages';
import DogUploader from './components/DogUploader';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Lab 3 – Image Upload App</h1>
      <UploadImages />
      <hr />
      <RandomImages />
      <hr />
      <DogUploader />
    </div>
  );
}

export default App;

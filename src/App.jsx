import { puppyList } from './data.js';
import { useState } from 'react';
import './App.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [selectedPuppyId, setSelectedPuppyId] = useState(null);

  const selectedPuppy = puppies.find((puppy) => puppy.id === selectedPuppyId);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => setSelectedPuppyId(puppy.id)}>
          {puppy.name}
        </p>
      ))}

      {selectedPuppyId && selectedPuppy && (
        <div>
          <h2>{selectedPuppy.name}</h2>
          <ul>
            <li>Age: {selectedPuppy.age}</li>
            <li>Email: {selectedPuppy.email}</li>
            <li>Tricks: {selectedPuppy.tricks.map(trick => trick.title).join(', ') || "No tricks"}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;



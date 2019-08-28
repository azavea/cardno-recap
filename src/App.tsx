
import React from 'react';
import 'leaflet/dist/leaflet.css';

import RecapMap from './Map';
import './App.css';

const App: React.FC = () => {
  return (
    <>
    <div className="App">
      <p>ReCAP map</p>
    </div>
    <RecapMap>
      <p>Loading the map...</p>
    </RecapMap>
    </>
  );
}

export default App;

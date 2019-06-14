import React from 'react';
import './App.css';
import FoodContainer from '../containers/food-list'
import FoodDetailContainer from '../containers/food-detail';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>List of foods:</h2>
          <FoodContainer/>
        <hr/>
        <h2>Food detail</h2>
          <FoodDetailContainer/>
      </header>
    </div>
  );
}

export default App;

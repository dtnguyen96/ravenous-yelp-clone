import React from 'react';
import './App.css';
import Business from '../Business/Business'
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component {
  render(){
    return (
    <div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <Business />
</div>
  );
   }
}

export default App;

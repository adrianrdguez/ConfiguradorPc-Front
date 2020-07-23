import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

import ConfiguradorManual from './ConfiguradorManual'

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <ConfiguradorManual></ConfiguradorManual>
      </Container>
    </div>
  );
}

export default App;

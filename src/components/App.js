import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'

import ConfiguradorManual from './ConfiguradorManual'

function App() {
  return (
    <div className="App">
      <Container>
      <ConfiguradorManual></ConfiguradorManual>
      </Container>
    </div>
  );
}

export default App;

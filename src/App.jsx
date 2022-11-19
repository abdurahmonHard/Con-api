import React from 'react';
import { Container } from './AppStyle.js';
import MoveiList from './moviList';
import Navbar from './Navbar';
import Add from './Add'

class App extends React.Component {
  render() {
    return (
        <Container>
          <Navbar/>
            <Add/>
          <MoveiList/>
        </Container>
    )
  }
}

export default App;





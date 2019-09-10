import React, { Component } from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite.min.css';
import { Button } from 'rsuite';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button appearance="primary"> 测试 </Button>
      </div>
    );
  }
}

export default App;

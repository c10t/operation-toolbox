import * as React from 'react';

import Sandbox from './components/Sandbox';

class App extends React.Component {
  public render() {
    return (
      <Sandbox foo={6} data={[]}/>
    );
  }
}

export default App;

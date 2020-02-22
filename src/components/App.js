import React from 'react';
import Header from "./Header"
import MemeContainer from "./MemeContainer"
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MemeContainer/>
      </div>
    )
  }
}

export default App;

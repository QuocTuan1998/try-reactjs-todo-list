import React from "react"
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './Counter'
class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProps: 0,
      seed: 40
    }

    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})

    this.ignoreProps = () => this.setState({ignoreProps: Math.random()})

    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random())})
  }

  render() {
    return (
      <div className="mx-auto text-center text-capitalize">
        <h1>hello react</h1>
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>UnMount counter</button>
        <button onClick={this.ignoreProps}>ignore Props</button>
        <button onClick={this.seedGenerator}>Gen Seed</button>
        
        {this.state.mount ? <Counter ignoreProps={this.state.ignoreProps} seed={this.state.seed}/> : null}
      </div>
    )
  }
}

export default App
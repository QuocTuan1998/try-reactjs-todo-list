import React from "react"
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import LanddingPage from './LanddingPage';
import AppLayout from './AppLayout';
import ProtectedRoute  from './protected.route';
class App extends React.Component {
  render() {
    return (
      <div className="mx-auto text-center text-capitalize">
        <h1>hello react</h1>
        <Switch>
          <Route exact path="/" component={LanddingPage} />
          <ProtectedRoute exact path="/app" component={AppLayout} />
        </Switch>
      </div>
    )
  }
}

export default App
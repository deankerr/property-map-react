import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Map from './components/Map'

function App() {
  
  return (

    <Router>
      <div className="App">
        <h1>Property Map React</h1>

        <Switch>

          <Route path="/" component={Map} />

        </Switch>
        
      </div>
    </Router>

  )

}

export default App;

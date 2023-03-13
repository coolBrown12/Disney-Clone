
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Login from './compoents/Login';
import Header from './compoents/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Teachers from './Components/Teachers/Teachers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllService from './Components/AllService/AllService';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/services'>
            <AllService></AllService>
          </Route>

          <Route path='/teachers'>
            <Teachers></Teachers>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

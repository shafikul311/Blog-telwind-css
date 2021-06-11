import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Components/About/About';
import PopularNews from './Components/PopularNews/PopularNews';

function App() {
  return (
    <div className="App">

    <Router>
        
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          
          <Route path="/popular">
            <PopularNews />
          </Route>
          
          <Route path="/about">
            <About/>
          </Route>
          
        </Switch>
    </Router>
      
        
    </div>
  );
}

export default App;

import './App.css';
import Home from './Home';
import Header from './Header';
import AddMovie from './AddMovie';
import { Route, Switch } from "react-router-dom";
import EditMovie from './EditMovie';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/EditMovie">
          <EditMovie/>
        </Route>        
        <Route exact path="/addMovie">
          <AddMovie />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;

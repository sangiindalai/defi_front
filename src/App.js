import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/dashboard">
          <Navbar/>
          <Dashboard/>
        </Route>
		
		    <Route path="/exchange">
          <Navbar/>
          <exchange/>
        </Route>
		
		<Route path="/stake">
          <Navbar/>
          <stake/>
        </Route>
		
      </Switch>
    </BrowserRouter>
  );
}

export default App;

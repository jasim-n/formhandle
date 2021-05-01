import './App.css';
import Form from "./mycomponentss/form";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import display from "./mycomponentss/display"
function App() {
  
  return (
    <BrowserRouter>

<Switch>
   <Route exact path="/" component={Form} />
   <Route exact path="/display" component={display} />
</Switch>
   </BrowserRouter>
  );
}

export default App;



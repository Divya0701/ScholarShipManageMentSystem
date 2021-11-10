import {Route,BrowserRouter} from "react-router-dom"
import Home from "./components/Home/Home"
import LoginForm from "./components/LoginForm/LoginForm";
import './App.css';

function App() {
  return (
   
    <div className="App">
       <BrowserRouter>
       <Route exact path="/login" component={LoginForm}/>
       <Route exact path="/" component={Home}/>
       </BrowserRouter>
     
    </div>
  );
}

export default App;

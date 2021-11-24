
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import SocialLogin from './components/SocialLogin';

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route path="/Slogin" exact component={SocialLogin}/>
        <Route path="/" exact component={Login}/>
        <Route path="/registration" exact component={Registration}/>

        <Route path="/home" exact component={Home}/>
        {/* <Route path="/newcal" exact component={NewCal}/> */}
       
      </Switch>
    </Router>
</>
  )
}

export default App;

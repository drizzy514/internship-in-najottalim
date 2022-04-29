import './App.scss';
import {Route, Switch}  from "react-router-dom";


// pages
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/Login'

function App() {
return <>



        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Private path='/admin' component={Admin} />
          <Public path='/login' component={Login} /> */}
        </Switch>
</>
}

export default App;

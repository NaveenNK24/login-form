import { Route, Switch } from 'react-router';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login-form'>
          <SignIn/>
        </Route>
        <Route path='/signup-form'>
          <SignUp/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

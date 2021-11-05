import { Route, Switch } from 'react-router';
import './App.css';
import SignIn from './components/SignIn';
import SignInSuccess from './components/SignInSuccess';
import SignUp from './components/SignUp';
import SignUpSuccess from './components/SignUpSuccess';

function App() {
  return (
      <div className='App'>
      <Switch>
        <Route path='/login-form'>
          <SignIn/>
        </Route>
        <Route path='/signup-form'>
          <SignUp/>
        </Route>
        <Route path='/signin-success'>
          <SignInSuccess/>
        </Route>
        <Route path='/signup-success'>
          <SignUpSuccess/>
        </Route>
      </Switch>
      </div>
    
  );
}

export default App;

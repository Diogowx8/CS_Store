
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {HashRouter, Switch, Route} from 'react-router-dom';

function App() {

	return(
		<>
		<HashRouter>
      <Switch>
      	<Route path="/" exact={true} component={Home} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/register" exact={true} component={Register} />
			</Switch>
		</HashRouter>	
		</>
	)
}

export default App;
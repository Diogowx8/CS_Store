
import React from 'react';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

function App() {

	const PrivateRoute = ({component: Component, ...rest}) => {
		return <Route
			render={(props => {
				let isAthenticated = sessionStorage.getItem("uuid")
				if (isAthenticated){
					return <Component {...props}/>
				}else{
					return <Redirect to={{pathname: "/"}} />
				}
			})}
		/>
	}

	return(
		<>
		<HashRouter>
      		<Switch>
			  	<Route path="/" exact={true} component={Login} />
			  	<PrivateRoute path="/menu" exact={true} component={Menu} />
        		<Route path="/register" exact={true} component={Register} />
			</Switch>
		</HashRouter>	
		</>
	)
}

export default App;
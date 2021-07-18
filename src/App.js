import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Admin
// import ListProductComponent from './components/admin/ListProductComponent';
// import CreateProductComponent from './components/admin/CreateProductComponent';
// import ViewProductComponent from './components/admin/ViewProductComponent';
import Login from './components/Login';
import { withAuthentication } from './components/Session';
import MainRoute from './MainRoute';
import { ProductsContextProvider } from './global/ProductsContext'
import { CartContextProvider } from './global/CartContext'
import { HistoryBuyContextProvider } from './global/HistoryBuyContext'
import LoginAdmin from './components/admin/LoginAdmin';
class App extends Component {

	render() {
		return (
			<ProductsContextProvider>
				<CartContextProvider>
					<HistoryBuyContextProvider>
					<div class="d-flex flex-column flex-root">
					<Router>
						<Switch>
							<Route exact path={["/", "/signin"]} component={Login} />
							<Route exact path="/admin-signin" component={LoginAdmin} />
							<MainRoute />
						</Switch>
					</Router>
					</div>
					</HistoryBuyContextProvider>
				</CartContextProvider>
			</ProductsContextProvider>
		);
	}
}

export default withAuthentication(App);

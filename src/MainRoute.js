import { Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AsideLeftComponent from './components/AsideLeftComponent';

import { Component } from 'react';
import BoardStaff from './components/BoardStaff';
import Lichtrinhgiotau from './components/user/Lichtrinhgiotau';
import VeTau from './components/user/VeTaus/VeTau';
import SubHeader from './components/user/SubHeader';

import Cart from './components/user/ShoppingCart/Cart';
import Cashout from './components/user/ShoppingCart/Cashout';
import { Products } from './components/user/ShoppingCart/Products';
import ListUserComponent from './components/admin/ListUserComponent';
import Profile from './components/Profile';
import { HistoryBuy } from './components/user/ShoppingCart/HistoryBuy';
import { ProductAdmin } from './components/admin/ProductAdmin';
import EditProduct from './components/admin/EditProduct';
import HomePageAdmin from './components/admin/HomePageAdmin';
import AddProducts from './components/admin/AddProducts';
import { PrivateRoute } from './components/Session/PrivateRoute';
import ListStaffComponent from './components/admin/ListStaffComponent';
import DetailComponent from './components/admin/DetailComponent';
import MapContainer from './components/user/GoogleMap';
import {ConfirmOrder} from './components/staff/ConfirmOrder'
import Notification from './components/admin/Notification'
class MainRoute extends Component {

	render() {
		return (
			<div className="d-flex flex-column flex-root">
				<div className="d-flex flex-row flex-column-fluid page">
					<AsideLeftComponent />
					<div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
						<HeaderComponent />
						<div className="content d-flex flex-column flex-column-fluid" id="kt_content">
							<SubHeader />
							<div className="d-flex flex-column-fluid">
								<div className="container">
									<PrivateRoute path="/homepage-user" roles={["USER"]} component={Lichtrinhgiotau} />
									<Route path="/ve-tau" component={VeTau} />
									<Route path="/profile" component={Profile} />
									<Route path="/maps" component={MapContainer}/>
									{/* <Route path="/addproducts" component={AddProducts} /> */}
									{/* <div> */}
									<Route path='/addproducts' component={AddProducts} />
									<Route path='/cartproducts' component={() => <Cart />} />
									<Route path='/products' component={Products} />
									<Route path='/cashout' component={Cashout} />
									{/* <Route component={NotFound} /> */}
									{/* </div> */}

									<Route path='/historybuy' component={HistoryBuy} />
									{/*  */}
									<Route path="/homepage-staff" component={BoardStaff} />
									<Route path="/notification" component={Notification} />
									<PrivateRoute path="/confirm-order" roles={["STAFF_FOOD"]} component={ConfirmOrder} />
									<PrivateRoute path="/homepage_admin" roles={["ADMIN"]} component={HomePageAdmin} />
									<div>
										<PrivateRoute exact path="/user" roles={["ADMIN"]} component={ListUserComponent} />
										<PrivateRoute exact path="/staff" roles={["ADMIN"]} component={ListStaffComponent} />
										<PrivateRoute exact path="/detail-info/:id" roles={["ADMIN"]} component={DetailComponent} />
										<PrivateRoute path='/productmanager' roles={["ADMIN"]} component={ProductAdmin} />
										<PrivateRoute path='/editproduct/:id' roles={["ADMIN"]} component={EditProduct} />
										{/* <Route exact path="/product" component={ListProductComponent} />
												<Route path="/add-product" component={CreateProductComponent}></Route> */}
										{/* <Route path="/view-product/:id" component={ViewProductComponent}></Route> */}
										{/* <Route path="/update-product/:id" component={CreateProductComponent}></Route> */}
									</div>
								</div>
							</div>
						</div>
						<FooterComponent />
					</div>
				</div>
			</div>
		);
	}
}

export default MainRoute;

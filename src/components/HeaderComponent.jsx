import React, { useContext } from 'react'
import { AuthUserContext, withAuthorization } from './Session';
import SignOut from './SignOut'
import { compose } from 'recompose';
import { CartContext } from '../global/CartContext'
import './css/Home.css'
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
	const { totalQty } = useContext(CartContext);
	return (
		<AuthUserContext.Consumer>
			{authUser =>
				<div>
					<div id="kt_header_mobile" className="header-mobile align-items-center header-mobile-fixed">
						<a href="!#">
							<img alt="Logo" src="./assets/media/logos/logo-light.png" />
						</a>
						<div className="d-flex align-items-center">
							<button className="btn p-0 burger-icon burger-icon-left" id="kt_aside_mobile_toggle">
								<span />
							</button>
							<button className="btn p-0 burger-icon ml-4" id="kt_header_mobile_toggle">
								<span />
							</button>
							<button className="btn btn-hover-text-primary p-0 ml-2" id="kt_header_mobile_topbar_toggle">
								<span className="svg-icon svg-icon-xl">
									<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
										<g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
											<polygon points="0 0 24 0 24 24 0 24" />
											<path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
											<path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fillRule="nonzero" />
										</g>
									</svg>
								</span>
							</button>
						</div>
					</div>

					<div id="kt_header" className="header header-fixed">
						<div className="container-fluid d-flex align-items-stretch justify-content-between">
							<div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
								<div id="kt_header_menu" className="header-menu header-menu-mobile header-menu-layout-default">
									<ul className="menu-nav">
										<li className="menu-item menu-item-submenu menu-item-rel menu-item-active" data-menu-toggle="click" >
											<a href="/home">
												LOGO NAME
												<i className="menu-arrow"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="topbar">
								<div className="dropdown" id="kt_quick_search_toggle">
									<div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
										<div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
											<span className="svg-icon svg-icon-xl svg-icon-primary">
												<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
														<rect x="0" y="0" width="24" height="24" />
														<path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
														<path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" />
													</g>
												</svg>
											</span>
										</div>
									</div>
									<div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
										<div className="quick-search quick-search-dropdown" id="kt_quick_search_dropdown">
											<form method="get" className="quick-search-form">
												<div className="input-group">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<span className="svg-icon svg-icon-lg">
																<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																		<rect x="0" y="0" width="24" height="24" />
																		<path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
																		<path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" />
																	</g>
																</svg>
															</span>
														</span>
													</div>
													<input type="text" className="form-control" placeholder="Search..." />
													<div className="input-group-append">
														<span className="input-group-text">
															<i className="quick-search-close ki ki-close icon-sm text-muted"></i>
														</span>
													</div>
												</div>
											</form>
											<div className="quick-search-wrapper scroll" data-scroll="true" data-height="325" data-mobile-height="200"></div>
										</div>
									</div>
								</div>
								<div className="dropdown">
									<div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
										<div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary">
											<span className="svg-icon svg-icon-xl svg-icon-primary">
												<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
														<rect x="0" y="0" width="24" height="24" />
														<path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" fill="#000000" opacity="0.3" />
														<path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" fill="#000000" />
													</g>
												</svg>
											</span>
											<span className="pulse-ring"></span>
										</div>
									</div>
								</div>

								<div className="topbar-item">
								<Link to="/cartproducts">
								<div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1" id="kt_quick_cart_toggle">
											<span className="svg-icon svg-icon-xl svg-icon-primary">
												<svg>
													<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
														<rect x="0" y="0" width="24" height="24" />
														<path d="M18.1446364,11.84388 L17.4471627,16.0287218 C17.4463569,16.0335568 17.4455155,16.0383857 17.4446387,16.0432083 C17.345843,16.5865846 16.8252597,16.9469884 16.2818833,16.8481927 L4.91303792,14.7811299 C4.53842737,14.7130189 4.23500006,14.4380834 4.13039941,14.0719812 L2.30560137,7.68518803 C2.28007524,7.59584656 2.26712532,7.50338343 2.26712532,7.4104669 C2.26712532,6.85818215 2.71484057,6.4104669 3.26712532,6.4104669 L16.9929851,6.4104669 L17.606173,3.78251876 C17.7307772,3.24850086 18.2068633,2.87071314 18.7552257,2.87071314 L20.8200821,2.87071314 C21.4717328,2.87071314 22,3.39898039 22,4.05063106 C22,4.70228173 21.4717328,5.23054898 20.8200821,5.23054898 L19.6915238,5.23054898 L18.1446364,11.84388 Z" fill="#000000" opacity="0.3" />
														<path d="M6.5,21 C5.67157288,21 5,20.3284271 5,19.5 C5,18.6715729 5.67157288,18 6.5,18 C7.32842712,18 8,18.6715729 8,19.5 C8,20.3284271 7.32842712,21 6.5,21 Z M15.5,21 C14.6715729,21 14,20.3284271 14,19.5 C14,18.6715729 14.6715729,18 15.5,18 C16.3284271,18 17,18.6715729 17,19.5 C17,20.3284271 16.3284271,21 15.5,21 Z" fill="#000000" />
													</g>
												</svg>
											</span>
											<div className='relative' style={{"marginBottom" : "21px","marginLeft" :"-5px" }}>
												<span className='text-primary'>{totalQty}</span>
											</div>
										</div>
								</Link>

								</div>
								<div className="topbar-item">
									<div className="btn btn-icon btn-clean btn-lg mr-1" id="kt_quick_panel_toggle">
										<span className="svg-icon svg-icon-xl svg-icon-primary">
											<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
													<path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
												</g>
											</svg>
										</span>
									</div>
								</div>
								<div className="topbar-item">
									<div className="btn btn-icon btn-clean btn-lg mr-1" data-toggle="modal" data-target="#kt_chat_modal">
										<span className="svg-icon svg-icon-xl svg-icon-primary">
											<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<path d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000" />
													<path d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3" />
												</g>
											</svg>
										</span>
									</div>
								</div>
								<div className="topbar-item">
									<div className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
										<span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
										<span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">{authUser.username}</span>
										<span className="symbol symbol-lg-35 symbol-25 symbol-light-success">
											<span className="symbol-label font-size-h5 font-weight-bold">{authUser.username.charAt(0)}</span>
										</span>
									</div>
								</div>

							</div>
							<div id="kt_quick_user" className="offcanvas offcanvas-right p-10">
								{/*begin::Header*/}
								<div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
									<h3 className="font-weight-bold m-0">User Profile
										{/* <small className="text-muted font-size-sm ml-2">12 messages</small> */}
									</h3>
									<a href="!#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_user_close">
										<i className="ki ki-close icon-xs text-muted"></i>
									</a>
								</div>
								{/*end::Header*/}
								{/*begin::Content*/}
								<div className="offcanvas-content pr-5 mr-n5">
									{/*begin::Header*/}
									<div className="d-flex align-items-center mt-5">
										<div className="symbol symbol-100 mr-5">
											<div className="symbol-label" style={{ "backgroundImage": `url(${authUser.photoURL})` }}></div>
											<i className="symbol-badge bg-success"></i>
										</div>
										<div className="d-flex flex-column">
											<div  className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">{authUser.username}</div>
											{/* <div className="text-muted mt-1">Application Developer</div> */}
											<div className="navi mt-2">
												<div className="navi-item">
														<span className="navi-link p-0 pb-2">
															<span className="navi-icon mr-1">
																<span className="svg-icon svg-icon-lg svg-icon-primary">
																	<i className="far fa-envelope"></i>
																</span>
															</span>
															<span className="navi-text text-muted text-hover-primary">{authUser.email}</span>
														</span>
													</div>
												<SignOut />
											</div>
										</div>
									</div>
									{/*end::Header*/}
									{/*begin::Separator*/}
									<div className="separator separator-dashed mt-8 mb-5"></div>
									{/*end::Separator*/}
									{/*begin::Nav*/}
									<div className="navi navi-spacer-x-0 p-0">
										{/*begin::Item*/}
										<Link to="/profile" className="navi-item">
											<div className="navi-link">
												<div className="symbol symbol-40 bg-light mr-3">
													<div className="symbol-label">
														{/* Image or Icon */}
													</div>
												</div>
												<div className="navi-text">
													<div className="font-weight-bold">My Profile</div>
													<div className="text-muted">Account settings and more
														<span className="label label-light-danger label-inline font-weight-bold">update</span></div>
												</div>
											</div>
										</Link>
										{/*end:Item*/}

									</div>
									<div className="separator separator-dashed my-7"></div>
									{/*end::Separator*/}
									{/*begin::Notifications*/}

								</div>
								{/*end::Content*/}
							</div>

						</div>
					</div>

				</div>
			}
		</AuthUserContext.Consumer>
	)
}

const condition = authUser => !!authUser;

export default compose(withAuthorization(condition))(HeaderComponent)
import { Component } from "react";
class SubHeader extends Component {
	render() {
		return (
			<div className="subheader py-2 py-lg-4 subheader-solid" id="kt_subheader">
				<div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
					<div className="d-flex align-items-center flex-wrap mr-2">
						<h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5">Welcome Dịch Vụ Chăm Sóc Đường Sắt Việt Nam</h5>
						<div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200"></div>
					</div>
					<div className="d-flex align-items-center">
						<a href="!#" className="btn btn-sm btn-light font-weight-bold mr-2" id="kt_dashboard_daterangepicker" data-toggle="tooltip" title="Select dashboard daterange" data-placement="left">
							<span className="text-muted font-size-base font-weight-bold mr-2" id="kt_dashboard_daterangepicker_title">Today</span>
							<span className="text-primary font-size-base font-weight-bolder" id="kt_dashboard_daterangepicker_date">Jul 8</span>
						</a>
						<div className="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
							<a href="!#" className="btn btn-sm btn-clean btn-icon" data-toggle="dropdown" aria-expanded="false">
								<span className="svg-icon svg-icon-success svg-icon-lg">
									<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
										<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<polygon points="0 0 24 0 24 24 0 24" />
											<path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
											<path d="M11,14 L9,14 C8.44771525,14 8,13.5522847 8,13 C8,12.4477153 8.44771525,12 9,12 L11,12 L11,10 C11,9.44771525 11.4477153,9 12,9 C12.5522847,9 13,9.44771525 13,10 L13,12 L15,12 C15.5522847,12 16,12.4477153 16,13 C16,13.5522847 15.5522847,14 15,14 L13,14 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,14 Z" fill="#000000" />
										</g>
									</svg>
								</span>
							</a>
							<div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right py-3">
								<ul className="navi navi-hover py-5">
									<li className="navi-item">
										<a href="!#" className="navi-link">
											<span className="navi-icon">
												<i className="flaticon2-list-3"></i>
											</span>
											<span className="navi-text">Contacts</span>
										</a>
									</li>
									<li className="navi-item">
										<a href="!#" className="navi-link">
											<span className="navi-icon">
												<i className="flaticon2-bell-2"></i>
											</span>
											<span className="navi-text">Calls</span>
										</a>
									</li>
									<li className="navi-separator my-3"></li>
									<li className="navi-item">
										<a href="!#" className="navi-link">
											<span className="navi-icon">
												<i className="flaticon2-magnifier-tool"></i>
											</span>
											<span className="navi-text">Help</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default SubHeader

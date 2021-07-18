
const HomePageAdmin = () => {
    return (
        <div className="row">
            <div className="col-lg-6 col-xxl-4">
                <div className="card card-custom bg-gray-100 card-stretch gutter-b">
                    <div className="card-header border-0 bg-danger py-5">
                        <h3 className="card-title font-weight-bolder text-white">Sales Stat</h3>
                        <div className="card-toolbar">
                            <div className="dropdown dropdown-inline">
                                <a href="!#" className="btn btn-transparent-white btn-sm font-weight-bolder dropdown-toggle px-5" data-toggle="dropdown" aria-expanded="false">Export</a>
                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                    <ul className="navi navi-hover">
                                        <li className="navi-header pb-1">
                                            <span className="text-primary text-uppercase font-weight-bold font-size-sm">Add new:</span>
                                        </li>
                                        <li className="navi-item">
                                            <a href="!#" className="navi-link">
                                                <span className="navi-icon">
                                                    <i className="flaticon2-shopping-cart-1"></i>
                                                </span>
                                                <span className="navi-text">Order</span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="!#" className="navi-link">
                                                <span className="navi-icon">
                                                    <i className="flaticon2-calendar-8"></i>
                                                </span>
                                                <span className="navi-text">Event</span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="!#" className="navi-link">
                                                <span className="navi-icon">
                                                    <i className="flaticon2-graph-1"></i>
                                                </span>
                                                <span className="navi-text">Report</span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="!#" className="navi-link">
                                                <span className="navi-icon">
                                                    <i className="flaticon2-rocket-1"></i>
                                                </span>
                                                <span className="navi-text">Post</span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="!#" className="navi-link">
                                                <span className="navi-icon">
                                                    <i className="flaticon2-writing"></i>
                                                </span>
                                                <span className="navi-text">File</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0 position-relative overflow-hidden">
                        <div id="kt_mixed_widget_1_chart" className="card-rounded-bottom bg-danger" style={{ "height": "200px" }}>

                        </div>
                        <div className="card-spacer mt-n25">
                            <div className="row m-0">
                                <div className="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7">
                                    <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect x="0" y="0" width="24" height="24" />
                                                <rect fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5" />
                                                <rect fill="#000000" x="8" y="9" width="3" height="11" rx="1.5" />
                                                <rect fill="#000000" x="18" y="11" width="3" height="9" rx="1.5" />
                                                <rect fill="#000000" x="3" y="13" width="3" height="7" rx="1.5" />
                                            </g>
                                        </svg>
                                    </span>
                                    <a href="!#" className="text-warning font-weight-bold font-size-h6">Weekly Sales</a>
                                </div>
                                <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                                    <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                                            </g>
                                        </svg>
                                    </span>
                                    <a href="!#" className="text-primary font-weight-bold font-size-h6 mt-2">New Users</a>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                                    <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fillRule="nonzero" />
                                                <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3" />
                                            </g>
                                        </svg>
                                    </span>
                                    <a href="!#" className="text-danger font-weight-bold font-size-h6 mt-2">Item Orders</a>
                                </div>
                                <div className="col bg-light-success px-6 py-8 rounded-xl">
                                    <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect x="0" y="0" width="24" height="24" />
                                                <path d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z" fill="#000000" opacity="0.3" />
                                                <path d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z" fill="#000000" />
                                            </g>
                                        </svg>
                                    </span>
                                    <a href="!#" className="text-success font-weight-bold font-size-h6 mt-2">Bug Reports</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
                <div className="card card-custom card-stretch gutter-b">
                    <div className="card-header align-items-center border-0 mt-4">
                        <h3 className="card-title align-items-start flex-column">
                            <span className="font-weight-bolder text-dark">Admin TimeLine Activity</span>
                        </h3>
                        <div className="card-toolbar">
                            <div className="dropdown dropdown-inline">
                                <a href="!#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-expanded="false">
                                    <i className="ki ki-bold-more-hor"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                    <ul className="navi navi-hover">
                                        <li className="navi-header font-weight-bold py-4">
                                            <span className="font-size-lg">Choose Label:</span>
                                            <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
                                        </li>
                                        <li className="navi-separator mb-3 opacity-70"></li>
                                        <li className="navi-item">
                                            <a href="!#" className="navi-link">
                                                <span className="navi-text">
                                                    <span className="label label-xl label-inline label-light-success">Customer</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="!#" className="navi-link">
                                                <span className="navi-text">
                                                    <span className="label label-xl label-inline label-light-danger">Partner</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="!#" className="navi-link">
                                                <span className="navi-text">
                                                    <span className="label label-xl label-inline label-light-warning">Suplier</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="!#" className="navi-link">
                                                <span className="navi-text">
                                                    <span className="label label-xl label-inline label-light-primary">Member</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="!#" className="navi-link">
                                                <span className="navi-text">
                                                    <span className="label label-xl label-inline label-light-dark">Staff</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="navi-separator mt-3 opacity-70"></li>
                                        <li className="navi-footer py-4">
                                            <a className="btn btn-clean font-weight-bold btn-sm" href="!#">
                                                <i className="ki ki-plus icon-sm"></i>Add new</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pt-4">
                        <div className="timeline timeline-6 mt-3">
                            <div className="timeline-item align-items-start">
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">08:42</div>
                                <div className="timeline-badge">
                                    <i className="fa fa-genderless text-warning icon-xl"></i>
                                </div>
                                <div className="font-weight-mormal font-size-lg timeline-content text-muted pl-3">Outlines keep you honest. And keep structure</div>
                            </div>
                            <div className="timeline-item align-items-start">
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">10:00</div>
                                <div className="timeline-badge">
                                    <i className="fa fa-genderless text-success icon-xl"></i>
                                </div>
                                <div className="timeline-content d-flex">
                                    <span className="font-weight-bolder text-dark-75 pl-3 font-size-lg">AEOL meeting</span>
                                </div>
                            </div>
                            <div className="timeline-item align-items-start">
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">14:37</div>
                                <div className="timeline-badge">
                                    <i className="fa fa-genderless text-danger icon-xl"></i>
                                </div>
                                <div className="timeline-content font-weight-bolder font-size-lg text-dark-75 pl-3">Make deposit
                                    <a href="!#" className="text-primary">USD 700</a>. to ESL</div>
                            </div>
                            <div className="timeline-item align-items-start">
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">16:50</div>
                                <div className="timeline-badge">
                                    <i className="fa fa-genderless text-primary icon-xl"></i>
                                </div>
                                <div className="timeline-content font-weight-mormal font-size-lg text-muted pl-3">Indulging in poorly driving and keep structure keep great</div>
                            </div>
                            <div className="timeline-item align-items-start">
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">21:03</div>
                                <div className="timeline-badge">
                                    <i className="fa fa-genderless text-danger icon-xl"></i>
                                </div>
                                <div className="timeline-content font-weight-bolder text-dark-75 pl-3 font-size-lg">New order placed
                                    <a href="!#" className="text-primary">#XF-2356</a>.</div>
                            </div>
                            <div className="timeline-item align-items-start">
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">23:07</div>
                                <div className="timeline-badge">
                                    <i className="fa fa-genderless text-info icon-xl"></i>
                                </div>
                                <div className="timeline-content font-weight-mormal font-size-lg text-muted pl-3">Outlines keep and you honest. Indulging in poorly driving</div>
                            </div>
                            <div className="timeline-item align-items-start">
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">16:50</div>
                                <div className="timeline-badge">
                                    <i className="fa fa-genderless text-primary icon-xl"></i>
                                </div>
                                <div className="timeline-content font-weight-mormal font-size-lg text-muted pl-3">Indulging in poorly driving and keep structure keep great</div>
                            </div>
                            <div className="timeline-item align-items-start">
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">21:03</div>
                                <div className="timeline-badge">
                                    <i className="fa fa-genderless text-danger icon-xl"></i>
                                </div>
                                <div className="timeline-content font-weight-bolder font-size-lg text-dark-75 pl-3">New order placed
                                    <a href="!#" className="text-primary">#XF-2356</a>.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="col-lg-6 col-xxl-4">
                <div className="card card-custom card-stretch card-stretch-half gutter-b">
                    <div className="card-body p-0">
                        <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
                            <span className="symbol symbol-50 symbol-light-success mr-2">
                                <span className="symbol-label">
                                    <span className="svg-icon svg-icon-xl svg-icon-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect x="0" y="0" width="24" height="24" />
                                                <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                                                <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                                            </g>
                                        </svg>
                                    </span>
                                </span>
                            </span>
                            <div className="d-flex flex-column text-right">
                                <span className="text-dark-75 font-weight-bolder font-size-h3">750$</span>
                                <span className="text-muted font-weight-bold mt-2">Weekly Income</span>
                            </div>
                        </div>
                        <div id="kt_stats_widget_11_chart" className="card-rounded-bottom" data-color="success" style={{ "height": "150px" }}></div>
                    </div>
                </div>
                <div className="card card-custom card-stretch card-stretch-half gutter-b">
                    <div className="card-body p-0">
                        <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
                            <span className="symbol symbol-50 symbol-light-primary mr-2">
                                <span className="symbol-label">
                                    <span className="svg-icon svg-icon-xl svg-icon-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                                            </g>
                                        </svg>
                                    </span>
                                </span>
                            </span>
                            <div className="d-flex flex-column text-right">
                                <span className="text-dark-75 font-weight-bolder font-size-h3">+6,5K</span>
                                <span className="text-muted font-weight-bold mt-2">New Users</span>
                            </div>
                        </div>
                        <div id="kt_stats_widget_12_chart" className="card-rounded-bottom" data-color="primary" style={{ "height": "150px" }}></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xxl-12">
                <div className="card card-custom">
                    <div className="card-header flex-wrap border-0 pt-6 pb-0">
                        <div className="card-title">
                            <h3 className="card-label">Bảng thông tin xữ lý lỗi tàu
                                <span className="d-block text-muted pt-2 font-size-sm">Hỗ trợ đa nhiệm</span></h3>
                        </div>
                        <div className="card-toolbar">
                            <a href="!#" className="btn btn-light-danger font-weight-bold mr-2">
                                <span className="svg-icon svg-icon-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <circle fill="#000000" cx="9" cy="15" r="6" />
                                            <path d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z" fill="#000000" opacity="0.3" />
                                        </g>
                                    </svg>
                                </span>Báo lỗi</a>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-hover mt-10" id="datatable">
                            <thead>
                                <tr>
                                    <th colSpan="2">ID Information</th>
                                    <th colSpan="2">Location Information</th>
                                    <th colSpan="1">Trouble Time</th>
                                    <th colSpan="2">Status</th>
                                </tr>
                                <tr>
                                    <th>ID</th>
                                    <th>Train</th>
                                    <th>Country</th>
                                    <th>Address</th>
                                    <th>Ship Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>64616-103</td>
                                    <td>Brazil</td>
                                    <td>São Félix do Xingu</td>
                                    <td>10/15/2017</td>
                                    <td>5</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>54868-3377</td>
                                    <td>Vietnam</td>
                                    <td>Bình Minh</td>
                                    <td>4/24/2016</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePageAdmin
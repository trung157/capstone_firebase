import React, { Component } from 'react'
import { AuthUserContext, withAuthorization } from './Session';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
class AsideLeftComponent extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <AuthUserContext.Consumer>
                {authUser =>
                    <div>
                        <div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside">
                            {/* <Router> */}
                            <div className="brand flex-column-auto" id="kt_brand">
                                <a href="index.html" className="brand-logo">
                                    <img alt="Logo" src="./assets/media/logos/logo-light.png" />
                                </a>
                                <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
                                    <span className="svg-icon svg-icon svg-icon-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fillRule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)" />
                                                <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)" />
                                            </g>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
                                <div id="kt_aside_menu" className="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500">
                                    {authUser.roles === "ADMIN" && (
                                        <ul className="menu-nav">
                                            <li className="menu-item">
                                                <a href="!#" className="menu-link">
                                                    <span className="svg-icon menu-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                                <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fillRule="nonzero" />
                                                                <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <span className="menu-text">Dashboard</span>
                                                </a>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Management User</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="far fa-user-circle"></i>
                                                    </span>
                                                    <span className="menu-text">Management Users</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item" >
                                                            <Link to="/user" replace className="menu-link">
                                                                <i className="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span className="menu-text">List User</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Management User</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="far fa-user-circle"></i>
                                                    </span>
                                                    <span className="menu-text">Management Staff</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item" >
                                                            <Link to="/staff" replace className="menu-link">
                                                                <i className="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span className="menu-text">List Staff</span>
                                                            </Link>
                                                        </li>
                                                        {/* <li className="menu-item" >
                                                            <a href="!#" className="menu-link">
                                                                <i className="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span className="menu-text">Add User</span>
                                                            </a>
                                                        </li>
                                                        <li className="menu-item" >
                                                            <a href="!#" className="menu-link">
                                                                <i className="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span className="menu-text">User Lock</span>
                                                            </a>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Management Products</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="fas fa-cube"></i>
                                                    </span>
                                                    <span className="menu-text">Management Products</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item" >
                                                            <Link to="/productmanager" className="menu-link">
                                                                <i className="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span className="menu-text">List Products</span>
                                                            </Link>
                                                        </li>
                                                        <li className="menu-item" >
                                                            <Link to="/addproducts" className="menu-link">
                                                                <i className="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span className="menu-text">Add Products</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Quản lí thông tin tàu</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="fas fa-train"></i>
                                                    </span>
                                                    <span className="menu-text">Lỗi xử lý tàu</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item" >
                                                            <Link to="/notification" className="menu-link">
                                                                <i className="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span className="menu-text">Thông tin xử lý tàu vấn đề</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Quản lí các cửa hàng</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="fas fa-store"></i>
                                                    </span>
                                                    <span className="menu-text">Cửa hàng chi nhánh vùng</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item" >
                                                            <Link to="!#" className="menu-link">
                                                                <i className="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span className="menu-text">Tên Cửa hàng</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Doanh Thu</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="far fa-money-bill-alt"></i>
                                                    </span>
                                                    <span className="menu-text">Doanh thu theo tháng</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item" >
                                                            <Link to="!#" className="menu-link">
                                                                <i className="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span className="menu-text">Chi tiết tiền</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    )}
                                    {authUser.roles === "USER" && (
                                        <ul className="menu-nav">
                                            <li className="menu-item">
                                                <a href="/homepage-user" className="menu-link">
                                                    <span className="svg-icon menu-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                                <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fillRule="nonzero" />
                                                                <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <span className="menu-text">Dashboard</span>
                                                </a>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Map</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="far fa-user-circle"></i>
                                                    </span>
                                                    <span className="menu-text">Map</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" fill="#000000" />
                                                                            <path d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" fill="#000000" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">Bạn đang ở đâu</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <Link to="/maps" className="menu-link" >
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Your position</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Shedule</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="fas fa-cube"></i>
                                                    </span>
                                                    <span className="menu-text">Shedule</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 L21,8 C21,8.55228475 20.5522847,9 20,9 L4,9 C3.44771525,9 3,8.55228475 3,8 L3,7 C3,6.44771525 3.44771525,6 4,6 Z M5,11 L10,11 C10.5522847,11 11,11.4477153 11,12 L11,19 C11,19.5522847 10.5522847,20 10,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,12 C4,11.4477153 4.44771525,11 5,11 Z M14,11 L19,11 C19.5522847,11 20,11.4477153 20,12 L20,19 C20,19.5522847 19.5522847,20 19,20 L14,20 C13.4477153,20 13,19.5522847 13,19 L13,12 C13,11.4477153 13.4477153,11 14,11 Z" fill="#000000" />
                                                                            <path d="M14.4452998,2.16794971 C14.9048285,1.86159725 15.5256978,1.98577112 15.8320503,2.4452998 C16.1384028,2.90482849 16.0142289,3.52569784 15.5547002,3.83205029 L12,6.20185043 L8.4452998,3.83205029 C7.98577112,3.52569784 7.86159725,2.90482849 8.16794971,2.4452998 C8.47430216,1.98577112 9.09517151,1.86159725 9.5547002,2.16794971 L12,3.79814957 L14.4452998,2.16794971 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">Vé Tàu</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <Link to="/ve-tau" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Vé Tàu Đã Mua</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z" fill="#000000" />
                                                                            <path d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z" fill="#000000" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">Todo</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <a href="custom/apps/todo/tasks.html" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Tasks</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item" >
                                                                        <a href="custom/apps/todo/docs.html" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Docs</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item" >
                                                                        <a href="custom/apps/todo/files.html" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Files</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Store</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="fas fa-train"></i>
                                                    </span>
                                                    <span className="menu-text">Store</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 L21,8 C21,8.55228475 20.5522847,9 20,9 L4,9 C3.44771525,9 3,8.55228475 3,8 L3,7 C3,6.44771525 3.44771525,6 4,6 Z M5,11 L10,11 C10.5522847,11 11,11.4477153 11,12 L11,19 C11,19.5522847 10.5522847,20 10,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,12 C4,11.4477153 4.44771525,11 5,11 Z M14,11 L19,11 C19.5522847,11 20,11.4477153 20,12 L20,19 C20,19.5522847 19.5522847,20 19,20 L14,20 C13.4477153,20 13,19.5522847 13,19 L13,12 C13,11.4477153 13.4477153,11 14,11 Z" fill="#000000" />
                                                                            <path d="M14.4452998,2.16794971 C14.9048285,1.86159725 15.5256978,1.98577112 15.8320503,2.4452998 C16.1384028,2.90482849 16.0142289,3.52569784 15.5547002,3.83205029 L12,6.20185043 L8.4452998,3.83205029 C7.98577112,3.52569784 7.86159725,2.90482849 8.16794971,2.4452998 C8.47430216,1.98577112 9.09517151,1.86159725 9.5547002,2.16794971 L12,3.79814957 L14.4452998,2.16794971 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">Quà</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <Link to="/products" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Đồ lưu niệm</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <Link to='/historybuy' className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Lịch sử mua hàng</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    )}
                                    {authUser.roles === "STAFF_FOOD" && (
                                        <ul className="menu-nav">
                                            <li className="menu-item">
                                                <a href="/homepage-staff" className="menu-link">
                                                    <span className="svg-icon menu-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                                <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fillRule="nonzero" />
                                                                <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <span className="menu-text">Dashboard</span>
                                                </a>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Map</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="far fa-user-circle"></i>
                                                    </span>
                                                    <span className="menu-text">Map</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" fill="#000000" />
                                                                            <path d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" fill="#000000" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">STAFF_FOOD</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <Link to="/maps" className="menu-link" >
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Your position</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Shedule</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="fas fa-cube"></i>
                                                    </span>
                                                    <span className="menu-text">Shedule</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 L21,8 C21,8.55228475 20.5522847,9 20,9 L4,9 C3.44771525,9 3,8.55228475 3,8 L3,7 C3,6.44771525 3.44771525,6 4,6 Z M5,11 L10,11 C10.5522847,11 11,11.4477153 11,12 L11,19 C11,19.5522847 10.5522847,20 10,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,12 C4,11.4477153 4.44771525,11 5,11 Z M14,11 L19,11 C19.5522847,11 20,11.4477153 20,12 L20,19 C20,19.5522847 19.5522847,20 19,20 L14,20 C13.4477153,20 13,19.5522847 13,19 L13,12 C13,11.4477153 13.4477153,11 14,11 Z" fill="#000000" />
                                                                            <path d="M14.4452998,2.16794971 C14.9048285,1.86159725 15.5256978,1.98577112 15.8320503,2.4452998 C16.1384028,2.90482849 16.0142289,3.52569784 15.5547002,3.83205029 L12,6.20185043 L8.4452998,3.83205029 C7.98577112,3.52569784 7.86159725,2.90482849 8.16794971,2.4452998 C8.47430216,1.98577112 9.09517151,1.86159725 9.5547002,2.16794971 L12,3.79814957 L14.4452998,2.16794971 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">Vé Tàu</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <Link to="/ve-tau" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Vé Tàu Đã Mua</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z" fill="#000000" />
                                                                            <path d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z" fill="#000000" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">Todo</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <a href="custom/apps/todo/tasks.html" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Tasks</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item" >
                                                                        <a href="custom/apps/todo/docs.html" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Docs</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item" >
                                                                        <a href="custom/apps/todo/files.html" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Files</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Store</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="fas fa-train"></i>
                                                    </span>
                                                    <span className="menu-text">Store</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 L21,8 C21,8.55228475 20.5522847,9 20,9 L4,9 C3.44771525,9 3,8.55228475 3,8 L3,7 C3,6.44771525 3.44771525,6 4,6 Z M5,11 L10,11 C10.5522847,11 11,11.4477153 11,12 L11,19 C11,19.5522847 10.5522847,20 10,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,12 C4,11.4477153 4.44771525,11 5,11 Z M14,11 L19,11 C19.5522847,11 20,11.4477153 20,12 L20,19 C20,19.5522847 19.5522847,20 19,20 L14,20 C13.4477153,20 13,19.5522847 13,19 L13,12 C13,11.4477153 13.4477153,11 14,11 Z" fill="#000000" />
                                                                            <path d="M14.4452998,2.16794971 C14.9048285,1.86159725 15.5256978,1.98577112 15.8320503,2.4452998 C16.1384028,2.90482849 16.0142289,3.52569784 15.5547002,3.83205029 L12,6.20185043 L8.4452998,3.83205029 C7.98577112,3.52569784 7.86159725,2.90482849 8.16794971,2.4452998 C8.47430216,1.98577112 9.09517151,1.86159725 9.5547002,2.16794971 L12,3.79814957 L14.4452998,2.16794971 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">Quà</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <Link to="/products" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Đồ lưu niệm</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    )}
                                    {authUser.roles === "STAFF_INSPECTOR" && (
                                        <ul className="menu-nav">
                                            <li className="menu-item">
                                                <a href="/homepage-staff" className="menu-link">
                                                    <span className="svg-icon menu-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                                <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fillRule="nonzero" />
                                                                <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <span className="menu-text">Dashboard</span>
                                                </a>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Map</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="far fa-user-circle"></i>
                                                    </span>
                                                    <span className="menu-text">Map</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" fill="#000000" />
                                                                            <path d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" fill="#000000" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">STAFF_INSPECTOR</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <Link to="/maps" className="menu-link" >
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Your position</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Shedule</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="fas fa-cube"></i>
                                                    </span>
                                                    <span className="menu-text">Shedule</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 L21,8 C21,8.55228475 20.5522847,9 20,9 L4,9 C3.44771525,9 3,8.55228475 3,8 L3,7 C3,6.44771525 3.44771525,6 4,6 Z M5,11 L10,11 C10.5522847,11 11,11.4477153 11,12 L11,19 C11,19.5522847 10.5522847,20 10,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,12 C4,11.4477153 4.44771525,11 5,11 Z M14,11 L19,11 C19.5522847,11 20,11.4477153 20,12 L20,19 C20,19.5522847 19.5522847,20 19,20 L14,20 C13.4477153,20 13,19.5522847 13,19 L13,12 C13,11.4477153 13.4477153,11 14,11 Z" fill="#000000" />
                                                                            <path d="M14.4452998,2.16794971 C14.9048285,1.86159725 15.5256978,1.98577112 15.8320503,2.4452998 C16.1384028,2.90482849 16.0142289,3.52569784 15.5547002,3.83205029 L12,6.20185043 L8.4452998,3.83205029 C7.98577112,3.52569784 7.86159725,2.90482849 8.16794971,2.4452998 C8.47430216,1.98577112 9.09517151,1.86159725 9.5547002,2.16794971 L12,3.79814957 L14.4452998,2.16794971 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">Vé Tàu</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <Link to="/ve-tau" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Vé Tàu Đã Mua</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z" fill="#000000" />
                                                                            <path d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z" fill="#000000" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">Todo</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <a href="custom/apps/todo/tasks.html" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Tasks</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item" >
                                                                        <a href="custom/apps/todo/docs.html" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Docs</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item" >
                                                                        <a href="custom/apps/todo/files.html" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Files</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-section">
                                                <h4 className="menu-text">Store</h4>
                                                <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                            </li>
                                            <li className="menu-item menu-item-submenu" data-menu-toggle="hover">
                                                <a href="!#" className="menu-link menu-toggle">
                                                    <span className="svg-icon menu-icon">
                                                        <i className="fas fa-train"></i>
                                                    </span>
                                                    <span className="menu-text">Store</span>
                                                    <i className="menu-arrow"></i>
                                                </a>
                                                <div className="menu-submenu">
                                                    <i className="menu-arrow"></i>
                                                    <ul className="menu-subnav">
                                                        <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                            <a href="!#" className="menu-link menu-toggle">
                                                                <span className="svg-icon menu-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 L21,8 C21,8.55228475 20.5522847,9 20,9 L4,9 C3.44771525,9 3,8.55228475 3,8 L3,7 C3,6.44771525 3.44771525,6 4,6 Z M5,11 L10,11 C10.5522847,11 11,11.4477153 11,12 L11,19 C11,19.5522847 10.5522847,20 10,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,12 C4,11.4477153 4.44771525,11 5,11 Z M14,11 L19,11 C19.5522847,11 20,11.4477153 20,12 L20,19 C20,19.5522847 19.5522847,20 19,20 L14,20 C13.4477153,20 13,19.5522847 13,19 L13,12 C13,11.4477153 13.4477153,11 14,11 Z" fill="#000000" />
                                                                            <path d="M14.4452998,2.16794971 C14.9048285,1.86159725 15.5256978,1.98577112 15.8320503,2.4452998 C16.1384028,2.90482849 16.0142289,3.52569784 15.5547002,3.83205029 L12,6.20185043 L8.4452998,3.83205029 C7.98577112,3.52569784 7.86159725,2.90482849 8.16794971,2.4452998 C8.47430216,1.98577112 9.09517151,1.86159725 9.5547002,2.16794971 L12,3.79814957 L14.4452998,2.16794971 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                                <span className="menu-text">Quà</span>
                                                                <i className="menu-arrow"></i>
                                                            </a>
                                                            <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                                <ul className="menu-subnav">
                                                                    <li className="menu-item" >
                                                                        <Link to="/products" className="menu-link">
                                                                            <i className="menu-bullet menu-bullet-dot">
                                                                                <span></span>
                                                                            </i>
                                                                            <span className="menu-text">Đồ lưu niệm</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </AuthUserContext.Consumer>
        )
    }
}

const condition = authUser => !!authUser;

export default compose(withAuthorization(condition))(AsideLeftComponent)
import React, { Component } from 'react'
import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';
class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: []
        }
        this.lockUser = this.lockUser.bind(this);
        this.unlockUser = this.unlockUser.bind(this);
    }
    lockUser(id) {
        this.props.firebase.user(id).update({
            lock: 1
        })
      }
    unlockUser(id) {
        this.props.firebase.user(id).update({
            lock: 0
        })
    }

    componentDidMount() {
        this.props.firebase.users().orderByChild("roles").equalTo("USER").on('value', (users) => {
            var arrayData = [];
            users.forEach(element => {
                const key = element.key;
                const name = element.val().username;
                const email = element.val().email;
                const roles = element.val().roles;
                const lock = element.val().lock;
                arrayData.push({
                    id: key,
                    name: name,
                    email: email,
                    roles: roles,
                    lock: lock
                })
            });
            this.setState({
                userData: arrayData
            })
        })
    }

    render() {
        return (
            <div className="card card-custom">
                <div className="card-header flex-wrap py-5">
                    <div className="card-title">
                        <h3 className="card-label">List Users
                            <div className="text-muted pt-2 font-size-sm">Hỗ trợ User</div>
                        </h3>
                    </div>
                    {/* <div className="card-toolbar">
                        <a href="!#" className="btn btn-primary font-weight-bolder">
                            <span className="svg-icon svg-icon-md">
                                <span className="svg-icon svg-icon-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <circle fill="#000000" cx="9" cy="15" r="6" />
                                            <path d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z" fill="#000000" opacity="0.3" />
                                        </g>
                                    </svg>
                                </span>
                            </span>Add User</a>
                    </div> */}
                </div>
                <div className="card-body">
                    <div className="mb-7">
                        <div className="row align-items-center">
                            <div className="col-lg-9 col-xl-8">
                                <div className="row align-items-center">
                                    <div className="col-md-4 my-2 my-md-0">
                                        <div className="input-icon">
                                            <input type="text" className="form-control" placeholder="Search..." id="kt_datatable_search_query" />
                                            <span>
                                                <i className="flaticon2-search-1 text-muted"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered table-hover table-checkable">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                {/* <th>Last Name</th> */}
                                <th>Email</th>
                                <th>Roles</th>
                                {/* <th>Identity Card</th>
                                <th>Phone</th> */}
                                <th>Lock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.userData.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.name} </td>
                                            <td> {user.email}</td>
                                            <td> {user.roles}</td>
                                            {/* <td> {user.identityCard}</td>
                                            <td> {user.phone}</td> */}
                                            <td>
                                                {user.lock === 0 ?
                                                    <i className="fa fa-unlock-alt fa-2x text-primary" onClick={() => this.lockUser(user.id)} ></i>
                                                    :
                                                    <i className="fa fa-lock fa-2x text-danger" onClick={() => this.unlockUser(user.id)} ></i>
                                                }
                                            </td>
                                            <Link to={`/detail-info/${user.id}`} className="btn btn-light-info font-weight-bold mr-2">Detail</Link>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default withFirebase(ListUserComponent)
import React, { Component } from "react";
import { compose } from "recompose";
// import { Redirect } from "react-router-dom";
import { withFirebase } from './Firebase';
import { AuthUserContext, withAuthorization } from './Session';
import { storage } from './Firebase/firebase'

const Profile = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <ProfilePage authUser={authUser} />
        )}
    </AuthUserContext.Consumer>
);
class ProfileBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            phoneNumber: '',
            identityCard: '',
            photoURL: '',
            photoURL1: ''
        };
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    // editInfo = (username, phoneNumber, identityCard) => {
    //     var item = {}
    //     item.username = username;
    //     item.phoneNumber = phoneNumber;
    //     item.identityCard = identityCard;
    //     this.props.firebase.user(this.props.authUser.uid).update(item)
    //     // this.props.getData(item);
    //     // this.props.addDataStore(item);
    // }
    imgHandler = (e) => {
        const types = ['image/png', 'image/jpg  ', 'image/jpeg'];
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            this.setState({
                photoURL: selectedFile,
                photoURL1: URL.createObjectURL(selectedFile)
            });
            this.setState({
                error: ''
            })
        }
        else {
            this.setState({
                photoURL: null
            });
        }
        //         var reader = new FileReader();
        //   var url = reader.readAsDataURL(selectedFile);
        //         console.log(url)
    }
    onSubmit = (e) => {
        e.preventDefault();

        const { username, phoneNumber, identityCard, photoURL } = this.state;
        if (!!photoURL === true) {
            const uploadTask = storage.ref(`user-images/${photoURL.name}`).put(photoURL);
            uploadTask.on('state_changed', snapshot => {
                // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            }, err => {
                console.log(err.message)
            }, () => {
                //getting product url and if success then storing the product in db
                storage.ref('user-images').child(photoURL.name).getDownloadURL().then(url => {
                    this.props.firebase.user(this.props.authUser.uid).update({
                        username: username,
                        phoneNumber: phoneNumber,
                        identityCard: identityCard,
                        photoURL: url
                    }).then(() => {
                        window.location.reload()
                    })
                })
            })
        } else {
            this.props.firebase.user(this.props.authUser.uid).update({
                username: username,
                phoneNumber: phoneNumber,
                identityCard: identityCard
            }).then(() => {
                window.location.reload()
            })
        }
    }


    componentDidMount() {
        this.props.firebase.user(this.props.authUser.uid).once('value').then(res => {
            this.setState({
                username: res.val().username,
                phoneNumber: res.val().phoneNumber,
                email: res.val().email,
                identityCard: res.val().identityCard,
                photoURL1: res.val().photoURL
            })
        })
    }
    render() {
        return (
            <>
                <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                    {/*begin::Subheader*/}
                    {/*begin::Entry*/}
                    <div className="d-flex flex-column-fluid">
                        {/*begin::Container*/}
                        <div className="container">
                            {/*begin::Profile Personal Information*/}
                            <div className="d-flex flex-row">
                                {/*begin::Content*/}
                                <div className="flex-row-fluid ml-lg-8">
                                    {/*begin::Card*/}
                                    <div className="card card-custom card-stretch">
                                        {/*begin::Header*/}
                                        <div className="card-header py-3">
                                            <div className="card-title align-items-start flex-column">
                                                <h3 className="card-label font-weight-bolder text-dark">Personal Information</h3>
                                                <span className="text-muted font-weight-bold font-size-sm mt-1">Update your personal informaiton</span>
                                            </div>
                                            <div className="card-toolbar">
                                                <button form='my-form' type="submit" className="btn btn-success mr-2" >Save Changes</button>
                                                <button type="reset" className="btn btn-secondary">Cancel</button>
                                            </div>
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Form*/}
                                        <form className="form" id='my-form' onSubmit={(e) => this.onSubmit(e)}>

                                            {/*begin::Body*/}
                                            <div className="card-body">
                                                <div className="row">
                                                    <label className="col-xl-3" />
                                                    <div className="col-lg-9 col-xl-6">
                                                        <h5 className="font-weight-bold mb-6">Customer Info</h5>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-lg-3 col-form-label">Avatar</label>
                                                    <div className="col-lg-9 col-xl-6">
                                                        <div className="image-input image-input-outline" id="kt_profile_avatar" style={{ "backgroundImage": `url(assets/media/users/blank.png)` }}>
                                                            <div className="image-input-wrapper" style={{ "backgroundImage": `url(${this.state.photoURL1})` }} />
                                                            <label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" data-original-title="Change avatar">
                                                                <i className="fas fa-pen" />
                                                                <input type="file" name="photoURL" accept=".png, .jpg, .jpeg" onChange={this.imgHandler} />
                                                                <input type="hidden" name="profile_avatar_remove" />
                                                            </label>
                                                            {/* <span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
                                                                <i className="ki ki-bold-close icon-xs text-muted" />
                                                            </span>
                                                            <span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="remove" data-toggle="tooltip" title="Remove avatar">
                                                                <i className="ki ki-bold-close icon-xs text-muted" />
                                                            </span> */}
                                                        </div>
                                                        <span className="form-text text-muted">Allowed file types: png, jpg, jpeg.</span>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-lg-3 col-form-label">Full Name</label>
                                                    <div className="col-lg-9 col-xl-6">
                                                        <input className="form-control form-control-lg form-control-solid" type="text" name="username" value={this.state.username} onChange={this.isChange} />
                                                    </div>
                                                </div>
                                                {/* <div className="form-group row">
                                                    <label className="col-xl-3 col-lg-3 col-form-label">Company Name</label>
                                                    <div className="col-lg-9 col-xl-6">
                                                        <input className="form-control form-control-lg form-control-solid" type="text" defaultValue="Loop Inc." />
                                                        <span className="form-text text-muted">If you want your invoices addressed to a company. Leave blank to use your full name.</span>
                                                    </div>
                                                </div> */}
                                                {/* <div className="row">
                                                    <label className="col-xl-3" />
                                                    <div className="col-lg-9 col-xl-6">
                                                        <h5 className="font-weight-bold mt-10 mb-6">Contact Info</h5>
                                                    </div>
                                                </div> */}
                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-lg-3 col-form-label">Email Address</label>
                                                    <div className="col-lg-9 col-xl-6">
                                                        <div className="input-group input-group-lg input-group-solid">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="la la-at" />
                                                                </span>
                                                            </div>
                                                            <input type="text" className="form-control form-control-lg form-control-solid" name="email" defaultValue={this.state.email} placeholder="Email" disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-lg-3 col-form-label">Contact Phone</label>
                                                    <div className="col-lg-9 col-xl-6">
                                                        <div className="input-group input-group-lg input-group-solid">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="la la-phone" />
                                                                </span>
                                                            </div>
                                                            <input type="text" className="form-control form-control-lg form-control-solid" name="phoneNumber" value={this.state.phoneNumber} onChange={this.isChange} placeholder="Phone Number" />
                                                        </div>
                                                        {/* <span className="form-text text-muted">We'll never share your email with anyone else.</span> */}
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-lg-3 col-form-label">Identity Card</label>
                                                    <div className="col-lg-9 col-xl-6">
                                                        <div className="input-group input-group-lg input-group-solid">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fas fa-id-card" />
                                                                </span>
                                                            </div>
                                                            <input type="text" className="form-control form-control-lg form-control-solid" name="identityCard" value={this.state.identityCard} onChange={this.isChange} placeholder="Identity Card" />
                                                        </div>
                                                        {/* <span className="form-text text-muted">We'll never share your email with anyone else.</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end::Body */}

                                        </form>
                                        {/*end::Form*/}
                                    </div>
                                </div>
                                {/*end::Content*/}
                            </div>
                            {/*end::Profile Personal Information*/}
                        </div>
                        {/*end::Container*/}
                    </div>
                    {/* end::Entry */}
                </div>
                {/*end::Content*/}
            </>
        );
    }
}
const ProfilePage = withFirebase(ProfileBase);
const condition = authUser => !!authUser;

export default compose(withAuthorization(condition))(Profile)
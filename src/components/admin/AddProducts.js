import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { dbstore, storage } from '../Firebase/firebase';
// import { withFirebase } from './../../../components/Firebase';
export const AddProducts = () => {
    let history = useHistory();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');


    const types = ['image/png', 'image/jpeg'];

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('');
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type png or jpeg');
        }
    }

    //add product
    const addProduct = (e) => {
        e.preventDefault();
        //storing the image
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', () => {
            // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log(progress);
           
        }, err => {
            setError(err.message)
        },() => {
            storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                dbstore.collection('Products').add({
                    ProductName: productName,
                    ProductPrice: Number(productPrice),
                    ProductImg: url
                }).then(() => {
                    setProductName('');
                    setProductPrice(0);
                    setProductImg('');
                    setError('');
                    setSuccessMsg('add successfuly!');
                    document.getElementById('file').value = '';
                }).catch(err => setError(error.message));
            })
        }
        )
    }
    const cancel = () => {
        history.push('/productmanager');
    }

    return (
        <div>

            <div className="d-flex flex-row">
                <div className="flex-row-fluid ml-lg-8">
                    <div className="card card-custom card-stretch">
                        <div className="card-header py-3">
                            <div className="card-title align-items-start flex-column">
                                <h3 className="card-label font-weight-bolder text-dark">Add Products</h3>
                                <span className="text-muted font-weight-bold font-size-sm mt-1">Update Product Informaiton</span>
                                {successMsg && <div className='success-msg'>{successMsg}</div>}
                            </div>
                        </div>
                        <form className="form" autoComplete="off" onSubmit={addProduct}>
                            <div className="card-body">
                                <div className="form-group row">
                                    <label className="col-xl-3 col-lg-3 col-form-label">Product Name</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input className="form-control form-control-lg form-control-solid" type="text" required
                                            onChange={(e) => setProductName(e.target.value)} value={productName} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-xl-3 col-lg-3 col-form-label">Product Price</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input className="form-control form-control-lg form-control-solid" type="text" required
                                            onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                                    </div>
                                </div>
                                {/* <div className="form-group row">
                                    <label className="col-xl-3 col-lg-3 col-form-label">Types</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input className="form-control form-control-lg form-control-solid" type="text" value="Loop Inc." />
                                        <span className="form-text text-muted">If you want your invoices addressed to a company. Leave blank to use your full name.</span>
                                    </div>
                                </div> */}
                                <div className="form-group row">
                                    <label className="col-xl-3 col-lg-3 col-form-label">Product Image</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <div className="image-input image-input-outline" id="kt_profile_avatar">
                                            {/* <div className="image-input-wrapper"></div> */}

                                            {/* <label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title="" data-original-title="Change Product Image">
                                                <i className="fas fa-times"></i>
                                               
                                                <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                                                <input type="hidden" name="profile_avatar_remove" />
                                            </label> */}
                                            <input type="file" className='form-control' onChange={productImgHandler} id='file' />
                                            {/* <span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
                                                <i className="ki ki-bold-close icon-xs text-muted"></i>
                                            </span>
                                            <span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="remove" data-toggle="tooltip" title="Remove avatar">
                                                <i className="ki ki-bold-close icon-xs text-muted"></i>
                                            </span> */}
                                        </div>
                                        <span className="form-text text-muted">Allowed file types: png, jpg, jpeg.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-header py-3">
                                <div className="card-toolbar">
                                    <button type="submit" className="btn btn-info mr-2">Save Changes</button>
                                    <button type="reset" onClick={cancel} className="btn btn-secondary">Cancel</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddProducts
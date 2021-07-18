import React, { useContext } from 'react'
import { ProductsContext } from './../../global/ProductsContext'
import { dbstore } from './../Firebase/firebase'
import { Link } from 'react-router-dom';

export const ProductAdmin = () => {
    const { products } = useContext(ProductsContext);
    // console.log(products);

    const onChangeDelete = (id) => {
        dbstore.collection('Products').doc(id).delete().then(() => {
            window.location.reload()
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    const photo = {
        height: "100px",
        width: "100px"
    }
    return (
        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
            <div className="d-flex flex-column-fluid">
                <div className="container">
                    <div className="card card-custom">
                        <div className="card-header flex-wrap py-5">
                            <div className="card-title">
                                <h3 className="card-label">List Product
                                    {/* <div className="text-muted pt-2 font-size-sm">custom colu rendering</div> */}
                                </h3>
                            </div>
                            <div className="card-toolbar">
                                <Link to="/addproducts" className="btn btn-primary font-weight-bolder">
                                    <span className="svg-icon svg-icon-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect x="0" y="0" width="24" height="24" />
                                                <circle fill="#000000" cx="9" cy="15" r="6" />
                                                <path d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z" fill="#000000" opacity="0.3" />
                                            </g>
                                        </svg>
                                    </span>Add Product
                                </Link>
                            </div>
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
                            <table className="table table-bordered table-hover table-checkable" >
                                <thead >
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Image</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {products.length === 0 && <span>slow internet...no products to display</span>} */}
                                    {products.map(product => (
                                                    <tr key={product.ProductID}>
                                                        <td> {product.ProductName} </td>
                                                        <td> {product.ProductPrice}</td>
                                                        <td> <img src={product.ProductImg} alt="" style={photo} /></td>
                                                        <td>
                                                            <Link to={`/editproduct/${product.ProductID}`} className="btn btn-light-info font-weight-bold mr-2">Update</Link>
                                                            <button type="button" onClick={onChangeDelete.bind(this, product.ProductID)} className="btn btn-light-info font-weight-bold mr-2">Delete</button>
                                                            {/* <button type="button" onClick={() => this.viewProduct(product.id)} className="btn btn-light-info font-weight-bold mr-2">View</button> */}
                                                        </td>
                                                    </tr>
                                            ))
                                        }
                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        // <div>
        //     <div className='products-container'>
        //         {products.length === 0 && <div>slow internet...no products to display</div>}
        //         {products.map(product => (
        //             <div className='product-card' key={product.ProductID}>
        //                 <div className='product-img'>
        //                     <img src={product.ProductImg} alt="not found" />
        //                 </div>
        //                 <div className='product-name'>
        //                     {product.ProductName}
        //                 </div>
        //                 <div className='product-price'>
        //                     Price {product.ProductPrice}.00 $
        //                 </div>
        //                 <div>
        //                 <Link to={`/editproduct/${product.ProductID}`} className="btn btn-success">Edit</Link>&nbsp;
        //                 <button onClick={onChangeDelete.bind(this, product.ProductID)} className="btn btn-danger">Delete</button>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    )
}

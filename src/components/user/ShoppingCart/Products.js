import React, { useContext } from 'react'
import { ProductsContext } from '../../../global/ProductsContext'
import { CartContext } from '../../../global/CartContext';
import './product.css'
export const Products = () => {
    const { products } = useContext(ProductsContext);
    const { dispatch } = useContext(CartContext);
    return (
        <>
            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                <div className="d-flex flex-column-fluid">
                    <div className="container">
                        <div className="d-flex flex-row">
                            <div className="flex-row-fluid ml-lg-12">
                                <div className="card card-custom card-stretch gutter-b">
                                    <div className="card-body">
                                        <div className="card card-custom gutter-b">
                                            <div className="card-body rounded p-0 d-flex bg-light">
                                                <div className="d-flex flex-column flex-lg-row-auto w-auto w-lg-350px w-xl-450px w-xxl-650px py-10 py-md-14 px-10 px-md-20 pr-lg-0">
                                                    <h1 className="font-weight-bolder text-dark mb-0">Search Foods</h1>
                                                    <div className="font-size-h4 mb-8">Tìm kiếm nhanh</div>
                                                    <form className="d-flex flex-center py-2 px-6 bg-white rounded">
                                                        <span className="svg-icon svg-icon-lg svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <rect x="0" y="0" width="24" height="24" />
                                                                    <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                    <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <input type="text" className="form-control border-0 font-weight-bold pl-2" placeholder="Search Foods" />
                                                    </form>
                                                </div>
                                                <div className="d-none d-md-flex flex-row-fluid bgi-no-repeat bgi-position-y-center bgi-position-x-left bgi-size-cover" style={{ "background-image ": "url(./assets/media/svg/illustrations/copy.svg)" }}></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 col-lg-12 col-xxl-8">
                                                <div className="card card-custom card-stretch card-stretch-half gutter-b overflow-hidden">
                                                    <div className="card-body p-0 d-flex rounded bg-light-info">
                                                        <div className="py-18 px-12">
                                                            <h3 className="font-size-h1">
                                                                <a href="!#" className="text-dark font-weight-bolder">Huế</a>
                                                            </h3>
                                                            <div className="font-size-h4 text-primary">Get Amazing</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card card-custom card-stretch card-stretch-half gutter-b overflow-hidden">
                                                    <div className="card-body p-0 d-flex rounded bg-light-info">
                                                        <div className="py-18 px-12">
                                                            <h3 className="font-size-h1">
                                                                <a href="!#" className="text-dark font-weight-bolder">Đà Nẵng</a>
                                                            </h3>
                                                            <div className="font-size-h4 text-primary">Get Amazing</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-lg-12 col-xxl-4">
                                                <div className="card card-custom card-stretch gutter-b">
                                                    <div className="card-body d-flex flex-column rounded bg-light-info justify-content-between">
                                                        <div className="rounded text-center mb-7 pt-7">
                                                            <img src="assets/media/products/14.png" className="mw-100 w-200px" alt="anh" style={{ "transform": "scale(1.4)" }} />
                                                        </div>
                                                        <div className="text-center">
                                                            <h3 className="font-size-h1">
                                                                <a href="!#" className="text-dark font-weight-bolder">Kanken</a>
                                                            </h3>
                                                            <div className="font-size-h4 text-primary">Amazing Backpack</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {products.length !== 0 && <h1>Sản Phẩm</h1>}
                                        <div className="row product-list">
                                        {products.length === 0 && <div>slow internet...no products to display</div>}
                                            {products.map(product => (
                                            <div className="col-md-4" key={product.ProductID}>
                                                <section className="panel">
                                                    <div className="pro-img-box">
                                                        <img src={product.ProductImg} alt="" />
                                                        <button className="adtocart">
                                                            <i className="fa fa-shopping-cart" onClick={() => { dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product }) }} />
                                                        </button>
                                                    </div>
                                                    <div className="panel-body text-center">
                                                        <h4>
                                                            <a href="!#" className="pro-title">
                                                            {product.ProductName}
                                                            </a>
                                                        </h4>
                                                        <p className="price">{product.ProductPrice}đ</p>
                                                    </div>
                                                </section>
                                            </div>
                                            ))}
                                        </div>
                                        {/* <div className="row">
                                            {products.length === 0 && <div>slow internet...no products to display</div>}
                                            {products.map(product => (
                                                <div className="col-md-4 col-lg-12 col-xxl-4" key={product.ProductID}>
                                                    <div className="card card-custom gutter-b card-stretch">
                                                        <div className="card-body d-flex flex-column rounded bg-light justify-content-between" >
                                                            <div className="text-center rounded mb-7">
                                                                <img src={product.ProductImg} className="mw-100 w-200px" alt="products" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-size-h5">
                                                                    <a href="!#" className="text-dark-75 font-weight-bolder">{product.ProductName}</a>
                                                                </h4>
                                                                <div className="font-size-h6 text-info font-weight-bolder">{product.ProductPrice}đ</div>
                                                                <button className='btn btn-info font-size-h6 font-weight-bolder' onClick={() => { dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product }) }} >Thêm vào giỏ</button>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            ))}
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}








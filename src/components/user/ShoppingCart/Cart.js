import React, { useContext } from 'react'
import { CartContext } from '../../../global/CartContext'
import { Icon } from 'react-icons-kit'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { Link } from 'react-router-dom'
import { compose } from 'recompose';
import { withAuthorization } from '../../Session';
import '../../../index.css'
const Cart = () => {
    const { shoppingCart, dispatch, totalPrice } = useContext(CartContext);
    return (
        <div>
            <>
                <div class="d-flex flex-row">
                    <div className="flex-row-fluid ml-lg-8">
                        {shoppingCart.length !== 0}
                        <div className="card card-custom gutter-b">
                            <div className="card-header flex-wrap border-0 pt-6 pb-0">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label font-weight-bolder font-size-h3 text-dark">Giỏ Hàng Của Bạn</span>
                                </h3>
                                <div className="card-toolbar">
                                    <div className="dropdown dropdown-inline">
                                        <Link to='/products' className="btn btn-info font-weight-bolder font-size-sm">
                                            Tiếp tục mua sắm
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Sản Phẩm</th>
                                                <th className="text-center">S/Lượng</th>
                                                <th className="text-center">Số Tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {shoppingCart && shoppingCart.map(cart => (
                                                <tr key={cart.ProductID}>
                                                    <td className="d-flex align-items-center font-weight-bolder">
                                                        <div className="symbol symbol-60 flex-shrink-0 mr-4">
                                                            <img src={cart.ProductImg} className="symbol-label" alt="not found" />
                                                            <a href="!#" className="text-dark text-hover-primary">{cart.ProductName}</a>
                                                        </div>

                                                    </td>
                                                    <td className="text-center align-middle">
                                                        <button className="btn btn-xs btn-light-info btn-icon" onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                                            <i className="ki ki-plus icon-xs"></i>
                                                        </button>
                                                        <div className="font-weight-bolder">
                                                            <span >{cart.qty}</span>
                                                        </div>
                                                        <button className="btn btn-xs btn-light-info btn-icon" onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                                            <i className="ki ki-minus icon-xs"></i>
                                                        </button>
                                                    </td>
                                                    <td className="text-center align-middle font-weight-bolder font-size-h5">
                                                        {cart.TotalProductPrice}đ

                                                    </td>
                                                    <td className="text-right align-middle">
                                                        <button className="btn btn-info font-weight-bolder font-size-sm" onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                                            <Icon icon={iosTrashOutline} size={20} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                            }
                                            {shoppingCart.length > 0 &&
                                                <tr>
                                                    <td colSpan="2"></td>
                                                    <td className="font-weight-bolder font-size-h4 text-right">Tổng tiền:</td>
                                                    <td className="font-weight-bolder font-size-h4 text-right">{totalPrice}đ</td>
                                                </tr>
                                            }
                                            {
                                                shoppingCart.length === 0 && <>
                                                    <div className="">
                                                        <div className="d-flex align-items-center font-weight-bolder">
                                                            <div className='text-center'>Giỏ Hàng Của Bạn Còn Trống</div>
                                                        </div>
                                                        <Link to="/products" className="align-items-center ">
                                                            <div className="btn btn-outline-info">Trở lại để mua hàng</div>
                                                        </Link>
                                                    </div>
                                                </>
                                            }
                                            <tr>
                                                <td colspan="4" className="border-0 text-muted text-right pt-0">Chưa tính thuế</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" className="border-0 pt-10">
                                                    <form>
                                                        <div className="form-group row">
                                                            <div className="col-md-2 d-flex align-items-center">
                                                                <label className="font-weight-bolder">Apply Voucher</label>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="input-group w-100">
                                                                    <input type="text" className="form-control" placeholder="Voucher Code" />
                                                                    <div className="input-group-append">
                                                                        <button className="btn btn-secondary" type="button">Apply</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>

                                                </td>
                                                <td colspan="2" className="border-0 text-right pt-18">
                                                    <Link to='/cashout' className="btn btn-info font-weight-bolder px-8">
                                                        Checkout
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div >
    )
}
const condition = authUser => !!authUser;

export default compose(withAuthorization(condition))(Cart);



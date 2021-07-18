import React, { Component } from 'react'
import {connect} from 'react-redux'
class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            quantity: '',
            image: '',
            location: '',
            description: ''
        }
        this.isChange = this.isChange.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    saveOrUpdateProduct = (name, price,quantity,image,location,description) =>{
        var item={}
        item.name = name;
        item.price = price;
        item.quantity = quantity;
        item.image = image;
        item.location = location;
        item.description = description;
        console.log(item);
        // this.props.getData(item);
        this.props.addDataStore(item);
    }
    cancel() {
        this.props.history.push('/products');
    }

    getTitle() {
        // if (this.state.id === undefined) {
            return <h3 className="text-center">Add Product</h3>
        // } else {
        //     return <h3 className="text-center">Update Product</h3>
        // }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Product Name: </label>
                                        <input placeholder="Product Name" name="name" className="form-control"
                                            value={this.state.name} onChange={(event)=>this.isChange(event)} />
                                    </div>
                                    <div className="form-group">
                                        <label> Product Price: </label>
                                        <input placeholder="Product Price" name="price" className="form-control"
                                            value={this.state.price} onChange={(event)=>this.isChange(event)} />
                                    </div>
                                    <div className="form-group">
                                        <label> Quantity: </label>
                                        <input placeholder="Quantity" name="quantity" className="form-control"
                                            value={this.state.quantity} onChange={(event)=>this.isChange(event)} />
                                    </div>
                                    <div className="form-group">
                                        <label> Product Image: </label>
                                        <input placeholder="Product Image" name="image" className="form-control"
                                            value={this.state.image} onChange={(event)=>this.isChange(event)} />
                                    </div>
                                    <div className="form-group">
                                        <label> Location: </label>
                                        <input placeholder="Location" name="location" className="form-control"
                                            value={this.state.location} onChange={(event)=>this.isChange(event)} />
                                    </div>
                                    <div className="form-group">
                                        <label> Description: </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                            value={this.state.description} onChange={(event)=>this.isChange(event)} />
                                    </div>

                                    <button className="btn btn-success" onClick={()=>this.saveOrUpdateProduct(this.state.name, this.state.price,this.state.quantity,this.state.image,this.state.location,this.state.description)}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (payload) => {
            dispatch({ type: "ADD_PRODUCT", payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProductComponent)
// import React, { Component } from 'react'
// import ProductService from '../services/ProductService'

// class ViewUserComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             productName: '',
//             productPrice: '',
//             quantity: '',
//             productImage: '',
//             location: '',
//             createDate:'',
//             productDescription: ''
//         }
//     }

//     componentDidMount() {
//         ProductService.getProductById(this.state.id).then((res) => {
//             let product = res.data;
//             this.setState({
//                 productName: product.productName,
//                 productPrice: product.productPrice,
//                 quantity: product.quantity,
//                 productImage: product.productImage,
//                 location: product.location,
//                 createDate: product.createDate,
//                 productDescription: product.productDescription
//             });
//         });
//     }
//     back() {
//         this.props.history.push('/products');
//     }

//     render() {
//         const photo = {
//             height: "100px",
//             width: "100px"
//         }
//         return (
//             <div>
//                 <br></br>
//                 <div class="card col-md-6 offset-md-3">
//                     <div class="card-header">
//                         <h3 className="text-center">View Product Details</h3>
//                     </div>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Product Name: {this.state.productName}</li>
//                         <li class="list-group-item">Price: {this.state.productPrice}</li>
//                         <li class="list-group-item">Quantity: {this.state.quantity}</li>
//                         <li class="list-group-item">Image: <img src={this.state.productImage} alt="" style={photo}/></li>
//                         <li class="list-group-item">Location: {this.state.location}</li>
//                         <li class="list-group-item">Create Date: {this.state.createDate}</li>
//                         <li class="list-group-item">Description: {this.state.productDescription}</li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ViewUserComponent
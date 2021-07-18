import { withFirebase } from '../Firebase';
var redux = require('redux');
const noteInitialState = {
    isEdit: false
}

const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {

        case "ADD_PRODUCT":
            this.props.firebase.productData().push(action.payload);
            console.log('them du lieu ' + JSON.stringify(action.payload) + ' thanh cong')
            return state
        case "ADD_USER":
            this.props.firebase.users().push(action.payload);
            console.log('them du lieu ' + JSON.stringify(action.payload) + ' thanh cong')
            return state
        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit }
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default withFirebase(store);


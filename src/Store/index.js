import { createStore } from "redux";
import RootReducer from "./Reducers/RootReducer";

const store = createStore(RootReducer);

export default store;

// Store 
//      Action
//          Reducer 

// React Components 
//          Child Components 
//             Child Components 

// React-Redux Connect 
//     Provider Component 
//           Store
//              App Componet 

// If we need Data 
// mapStateToProps(state) return Object

// If we wan to dispatch some acton 
// mapDispatchToProps(dispatch) return object

// Connect(mapStateToProps, mapDispatchToProps) (Component)
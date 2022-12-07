import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import categoryProductReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import saveProductReducer from "./saveProductReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  categoryProductReducer,
  cartReducer,
  saveProductReducer,
});

export default rootReducer;

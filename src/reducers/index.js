import petCounter from "./petCounter";
import petFavorite from "./petFavorite";
import { combineReducers } from "redux";

const reducers = combineReducers({
  petCounter,
  petFavorite,
});

export default reducers;

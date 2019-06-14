import FoodReducer from "./food-reducer";
import UserReducer from "./user-reducer";
import ActiveFoodReducer from "./active-food-reducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    foods:FoodReducer,
    users:UserReducer,
    activeFood:ActiveFoodReducer
})

export default allReducers;
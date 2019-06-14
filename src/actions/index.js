import { SELECT_FOOD } from "./actionTypes";

export const selectFood = food =>{
    console.log(food.value);
    return {
        type: SELECT_FOOD,
        payload: food
    }
}
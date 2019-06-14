import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFood} from '../actions/index';

class FoodList extends React.Component {
    createFoodListItems(){
        return this.props.foods.map(e =>{ 
            return (
                <li key={e.id} onClick ={
                    ()=> {
                        this.props.selectFood(e)
                    }
                }>Food's name: {e.value}</li>
            );
        });
    }
    render(){
        return(
            <ul>
                {this.createFoodListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
        foods:state.foods
    };
} 

function mapDispatchToProps(dispatch){ 
    return bindActionCreators({selectFood: selectFood},dispatch);
}

let FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);

export default FoodContainer;
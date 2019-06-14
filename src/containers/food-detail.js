import React from 'react';
import {connect} from 'react-redux';

class FoodDetail extends React.Component{
    render(){
        if(!this.props.activeFood){
            return (<h2>Select a food</h2>)
        }
        else
        return (
            <div>id: {this.props.activeFood.id}
            <br/>value: {this.props.activeFood.value}

            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        activeFood:state.activeFood
    };
} 

let FoodDetailContainer = connect(mapStateToProps)(FoodDetail);

export default FoodDetailContainer;
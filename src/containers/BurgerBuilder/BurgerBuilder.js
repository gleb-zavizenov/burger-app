import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{

    state = {
        indgredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        }
    }

    render() {
        return(
            <div>
                <Burger ingredients={this.state.indgredients}/>
                <BuildControls/>
            </div>
        );
    }
}

export default BurgerBuilder;
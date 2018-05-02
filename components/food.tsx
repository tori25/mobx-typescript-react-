import * as React from 'react';
import { observer } from 'mobx-react';
import { FOOD_TYPES } from '../main/Constants';
import Square from './Square';
// import '../App.css';

interface IFoodProps {
    dimensions: any,
    position: any,
    type: number
}

@observer
export default class Food extends React.Component<IFoodProps, any> {
    constructor(props: IFoodProps){
        super(props);
    }
    render() {
        const { dimensions, position, type } = this.props;

        return (
            <Square
                dimensions={dimensions}
                key={`snake-cell-food`}
                left={position[0]}
                top={position[1]}
                type={type === FOOD_TYPES.POISON ? 'poison-cell food' : 'fruit-cell food'}
            />
        )
    }
}


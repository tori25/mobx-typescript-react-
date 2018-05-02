import * as React from 'react';
import { observer } from 'mobx-react';
import Field from './Field';
import Food from './Food';
import ScreenGameZone from './ScreenGameZone';
import Snake from './Snake';

interface IAppProps {
    field: any,
    food: any,
    running: boolean,
    snakePosition: Array<number>,
    snakeSpeed: number,
    appState: object
}

@observer
export default class App extends React.Component {
    render() {
        const { field, fieldHeight, food, running, snakePosition, snakeSpeed } = this.props.appState;

        return (
            <div>
                {running && <Field dimensions={field}/>}
                {food && <Food dimensions={field.square} position={food.position} type={food.type}/>}
                {snakePosition && <Snake dimensions={field.square} position={snakePosition} speed={snakeSpeed}/>}
                <ScreenGameZone fieldHeight={fieldHeight}/>
            </div>
        )
    }
}




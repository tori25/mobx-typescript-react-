import * as React from 'react';
import { observer } from 'mobx-react'
import Square from './Square'
import '../App.css';

export interface ISquareProps{
    dimensions: any,
    position: any,
    speed: number
}
@observer
export default class Snake extends React.Component<ISquareProps, {}> {
    constructor(props: ISquareProps) {
        super(props);
    }

    public render() {
        const {dimensions, position, speed} = this.props;
        const cells = position.map((cell, index) => {
            return <Square
                dimensions={dimensions}
                key={`snake-cell-${index}`}
                left={cell[0]}
                speed={speed * 2}
                top={cell[1]}
                type="snake"
            />
        });

        return <div>{cells}</div>
    }
}


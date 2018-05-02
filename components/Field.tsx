import * as  React from 'react';
import '../theme/Field.scss'

interface IFieldProps{
    dimensions: any;
}

export default class Field extends React.Component<IFieldProps, any> {
    render() {
        const { board, square } = this.props.dimensions
        const style = {
            height: `${board.rows * square.height}px`,
            width: `${board.cols * square.width}%`
        }

        return (
            <div className="field" style={style}/>
        )
    }
}
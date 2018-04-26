import * as  React from 'react'
import { observer } from 'mobx-react'
import '../theme/Square.scss'

interface ISquareProps{
    dimensions: any,
    left: number,
    top: number,
    type: string,
    speed?: number
}

@observer
export default class Square extends React.Component<ISquareProps, any> {

    constructor(props: ISquareProps){
        super(props);
    }

    render() {
        const {dimensions, left, top, type, speed} = this.props;
        let style = {
            height: `${dimensions.height}px`,
            left: `${left * dimensions.width}%`,
            top: `${top * dimensions.height}px`,
            width: `${dimensions.width}%`
        }
        if (speed) {
            style = {
                ...style,
                // transition: `${speed}ms`
            }
        }

        return (
            <div className={`square ${type}-cell`} style={style}/>
        )
    }
}




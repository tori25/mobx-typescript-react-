import * as React from 'react'
import '../theme/ScreenGameZone.scss'

 export interface IScreenGameZone{
    fieldHeight: number;

}
export default class ScreenGameZone extends React.Component<IScreenGameZone, {}>{
    constructor(props: IScreenGameZone){
        super(props);
    }
    public render() {
        const { fieldHeight } = this.props;
        const bottomStyle = { bottom: `calc(100vh - ${fieldHeight}` };

        return (
            <div>
                <div className="gameplay-zone-left"/>
                <div className="gameplay-zone-top"/>
                <div className="gameplay-zone-right"/>
                <div className="gameplay-zone-bottom" style={bottomStyle}/>
            </div>
        )
    }
}


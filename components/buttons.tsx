import * as React from 'react';
import {FaAngleDown, FaAngleLeft,FaAngleRight, FaAngleUp} from 'react-icons/lib/fa';
import '.././App.css';

class Buttons extends React.Component {
    constructor (props: any){
        super(props);
    }

    public onKeyDown (event: any):void{
            console.log('click down');
    }

    public render() {

        return (<div>
                <div className="iconsContainer">
                    <button className="btn btn-up"><FaAngleUp /></button>
                    <button className="btn btn-down" onClick={this.onKeyDown}><FaAngleDown /></button>
                    <button className="btn btn-left"><FaAngleLeft /></button>
                    <button className="btn btn-right"><FaAngleRight /></button>
                </div>
                {/*<button className="btn btn-start">Start</button>*/}
            </div>


        );
    }
}

export default Buttons;

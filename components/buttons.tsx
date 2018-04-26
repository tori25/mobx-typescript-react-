import * as React from 'react';
import {FaAngleDown, FaAngleLeft,FaAngleRight, FaAngleUp} from 'react-icons/lib/fa';
import '.././App.css';

class Buttons extends React.Component {
    constructor (props: any){
        super(props);
    }
    public handleOnMove(event: any):void {
        // this.setState({
        // console.log("kgjfghi");
        // })
    }


    public render() {

        return (<div>
                <div className="iconsContainer">
                    <button className="btn btn-up"><FaAngleUp /></button>
                    <button className="btn btn-down"><FaAngleDown /></button>
                    <button className="btn btn-left"><FaAngleLeft /></button>
                    <button className="btn btn-right"><FaAngleRight /></button>
                </div>
                <button className="btn btn-start">Start</button>
            </div>


        );
    }
}

export default Buttons;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Field from './components/Field';
import ScreenGameZone from './components/ScreenGameZone';
import Food from './components/food';
import Snake from './components/snake';

interface IAppProps {
    field: any,
    food: any,
    running: boolean,
    snakePosition: Array<number>,
    snakeSpeed: number,
    appState: object
}

class AppState {
        @observable timer = 0;

        constructor() {
            setInterval(() => {
                this.timer += 1;
            }, 1000);
        }

        resetTimer() {
            this.timer = 0;
        }
    }


@observer
export default class App extends React.Component<{appState: AppState}, {}> {
        render() {
            return (
                <div>
                    //to write logic block from App.js
                </div>
            //     {/*<div className="container">*/}
            //         {/*/!*<Food />*!/*/}
            //         {/*/!*<Snake />*!/*/}
            //         {/*/!*<Buttons />*!/*/}
            //         {/*<button className="btn btn-start">Start</button>*/}
            //         {/*<button className="btn btn-start" onClick={this.onReset}>*/}
            //             {/*Start: {this.props.appState.timer}*/}
            //         {/*</button>*/}
            //         {/*<DevTools />*/}
            //     {/*</div>*/}
            );
         }

     onReset = () => {
         this.props.appState.resetTimer();
     }
};

const appState = new AppState();
ReactDOM.render(<App appState={appState} />, document.getElementById('root'));

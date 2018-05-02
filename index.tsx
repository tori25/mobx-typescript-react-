import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import './App.css';
import Buttons from './components/buttons';
import Food from './components/food';
import Snake from './components/snake';

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
    class TimerView extends React.Component<{appState: AppState}, {}> {
        render() {
            return (
                <div className="container">
                    <Food />
                    {/*<Snake />*/}
                    <Buttons />
                    <button className="btn btn-start">Start</button>
                    <button className="btn btn-start" onClick={this.onReset}>
                        Start: {this.props.appState.timer}
                    </button>
                    <DevTools />
                </div>
            );
         }

     onReset = () => {
         this.props.appState.resetTimer();
     }
};

const appState = new AppState();
ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));

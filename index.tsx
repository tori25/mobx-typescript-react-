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

//------------------------------------------------------------------------------------------radiostation
type Listener = (songName: string) => void;

//subject
class RadioStation {
    private listeners: Array<Listener> = [];

    constructor() {
        const songs = ['song1', 'song2', 'song3', 'song4', 'song5'];
        let songNumber = 0;

        setInterval(
            () => {
                this.emitSongChange(songs[songNumber % songs.length]);
                songNumber++;
            },
            1000
        );
    }
    onPlaySong(radioListener: Listener) {
        this.listeners.push(radioListener);
        return radioListener;
    }

    emitSongChange(songName: string) {
        this.listeners.forEach((listener) => listener(songName));
    }

    onStopSong(listener: Listener) {
        let index = this.listeners.indexOf(listener);
        this.listeners.splice(index, 1);
    }
}

//observer
class Car {
    private radioStation: RadioStation = null;
    private carName: string;
    private radioListener: Listener;

    constructor(carName: string, radioStation: RadioStation) {
        this.radioStation = radioStation;
        this.carName = carName;
        }

    turnOnRadio() {
        this.radioListener = radioStation.onPlaySong((songName: string) => {
            console.log(`Car: ${this.carName} is playing song: ${songName}`);
        });
    }
    turnOffRadio(){
        this.radioStation.onStopSong(this.radioListener);
        console.log(`Car: ${this.carName} was turned off`);
    }
}

const radioStation = new RadioStation();
const carRadio1 = new Car('lanos', radioStation);
carRadio1.turnOnRadio();

setTimeout(() => {
    carRadio1.turnOffRadio();
}, 3000);
//------------------------------------------------------------------------------------------radiostation

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

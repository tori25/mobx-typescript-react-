import * as React  from 'react';
import { render } from 'react-dom';
import App from './components/App';
import AppState from './main/AppState';

const appState = new AppState();
render(<App appState={appState}/>, document.getElementById('root'));

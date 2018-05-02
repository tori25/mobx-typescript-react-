import {DISPLAYS} from './Constants';

export const  getDimensions = () => {

    let board = {};
    let square = {};

    if (window.innerWidth >= window.innerHeight) {

        board.cols = DISPLAYS.LANDSCAPE_COLS;
        board.rows = DISPLAYS.LANDSCAPE_ROWS;
    }
    else {
        board.cols = DISPLAYS.PORTRAIT_COLS;
        board.rows = DISPLAYS.PORTRAIT_ROWS;
    }
    this.square.height = window.innerWidth / this.board.cols;
    this.square.width = this.square.height / window.innerWidth * 100;

    return { board, square }
};
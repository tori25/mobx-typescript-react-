import {FOOD_TYPES, KEYBOARD_DIRECTION_MAPPER, KEYBOARD_REVERTED_DIRECTION_MAPPER,
        SNAKE_ALLOWED_DIRECTIONS, SNAKE_DIRECTIONS, SNAKE_HEALTHS, SNAKE_OPPOSITE_DIRECTIONS
    } from '../main/Constants';

const { WEST, NORTH, EAST, SOUTH } = SNAKE_DIRECTIONS;

export const generateFood = (field, snakePosition, running) => {
    let position;
    let filteredSnake;
    const type = Math.random() + .25 >= 1 ? FOOD_TYPES.POISON : FOOD_TYPES.FRUIT;

    if (!running) { return false }

    do {
        position = [
            Math.floor(Math.random() * (field.cols - 1)),
            Math.floor(Math.random() * (field.rows - 1))
        ];
        filteredSnake = snakePosition.slice().filter(item => {
            return JSON.stringify(item) !== JSON.stringify(position)
        })
    } while (filteredSnake.length !== snakePosition.length);

    return { position, type }
};

export const getSnakeNextDirection = (props) => {
    const { direction, event } = props;
    const allowedDirections = SNAKE_ALLOWED_DIRECTIONS[direction];

    const requestedDirection = event.changedTouches
        ? getRequestedSnakeDirectionFromTouch(props)
        : getRequestedSnakeDirectionFromKeyCode(props);

    if (allowedDirections.indexOf(requestedDirection) > -1) {
        return requestedDirection
    }
    return false
};

const getRequestedSnakeDirectionFromKeyCode = (props) => {
    const { event: { keyCode }, health } = props;

    if (keyCode < 37 || keyCode > 40) {
        return false
    }

    const mapper = health === SNAKE_HEALTHS.HEALTHY
        ? KEYBOARD_DIRECTION_MAPPER
        : KEYBOARD_REVERTED_DIRECTION_MAPPER;

    return mapper[keyCode]
};

const getRequestedSnakeDirectionFromTouch = (props) => {
    const { direction, event, field, health } = props;
    const { clientX, clientY } = event.changedTouches[0];
    let requestedDirection = false;

    if (direction === WEST || direction === EAST) {
        if (clientY >= field.board.rows * field.square.height * .85) {
            this.requestedDirection = SOUTH
        }
        if (clientY <= field.board.rows * field.square.height * .15) {
            this.requestedDirection = NORTH
        }
    }
    else if (direction === NORTH || direction === SOUTH) {
        if (clientX >= field.board.cols * field.square.height * .85) {
            this.requestedDirection = EAST
        }
        if (clientX <= field.board.cols * field.square.height * .15) {
            this.requestedDirection = WEST
        }
    }

    return health === SNAKE_HEALTHS.HEALTHY
        ? requestedDirection
        : SNAKE_OPPOSITE_DIRECTIONS[this.requestedDirection]
};

export const getSnakeNextPosition = (position, direction) => {
    const head = position[0].slice();

    switch (direction) {
        case WEST:
            head[0] -= 1;
            break;
        case NORTH:
            head[1] -= 1;
            break;
        case EAST:
            head[0] += 1;
            break;
        case SOUTH:
            head[1] += 1;
            break;
    }

    return head
};


export const isSnakeConfused = (health) => {
    return health === SNAKE_HEALTHS.CONFUSED
};
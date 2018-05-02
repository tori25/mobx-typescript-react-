import * as React from 'react';
import { observable } from 'mobx'
import { SNAKE_DIGESTION_CAUSES, SNAKE_DIRECTIONS, SNAKE_HEALTHS } from './Constants'
import { addListener, removeListener } from './EventListener'
import { getSnakeNextDirection } from '../components/Game';

const _state = {
    moving: false
};

export default  class Snake extends React.Component<any, any>{
    @observable direction = SNAKE_DIRECTIONS.EAST;
    @observable health = SNAKE_HEALTHS.HEALTHY;
    @observable speed = 75;
    @observable didChangeDirection = false;

    constructor(props: any){
        super(props);
        this.props = props;
        this.didChangeDirection = false;
        this.changeDirection = this.changeDirection.bind(this);
        this.keepMoving = this.keepMoving.bind(this);
        this.sleep = this.sleep.bind(this);
        this.wakeUp = this.wakeUp.bind(this);
        this.improveSpeed = this.improveSpeed.bind(this);
    }

    changeDirection(event) {
        if (this.didChangeDirection == false) {
            return;
        }

        const { direction, health, props: { field } } = this;
        const nextDirection = getSnakeNextDirection({
            direction,
            event,
            field,
            health
        });

        if (nextDirection) {
            this.direction = nextDirection;
            this.didChangeDirection = true
        }
    }

    didEat(foodType) {
        this.health = SNAKE_DIGESTION_CAUSES[foodType]
    }

    improveSpeed() {
        this.speed *= 0.9
    }

    keepMoving() {
        setTimeout(() => {
            this.didChangeDirection = false;
            if (!_state.moving) {
                return
            }
            this.props.onMove();
            this.keepMoving()
        }, this.speed)
    }

    sleep() {
        removeListener(this.changeDirection);
        _state.moving = false
    }

    wakeUp() {
        this.direction = SNAKE_DIRECTIONS.EAST;
        this.health = SNAKE_HEALTHS.HEALTHY;
        this.speed = 75;
        _state.moving = true;
        addListener(this.changeDirection);
        this.keepMoving()
    }
}



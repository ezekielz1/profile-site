import React from 'react';
import './boxes.css'

import box1 from '../../img/boxes/box-1.svg';
import box2 from '../../img/boxes/box-2.svg';
import box3 from '../../img/boxes/box-3.svg';
import box4 from '../../img/boxes/box-4.svg';
import box5 from '../../img/boxes/box-5.svg';

const box_images = [box1, box2, box3, box4, box5]
const grid_size = [3,3]
const grid = []

for (let x=0; x < grid_size[0]; x++) {
    for (let y=0; y < grid_size[1]; y++) {
        grid.push([x,y])
    }
}

export default class Boxes extends React.Component {

    constructor(props) {
        super(props)

        this.classes = [
            '',
            'boxes--drop-shadow',
            'boxes--invert'
        ]

        this.state = {
            classCycle: 0
        }
    }

    componentDidMount() {
        const boxes = document.querySelectorAll('.boxes__box')
        this.moveBoxes(boxes);
        this.timer = setInterval(()=> {
            this.moveBoxes(boxes);
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    moveBoxes(boxes) {
        const grid_current = [...grid]
        if (this.props.disableCenter && grid_current.length % 2 !== 0) {
            grid_current.splice(Math.floor(grid_current.length/2),1);
        }
        boxes.forEach((box) => {
            let grid_pos = grid_current.splice(Math.floor(Math.random()*grid_current.length),1)[0];
            box.style.transform = `translate(${grid_pos[0]*100}%,${grid_pos[1]*100}%)` //rotate(${Math.floor(Math.random()*2)*90}deg)`
        })
    }

    cycleClasses() {
        this.setState({
            classCycle: ((this.state.classCycle + 1) % this.classes.length)
        })
    }

    render() {
        const boxes = []
        box_images.forEach((image) => {
            boxes.push(
                <img className='boxes__box' src={image} alt='box'/>
            )
        })

        return (
            <div className='boxes-container' onClick={()=>this.cycleClasses()}>
                <div className={`boxes ${this.classes[this.state.classCycle]}`} ref={this.boxContainer}>
                    {boxes}
                </div>
                {this.props.children}
            </div>
        );
    }
}


// your ImageSlider code here!
import React, { Component } from 'react';
export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }


    render() {
        let newState = `I am on slide ${this.state.currentSlideIndex}`
        return (
            <div>{newState}</div>
        )
    }
}
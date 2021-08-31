import React from 'react';
import './Slider.css';

type SliderProps = {
  multiple: boolean,
  min: number,
  max: number,
}

export default ({ multiple, min, max }: SliderProps) => <div className="slider-container">
  <h2>{ multiple }</h2>
  <p> { min } { max } </p>
</div>
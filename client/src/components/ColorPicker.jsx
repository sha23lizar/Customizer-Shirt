import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import {SketchPicker} from "react-color"


const ColorPicker = () => {
  const snap = useSnapshot(state);


  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
      color={snap.color} 
      disableAlpha
      presetColors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]}	
      onChange={(color) => state.color = color.hex} />

    </div>
  )
}

export default ColorPicker
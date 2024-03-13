import React from 'react'
import state from '../store'
import { snapshot, useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'

const CustomButton = ({type,title,customStyles,handleClick, stateBotton: disabledBotton}) => {
    const generateStyle = (type) => {
        if(disabledBotton){
            return {
                backgroundColor:"white",
                color:"grey"
            }
        }

        const snap = useSnapshot(state);
        if (type === "filled") {
            return {
                backgroundColor:snap.color,
                color:getContrastingColor(snap.color)
            }
        } else if (type === "outline") {
            return {
                borderWidth:"1px",
                backgroundColor:getContrastingColor(snap.color),
                borderColor:snap.color,
                color:snap.color
            }
        }
    }
  return (
    <button
    className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    disabled={disabledBotton}
    onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton
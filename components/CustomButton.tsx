"use client"

import { CustomButtonProps } from "@/types/types"



const CustomButton = ({title, handleClick, btnType, containerStyles}: CustomButtonProps) => {
  return (
    <button disabled={false} 
    type={btnType} 
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}>
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton
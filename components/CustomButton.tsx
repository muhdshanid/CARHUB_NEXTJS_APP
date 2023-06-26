"use client"

import { CustomButtonProps } from "@/types/types"
import Image from "next/image"



const CustomButton = ({title,isDisabled, textStyles, rightIcon, handleClick, btnType, containerStyles}: CustomButtonProps) => {
  return (
    <button disabled={isDisabled || false} 
    type={btnType} 
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}>
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {
          rightIcon && (
            <div className="relative w-6 h-6 ">
              <Image src={rightIcon} alt="icon"
              fill className="object-contain"/>
            </div>
          )
        }
    </button>
  )
}

export default CustomButton
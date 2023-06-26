"use client"

import {  CarProps } from '@/types/types'
import { calculateCarRent, generateCarImage } from '@/utils'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { useState } from 'react'
import CarDetails from './CarDetails'

type Props = {
    car: CarProps
}

const CarCard = ({car}: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {city_mpg, year, make, model, transmission, drive} = car
    const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className='car-card group'>
        <div className="car-card__content">
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>$
            </span>
                {carRent}
            <span className='self-start text-[14px] font-medium'>
                /day
            </span>
        </p>
        <div className='relative w-full object-contain h-40 my-3'>

        <Image src={generateCarImage(car)} alt='car' fill priority className='object-contain'/>
        </div>
        <div className="relative w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between
            text-gray">
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src={"/steering-wheel.svg"}
                    width={20} height={20} alt='steering-wheel'/>
                    <p className='text-[14px]'>
                        {
                            transmission === "a" ? "Automatic": "Manual"
                        }
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src={"/tire.svg"}
                    width={20} height={20} alt='tire'/>
                    <p className='text-[14px]'>
                        {drive.toUpperCase()
                        }
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src={"/gas.svg"}
                    width={20} height={20} alt='alt'/>
                    <p className='text-[14px]'>
                        {city_mpg } MPG
                    </p>
                </div>
            </div>
            <div className='car-card__btn-container'>
                <CustomButton title='View More' containerStyles='w-full py-[16px]
                rounded-full bg-primary-blue' rightIcon="/right-arrow.svg"
                handleClick={() => setIsOpen(true)} textStyles="text-white text-[14px]
                leading-[17px] font-bold"/>
            </div>
        </div>
        <CarDetails car={car} closeModel={() => setIsOpen(false)} isOpen={isOpen}/>
    </div>
  )
}

export default CarCard
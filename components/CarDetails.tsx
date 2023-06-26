"use client"

import { CarProps } from '@/types/types'
import { generateCarImage } from '@/utils'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment } from 'react'

type Props = {
    car: CarProps,
    isOpen: boolean,
    closeModel: () => void
}

const CarDetails = ({car, isOpen, closeModel}: Props) => {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={"relative z-10"} onClose={closeModel}>
            <Transition.Child as={Fragment} enter='ease-out duration-300'
            enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200
            ' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25'/>
            </Transition.Child>
            <div className='fixed inset-0 overflow-y-auto '>
                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child as={Fragment} enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100'
             leave='ease-in duration-200
            ' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className={"relative text-left shadow-xl transition-all flex-col flex gap-5 w-full max-w-lg max-h-[90vh] p-6 overflow-y-auto transform rounded-2xl bg-white"}>
                    <button className='absolute top-2 right-2 z-10 w-fit bg-primary-blue-100 p-2 rounded-full ' type='button' onClick={closeModel}>
                        <Image src={"/close.svg"} width={20} height={20} className='object-contain' alt='close'/>
                    </button>
                    <div className='flex-1 flex flex-col gap-3'>
                        <div className='relative bg-pattern bg-cover w-full h-40 bg-center rounded-lg'>
                        <Image src={generateCarImage(car, )} alt='car' fill priority className='object-contain'/>
                        </div>
                        <div className='flex gap-3 '>
                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100
                             rounded-lg'>
                            <Image src={generateCarImage(car, '29')} alt='car' fill priority className='object-contain'/>
                            </div>
                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100
                             rounded-lg'>
                            <Image src={generateCarImage(car, '33')} alt='car' fill priority className='object-contain'/>
                            </div>
                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100
                             rounded-lg'>
                            <Image src={generateCarImage(car, '13')} alt='car' fill priority className='object-contain'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                         <h2 className='font-semibold text-xl capitalize'>
                            {car.make} {car.model}
                         </h2>
                         <div className="mt-3 flex flex-wrap gap-4">
                            {Object.entries(car).map(([key,value]) => <div className='flex justify-between gap-5 w-full text-right'
                            key={key}>
                                <h4 className='text-gray capitalize'>{key.split("_").join(" ")}</h4>
                                <p className='font-semibold text-black/100 '>{value} </p>
                            </div>)}
                         </div>
                    </div>
                </Dialog.Panel>
            </Transition.Child>
                </div>

            </div>
        </Dialog>
    </Transition>
    </>
  )
}

export default CarDetails
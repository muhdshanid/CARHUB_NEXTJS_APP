"use client"

import Image from "next/image"

type Props = {
    otherClasses: string
}

const SearchButton = ({otherClasses}: Props) => {
  return (
    <button type="submit" className={` z-10 ${otherClasses}`}>
        <Image src={"/magnifying-glass.svg"} width={40} height={40}
        alt="search"
        className=" object-contain"/>
    </button>
  )
}

export default SearchButton
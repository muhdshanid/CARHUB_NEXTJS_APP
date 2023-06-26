"use client"

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import SearchButton from "./SearchButton"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { SearchBarProps } from "@/types/types"


const SearchBar = ({setManufacturer, setModel}: SearchBarProps) => {

    const router = useRouter()
    const [searchModel, setSearchModel] = useState<string>("")
    const [searchManufacturer, setSearchManufacturer] = useState<string>("")
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if(searchManufacturer === "" && searchModel === "") {
        return alert("Please fill in the search bar")
      }

      setModel(searchModel)
     setManufacturer(searchManufacturer)
    }
   
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer setManufacturer={setSearchManufacturer} manufacturer={searchManufacturer}
            />
            <SearchButton otherClasses="sm:hidden -ml-8"/>
        </div>
        <div className="seachbar__item flex p-2">
          <Image src={"/model-icon.png"} width={25} height={25}
          alt="searchModel" className="absolute mt-2 w-[20px] h-[20px] ml-4"/>
          <input type="text" value={searchModel} name="searchModel" 
          onChange={(e) => setSearchModel(e.target.value)} placeholder="Tiguan"
          className="searchbar__input"/>
          <SearchButton otherClasses="sm:hidden -ml-6"/>
        </div>
          <SearchButton otherClasses="max-sm:hidden -ml-8"/>
    </form>
  )

}  

export default SearchBar
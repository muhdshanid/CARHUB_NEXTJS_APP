"use client"

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import SearchButton from "./SearchButton"
import Image from "next/image"
import { useRouter } from "next/navigation"


const SearchBar = () => {

    const router = useRouter()
    const [model, setModel] = useState<string>("")
    const [manufacturer, setManufacturer] = useState<string>("")
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if(manufacturer === "" && model === "") {
        return alert("Please fill in the search bar")
      }

      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }
    const updateSearchParams = (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search)

      if(model){
        searchParams.set("model",model)
      }else{
        searchParams.delete("model")
      }

      if(manufacturer){
        searchParams.set("manufacturer",manufacturer)
      }else{
        searchParams.delete("manufacturer")
      }

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathName)
    }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer setManufacturer={setManufacturer} manufacturer={manufacturer}
            />
            <SearchButton otherClasses="sm:hidden -ml-8"/>
        </div>
        <div className="seachbar__item flex p-2">
          <Image src={"/model-icon.png"} width={25} height={25}
          alt="model" className="absolute mt-2 w-[20px] h-[20px] ml-4"/>
          <input type="text" value={model} name="model" 
          onChange={(e) => setModel(e.target.value)} placeholder="Tiguan"
          className="searchbar__input"/>
          <SearchButton otherClasses="sm:hidden -ml-6"/>
        </div>
          <SearchButton otherClasses="max-sm:hidden -ml-8"/>
    </form>
  )

}

export default SearchBar
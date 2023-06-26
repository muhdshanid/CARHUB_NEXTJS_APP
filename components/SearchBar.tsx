"use client"

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"


const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState<string>("")
    const handleSearch = () => {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer setManufacturer={setManufacturer} manufacturer={manufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar
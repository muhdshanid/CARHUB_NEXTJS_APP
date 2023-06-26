"use client"

import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default  function Home() {

  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [manufacturer, setManufacturer] = useState<string>("")
  const [model, setModel] = useState<string>("")
  const [fuel, setFuel] = useState<string>("")
  const [year, setYear] = useState<number>(2022)
  const [limit, setLimit] = useState<number>(10)

  const getCars = async () => {

    setLoading(true)
  try {
    const res = await fetchCars({
      manufacturer: manufacturer || "",
      year: year || 2022,
      fuel: fuel || "",
      model: model || "",
      limit: limit || 10,
    })
  
    setAllCars(res)
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.log(error);
    
  }finally{
    setLoading(false)
  }

  }

  useEffect(() => {
    getCars()
  },[manufacturer, fuel, year, model, limit])
  return (
   <main className='overflow-hidden'>
    <Hero/>
    <div className="mt-12 padding-x padding-y max-w" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">
          Car Catalogue
        </h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar setModel={setModel} setManufacturer={setManufacturer}/>
        <div className="home__filter-container">
          <CustomFilter setFilter={setFuel} title="fuel" options={fuels}/>
          <CustomFilter setFilter={setYear} title="year" options={yearsOfProduction}/>
        </div>
      </div>
      {
        allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {
                allCars?.map(car => <CarCard car={car}/>)
              }
            </div>
            {
              loading && (
                <div className="mt-16 w-full flex-center">
                  <Image src={"/loader.svg"}
                  width={50} height={50} className="object-contain"
                  alt="loader"/>
                </div>
              )
            }
            <ShowMore
             pageNumber={limit /10} isNext={limit > allCars.length} setLimit={setLimit}/>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="font-bold text-xl text-black">Oops, no results</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )
      }
    </div>
   </main>
  )
}

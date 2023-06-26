import { MouseEventHandler } from "react";


interface CustomButtonProps {
        title: string,
        containerStyles?: string,
        handleClick?: MouseEventHandler<HTMLButtonElement>
        btnType?: "button" | "submit" ,
        rightIcon?: string,
        textStyles?: string,
        isDisabled?: boolean
    
}

type ShowMoreProps = {
        pageNumber:number,
        isNext: boolean,
        setLimit: (limit: number) => void
}

type FilterProps = {
        manufacturer?: string;
        year?: number;
        model?: string;
        limit?: number;
        fuel?: string;
      }

type SearchBarProps = {
        setManufacturer: (value: string) => void,
        setModel: (value: string) => void
}
type OptionProps = {
        title: string,
        value: string
}

type CustomFilterProps = {
        title: string,
        options: OptionProps[],
        setFilter
}

type SearchManufacturerProps = {
        manufacturer: string,
        setManufacturer: (manufacturer: string) => void 
}

type CarProps = {
        city_mpg: number;
        class: string;
        combination_mpg: number;
        cylinders: number;
        displacement: number;
        drive: string;
        fuel_type: string;
        highway_mpg: number;
        make: string;
        model: string;
        transmission: string;
        year: number;
}

type CarCardProps = {
        model: string;
        make: string;
        mpg: number;
        transmission: string;
        year: number;
        drive: string;
        cityMPG: number;
}
export type SearchState = {city:string, country:string}
export type SearchHanlder = (data:SearchState) => void
export type weatherData = {
    main?:{
        temp:number
        feels_like:number
        temp_max:number
        temp_min:number
    }
    name?:string
    weather?:[
        {
            icon:string
        }
    ]
    cod?:string
}

export interface FromProps {
    search:SearchState
    handleSearch:SearchHanlder
    setSearch: React.Dispatch<React.SetStateAction<SearchState>>
}

export interface WeatherProps {
    response: weatherData
}
export type SearchState = {city:string, country:string}
export type SearchHanlder = (data:SearchState) => void

export interface FromProps {
    search:SearchState
    handleSearch:SearchHanlder
    setSearch: React.Dispatch<React.SetStateAction<SearchState>>
}
import TvShowType from "./TvShowType"


type TvShowsType = {
    dates?: {"maximum": string , "minimum": string }
    page: number
    results: TvShowType[]
    total_pages: number
    total_results: number
}


export default TvShowsType
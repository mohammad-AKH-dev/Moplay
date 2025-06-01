import movieType from "./MovieType"

type moviesType = {
    dates?: {"maximum": string , "minimum": string }
    page: number
    results: movieType[]
    total_pages: number
    total_results: number
}


export default moviesType
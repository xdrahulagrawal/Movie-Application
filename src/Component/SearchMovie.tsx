import React, { useState, useEffect } from 'react'
import '../Assests/Style/Style.css'
import { Loader } from '../Resuable-Component/Loader';
import { GetRequest } from '../Utitlities/Network';
import MovieDetails from './MovieDetails';
import Pagination from './Pagination';
// import { movieUrl } from '../Utitlities/Network/config';

const SearchMovie = () => {
    const [searchMov, setSearchMov] = useState<any>('');
    const [movieRecord, setMovieRecord] = useState<any>([]);
    const [isloading, setIsloading] = useState<boolean>(false)
    const [totalResults, settotalResults] = useState<number>();
    const [currentPage, setCurrentPage] = useState(1);

    /**
    * @description:Handle the user input search box
    * step1-check onChange input is empty then log return
    * step2-Destructure the value
    * step3-update the state
    */
    const _handleInputSearch = (event: any) => {
        if (!event) {
            return;
        }
        const { value } = event.target;
        setSearchMov(value);
    }


    /**
     * @description:Send the request api and store the result
     * step1-check search box is not empty log return
     * step2-Loader is true serach box has some data
     * step3-Send the request in api
     * step3.1- check the response is not blank
     * step4- loader is false then response is back
     * step5-update the state
     */
    const _getMovie = async () => {
        if (!searchMov) {
            return
        }
        setIsloading(true)
        const apiResponse = await GetRequest(`https://www.omdbapi.com/?s=${searchMov}&apikey=1af5188d&page=${currentPage}`)
        console.log("🚀 ~ file: SearchMovie.tsx ~ line 28 ~ const_getMovie= ~ apiResponse", apiResponse)
        if (!apiResponse) {
            return
        }
        const { Search, totalResults } = apiResponse
        setMovieRecord(Search);
        settotalResults(Number(totalResults))
        setIsloading(false)
    }

    useEffect(() => {
        _getMovie();
    }, [searchMov, currentPage])

    /**
         * @description:Handle the pagination
         * step1-check onClick event is empty then log return
         * step2-Loader is true then load the data api
         * step3-update the state
         * step4- loader is false then response is back
         */

    const _handleClick = (event: any) => {
        if (!event) {
            return
        }
        setIsloading(true)
        const paginationId = event.target.id
        setCurrentPage(Number(paginationId))
        setIsloading(false)
    }

    return (
        <>
            <div>
                <input type="text" value={searchMov} onChange={_handleInputSearch} placeholder='Search movies name' />
            </div>
            <Loader props={isloading} />
            <MovieDetails movieDetails={movieRecord} />
            <Pagination totalResults={totalResults} onClick={_handleClick} currentPage={currentPage} />
        </>
    )
}

export default SearchMovie;

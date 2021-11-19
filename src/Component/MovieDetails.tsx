import defaultImage from '../Assests/Image/no-image.jpg';
const MovieDetails = ({ movieDetails }: any) => {
    if (!movieDetails || movieDetails.length === 0) {
        return <p className='search-hit'>Search movie name</p>
    }

    return (<>
        <div className='container'>
            {movieDetails.map((items: any, index: any) => {
                return <div key={index} className='container-item'>
                    {(items.Poster === 'N/A') ? <img className='default-img' src={defaultImage} alt="no image" /> : <img className='img-view' src={items.Poster} alt={items.Title} />}
                    <h3>{items.Title}</h3>
                </div>
            })}
        </div>
    </>
    )
}

export default MovieDetails

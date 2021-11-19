import { useEffect } from 'react'
import '../Assests/Style/Style.css'

const Pagination = ({ totalResults, onClick, currentPage }: any) => {

    //when some OnClick goto the top page
    useEffect(() => {
        window.scrollTo(0, 0)
    });


    let pages: any = []
    for (let i = 1; i <= Math.ceil(totalResults / 10); i++) {
        pages.push(i)
    }

    return (
        <>
            <ul className='pageNumber'>
                {pages.map((num: any) => {
                    return (<div key={num}>
                        <li id={num} onClick={onClick}
                            className={currentPage == num ? 'active' : ''}>{num}</li>
                    </div>)
                })}
            </ul>
        </>
    )
}

export default Pagination

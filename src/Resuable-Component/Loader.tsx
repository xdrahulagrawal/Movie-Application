import '../Assests/Style/Style.css'
export const Loader = ({ props }: any) => {
    return props ? <h2 className='loading' > Loading... </h2> : null;
}



interface Iprops {
    handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSearchEvent: () => void
}
const Search = (props: Iprops) => {
    const { handleSearchInput, handleSearchEvent } = props
    return (
        <>
            <input type='search' placeholder="Search book" className='rounded-lg mt-4 mx-4 w-[50vw] h-8 pl-4 focus:outline-none focus:ring focus:ring-blue-300 search-cancel:h-32 search-cancel:w-32 search-cancel:appearance-none search-cancel:bg-[url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)]' onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSearchInput(event)}></input>
            <button className='round-full bg-green-500 active:bg-green-600' onClick={handleSearchEvent}>Search</button>
        </>
    )
}

export default Search;
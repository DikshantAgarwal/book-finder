
import { BookVolumes } from '../../pages/BookFinderHome/BookFinder';

import { useNavigate } from "react-router-dom";
const BookCard = (props: { bookData: BookVolumes[], isLoading: Boolean }) => {
    let navigate = useNavigate();
    const { bookData, isLoading } = props;



    const handleBook = (id: string) => {
        navigate(`/book/${id.toString()}`);
    }
    if (!bookData.length) {
        return <h4>Search Books to Display</h4>
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    return <div className='flex  gap-20 border flex-wrap mt-16 px-16 items-center justify-center '>
        {bookData.map((book: BookVolumes) => {
            const { title, authors, publisher, imageLinks } = book?.volumeInfo
            const { id } = book
            return (
                <div key={book.id} className='flex flex-row w-[350px] h-auto bg-white rounded-lg py-4 drop-shadow-md'>
                    <figure className='relative h-32 w-32 '>
                        <img className='h-32 w-48 rounded-lg absolute left-2 -top-8 ' src={imageLinks && imageLinks.smallThumbnail} alt='img'></img>
                    </figure>

                    <div className='px-4'>
                        <h3>{title}</h3>
                        <span className='text-gray-500'>By: {authors ? authors.toString() : 'No authors found'}</span><br />
                        <span className='text-gray-500'>Published By: {publisher}</span>
                        <button className='bg-green-500 round-full mt-2 block' onClick={() => handleBook(id)}>See this book</button>
                    </div>
                </div>
            )
        })}

    </div>
}

export default BookCard;
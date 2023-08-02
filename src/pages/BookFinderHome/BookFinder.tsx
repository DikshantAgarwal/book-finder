
/* eslint-disable @typescript-eslint/no-misused-promises */

import { useState } from 'react';
import Search from '../../components/search/search';
import BookCards from '../../components/BookCard/BookCards';
import { API_KEY } from '../../Constants/constant';


export interface BookVolumes {
    accessInfo: Object,
    etag: string,
    id: string,
    kind: string,
    saleInfo: Object,
    searchInfo: Object,
    selfLink: string,

    volumeInfo: {
        title: string;
        authors: string[];
        publisher: string;
        imageLinks?: {
            smallThumbnail: string,
            thumbnail: string

        }
    },
}
export interface Volumes {
    items:BookVolumes[],
    kind:string,
    totalItems:number
}
function BookFinder() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [bookData, setBookData] = useState<BookVolumes[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value)
    }
    const handleSearchEvent = async () => {
        setIsLoading(true)
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q='${searchKeyword}'&key=${API_KEY}`)
        const data = await response.json() as Volumes;
        setIsLoading(false)
        if (data.totalItems) {
            setBookData(data.items);
        }

    }
    return (
        <>
            <h1 className="text-3xl font-bold underline pt-8">BOOK FINDER</h1>
            <Search handleSearchInput={handleSearchInput} handleSearchEvent={handleSearchEvent}></Search>
            <BookCards bookData={bookData} isLoading={isLoading}></BookCards>
        </>
    )
}

export default BookFinder

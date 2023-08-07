
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {API_KEY,VITE_API_BASE_URL} from '../../Constants/constant';
function Book() {
    const { volumeId } = useParams();
    const [data, setData] = useState<{ volumeInfo: { title: string, description: string } }>();
    useEffect(() => {
        const handleBookSearch = async () => {
            const response = await fetch(`${VITE_API_BASE_URL}/${volumeId}?key=${API_KEY}`)
            const data = await response.json();
            setData(data);

        }
        handleBookSearch();
    }, [volumeId])
    if (!data) {
        return <>Loading...</>
    }
    return <div className='flex flex-col w-auto h-auto p-8 drop-shadow-md'>
        <h1>{data && data?.volumeInfo && data.volumeInfo.title}</h1>
        <p className='mt-4'>{data && data.volumeInfo.description}</p>
    </div>;
}

export default Book;
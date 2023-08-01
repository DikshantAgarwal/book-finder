import { routerType } from "../types/router.types";
import BookFinder from "./BookFinderHome/BookFinder";
import Book from './Book/Books';

const pagesData: routerType[] = [
    {
        path: "/",
        element: <BookFinder />,
        title: "home"
    },
    {
        path: "book/:volumeId",
        element: <Book />,
        title: "about"
    }
];

export default pagesData;
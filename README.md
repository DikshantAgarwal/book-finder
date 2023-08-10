# book-finder
This project is to build a web application using the [Google Books API](https://developers.google.com/books/) to build a search engine to allow users to search for books.

LIVE LINK: https://dikshantagarwal.github.io/book-finder/

## Features
* This project uses the [google books volume (get and list)](https://developers.google.com/books/docs/v1/reference/volumes) endpoint
  to get the list of books and details of individual books.

* Google api supports two types of authentication
     + [OAuth 2.0 documentation](https://developers.google.com/identity/protocols/oauth2)
     + Api keys
  We have used API keys for authentication in our project. One can Create an API key in the Console by clicking Create [credentials](https://console.cloud.google.com/apis/credentials)  > **API key**.

* User can search by typing the book name in the Search input element and then clicking on the search button.
* Book cards related to searched books will get displayed.
  

## Running the project
Live Version:- https://dikshantagarwal.github.io/book-finder/

From the repo:
1. Clone the project locally
2. Run `npm install` in your command line
3. Run `npm run dev` in your command line
4. Project will on run http://localhost:5173/book-finder

## Dependencies
* Vite
* React
* React-DOM
* ReactRouter
* Typescript
* [Tailwind](https://tailwindcss.com/)
* gh-pages

## ToDO List
* Authentication
* Create a bookshelf for the user that stores bookmarked books
* Include Test Cases using Jest, RTL, etc.
* Implement Service workers to improve performance.


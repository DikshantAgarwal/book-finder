import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router"

function App() {
  return (
    <BrowserRouter basename='/book-finder'>
      <Router />
    </BrowserRouter>
  )
}

export default App

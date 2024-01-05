import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {update} from "../utils/bookMarkSlice"

import React from 'react'
import QuoteCard from './QuoteCard';
import {useState} from "react"


function Home() {
  const [d, setData] = useState();
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected dropdown option

  const quote = async (option= "") => {
    try {
      let apiUrl = 'https://api.quotable.io/quotes/random?maxLength=50';

if (option) {
  apiUrl += `&tags=${option}`;
}

      const response = await fetch(apiUrl);
      const d= await response.json();
      setData(d[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }
  const existingBookmarks = localStorage.getItem('bookmarks');
  const bookmarks = existingBookmarks ? JSON.parse(existingBookmarks) : [];
  dispatch(update(bookmarks))
  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
   // Call the quote function with the selected option
   quote(eventKey);
  }
  const HomePage = ()=>{
    navigate("/");
  }
  const Bookmarks = ()=>{
    navigate("/bookmarks");
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 relative">
      <QuoteCard data={d?.content} author={d?.author}/>
      <Dropdown className="red" onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Technology">Technology</Dropdown.Item>
          <Dropdown.Item eventKey="famous-quotes">Famous Quotes</Dropdown.Item>
          <Dropdown.Item eventKey="History">History</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
    <div className="w-full px-4 lg:px-0 lg:w-2/3 xl:w-1/2 absolute top-0 flex justify-between p-4">
      <button className="text-white" onClick={HomePage}>Home</button>
      <button className="text-white" onClick={Bookmarks}>Bookmarks</button>
    </div>

    <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={() => quote(selectedOption)}>
      <button className="bg-green-500 text-white px-3 py-1 rounded-lg shadow-md text-base md:text-lg">Next Quote</button>
    </div>
  </div>



  
  )
}

export default Home

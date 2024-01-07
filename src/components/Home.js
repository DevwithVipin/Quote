import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { update } from "../utils/bookMarkSlice";

import React, { useState } from 'react';
import QuoteCard from './QuoteCard';

function Home() {
  const [d, setData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected dropdown option

  const customToggleStyle = {
    width: '150px',
    height: '20px',
    backgroundColor: 'green',
    margin: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '10px', // Padding on the left side for content alignment
  };

  const quote = async (option = "") => {
    try {
       let apiUrl = 'https://api.quotable.io/random';
      if (option) {
        apiUrl = `https://api.quotable.io/random?tags=${option}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }

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
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 relative">
      <QuoteCard data={d?.content} author={d?.author} />
      <Dropdown className="red">
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={customToggleStyle}>
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
  );
}

export default Home;

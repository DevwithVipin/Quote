import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { update } from '../utils/bookMarkSlice'


function QuoteCard({data,author}) {
  const dispatch=useDispatch()
  const [bookmark,setBookmark]=useState()
    const addToBookmark =()=>{
        if (data && author) {
      const existingBookmarks = localStorage.getItem('bookmarks');
      const bookmarks = existingBookmarks ? JSON.parse(existingBookmarks) : [];
       setBookmark(bookmarks)
      bookmarks.push({ data, author });
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    const existingBookmarks = localStorage.getItem('bookmarks');
      const bookmarks = existingBookmarks ? JSON.parse(existingBookmarks) : [];
    
    dispatch(update(bookmarks))

    }
  return data&&(
    <>
   <div className="sm:w-1/3 bg-red-600 p-4 rounded-3xl w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 h-60 flex flex-col gap-2 justify-center items-center">
  <p className="text-white text-lg text-center">{data}</p>
  <p className="text-white text-sm">-{author}</p>
  <div className="h-8 w-8 cursor-pointer self-end" onClick={addToBookmark}>
  <svg viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bookmark_plus_fill [#ffffff1237]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-265.000000, -2639.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M216,2486 L215,2486 L215,2487 C215,2487.552 214.552,2488 214,2488 C213.448,2488 213,2487.552 213,2487 L213,2486 L212,2486 C211.448,2486 211,2485.552 211,2485 C211,2484.448 211.448,2484 212,2484 L213,2484 L213,2483 C213,2482.448 213.448,2482 214,2482 C214.552,2482 215,2482.448 215,2483 L215,2484 L216,2484 C216.552,2484 217,2484.448 217,2485 C217,2485.552 216.552,2486 216,2486 M217,2479 L211,2479 C209.895,2479 209,2479.895 209,2481 L209,2497.998 C209,2498.889 210.077,2499.335 210.707,2498.705 L213.293,2496.119 C213.683,2495.729 214.317,2495.729 214.707,2496.119 L217.293,2498.705 C217.923,2499.335 219,2498.889 219,2497.998 L219,2481 C219,2479.895 218.105,2479 217,2479" id="bookmark_plus_fill-[#ffffff1237]"> </path> </g> </g> </g> </g></svg>
</div>
</div>
    </>
    
  )
}

export default QuoteCard

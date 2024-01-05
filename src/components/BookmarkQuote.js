import React,{useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { update } from '../utils/bookMarkSlice';

function BookmarkQuote({ data, author, index }) {
  const dispatch=useDispatch()
  const book=useSelector((store) => store.bookmark.value);
  
  
  const RemoveToBookmark = () => {
    
    const existingBookmarks = localStorage.getItem('bookmarks');
    console.log(index)
    
    const filteredBook = book.filter((_, i) => i !== index);
    dispatch(update(filteredBook));

    if (existingBookmarks) {
      let bookmarks = JSON.parse(existingBookmarks);
      bookmarks = bookmarks.filter((_, i) => i !== index);
      console.log(bookmarks)
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
     
    }
  };

  return (
    <div className="m-2 bg-red-600 p-4 rounded-3xl w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 h-60 flex flex-col justify-center items-center">
      <p className="text-white text-lg text-center">{data}</p>
      <span className="text-white text-sm">-{author}</span>
      <div className="h-8 w-8 cursor-pointer self-end" onClick={RemoveToBookmark}>
      <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd" sketchType="MSPage"> <g id="Icon-Set-Filled" sketchType="MSLayerGroup" transform="translate(-206.000000, -1037.000000)" fill="#ffffff"> <path d="M226.95,1056.54 C227.34,1056.93 227.34,1057.56 226.95,1057.95 C226.559,1058.34 225.926,1058.34 225.536,1057.95 L222,1054.41 L218.464,1057.95 C218.074,1058.34 217.441,1058.34 217.05,1057.95 C216.66,1057.56 216.66,1056.93 217.05,1056.54 L220.586,1053 L217.05,1049.46 C216.66,1049.07 216.66,1048.44 217.05,1048.05 C217.441,1047.66 218.074,1047.66 218.464,1048.05 L222,1051.59 L225.536,1048.05 C225.926,1047.66 226.559,1047.66 226.95,1048.05 C227.34,1048.44 227.34,1049.07 226.95,1049.46 L223.414,1053 L226.95,1056.54 L226.95,1056.54 Z M234,1037 L210,1037 C207.791,1037 206,1038.79 206,1041 L206,1065 C206,1067.21 207.791,1069 210,1069 L234,1069 C236.209,1069 238,1067.21 238,1065 L238,1041 C238,1038.79 236.209,1037 234,1037 L234,1037 Z" id="cross-square" sketchType="MSShapeGroup"> </path> </g> </g> </g></svg>
</div>
    </div>
  );
}

export default BookmarkQuote;

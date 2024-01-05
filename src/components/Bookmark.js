import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../utils/bookMarkSlice';
import BookmarkQuote from './BookmarkQuote';

function Bookmark() {
  const dispatch = useDispatch();
  const [bookmarks, setBookmarks] = useState([]); 

  useEffect(() => {
    const existingBookmarks = localStorage.getItem('bookmarks');
    if (existingBookmarks) {
      const parsedBookmarks = JSON.parse(existingBookmarks);
      setBookmarks(parsedBookmarks);
    }
  }, []);

  const book = useSelector((store) => store.bookmark.value);
  
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 relative">
      {book.length > 0 ? (
        book.map((book, index) => (
          <BookmarkQuote
            key={index}
            data={book.data}
            author={book.author}
            index={index}
          />
        ))
      ) : (
        <p className="text-white">No bookmarks available</p>
      )}
    </div>
  );
}

export default Bookmark;

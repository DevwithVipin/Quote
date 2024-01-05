import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../utils/bookMarkSlice';
import BookmarkQuote from './BookmarkQuote';

function Bookmark() {
  const dispatch = useDispatch();
  const [bookmarks,setBookmarks]=useState('');
  useEffect(() => {
    const existingBookmarks = localStorage.getItem('bookmarks');
    if (existingBookmarks) {
      {const bookmarks = JSON.parse(existingBookmarks);
      setBookmarks(bookmarks)
    console.log(bookmarks)}

      dispatch(update(bookmarks));
    }
  }, [dispatch]);
  // const bookmarks = useSelector((store) => store.bookmark);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 relative">
      
      {bookmarks.length > 0 ? (
        bookmarks.map((bookmark, index) => (
          <BookmarkQuote
            key={index}
            data={bookmark.data}
            author={bookmark.author}
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

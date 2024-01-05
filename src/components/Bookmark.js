import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../utils/bookMarkSlice';
import BookmarkQuote from './BookmarkQuote';

function Bookmark() {
  const dispatch = useDispatch();
  const bookmarks = useSelector((store) => store.bookmark);
  console.log(bookmarks);

  useEffect(() => {
    const existingBookmarks = localStorage.getItem('bookmarks');
    if (existingBookmarks) {
      try {
        const parsedBookmarks = JSON.parse(existingBookmarks);
        if (Array.isArray(parsedBookmarks)) {
          dispatch(update(parsedBookmarks));
        } else {
          dispatch(update([])); // Initialize with an empty array if the parsed data isn't an array
        }
      } catch (error) {
        console.error('Error parsing bookmarks:', error);
        dispatch(update([])); // Initialize with an empty array if parsing fails
      }
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 relative">
      { bookmarks.length > 0 ? (
        bookmarks.map((bookmark, index) => (
          <BookmarkQuote key={index} data={bookmark.data} author={bookmark.author} />
        ))
      ) : (
        <p className='text-white'>No bookmarks available</p>
      )}
    </div>
  );
}

export default Bookmark;

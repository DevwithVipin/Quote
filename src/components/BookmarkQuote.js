import React from 'react';

function BookmarkQuote({ data, author, index }) {
  console.log(index)
  const removeToBookmark = () => {
    // Retrieve existing bookmarks from local storage
    const existingBookmarks = localStorage.getItem('bookmarks');
    console.log(index)

    if (existingBookmarks) {
      let bookmarks = JSON.parse(existingBookmarks);
      bookmarks = bookmarks.filter((_, i) => i !== index);
      console.log(bookmarks)
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      alert('Quote removed from bookmarks!');
     
    }
  };

  return (
    <div className="bg-red-600 p-4 rounded-3xl w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 h-60 flex flex-col justify-center items-center">
      <p className="text-white text-lg text-center">{data}</p>
      <span className="text-white text-sm absolute bottom-4">{author}</span>
      <button className="text-white text-lg h-15 w-1/6" onClick={removeToBookmark}>
        Remove
      </button>
    </div>
  );
}

export default BookmarkQuote;

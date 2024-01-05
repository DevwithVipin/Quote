import React from 'react'


function QuoteCard({data,author}) {
    const addToBookmark =()=>{
        if (data && author) {
      // Retrieve existing bookmarks from local storage
      const existingBookmarks = localStorage.getItem('bookmarks');

      // Parse existing bookmarks or initialize an empty array
      const bookmarks = existingBookmarks ? JSON.parse(existingBookmarks) : [];

      // Add new bookmark
      bookmarks.push({ data, author });

      // Save updated bookmarks to local storage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      alert('Quote added to bookmarks!');
    }

    }
  return data&&(
    <>
   <div className="bg-red-600 p-4 rounded-3xl w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 h-60 flex flex-col justify-center items-center">
  <p className="text-white text-lg text-center">{data}</p>
  <span className="text-white text-sm absolute bottom-4">{author}</span>
  <button className="text-white text-lg h-15 w-1/6 " onClick={addToBookmark}>bookmark</button>
</div>
    </>
    
  )
}

export default QuoteCard

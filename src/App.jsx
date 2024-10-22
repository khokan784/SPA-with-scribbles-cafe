
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)

  const handleAddBookmark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark)
  }

  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddBookmark={handleAddBookmark}handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App

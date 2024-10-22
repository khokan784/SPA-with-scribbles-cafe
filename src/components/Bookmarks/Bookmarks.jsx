import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 text-center bg-gray-300 ml-4 mt-4 pt-4">
            <h3 className="text-4xl">Reading time : {readingTime}</h3>
            <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.Id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;
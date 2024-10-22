import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddBookmark,handleMarkAsRead}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog
    return (
        <div className='mb-20 space-y-2'>
            <img className='w-full mb-8 rounded-xl h-80' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmark(blog)} className='ml-4 text-xl text-orange-400'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl my-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button 
            className='text-purple-600 font-bold underline' 
            onClick={()=>handleMarkAsRead(reading_time)}
            >Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = ({ blog, bookmarkedBlog, setBookmarkedBlog, spentTimeRead, setSpentTimeRead }) => {
    let { title, publish_date, cover_img, author_name, author_img, read_time, tags } = blog
    let [bookmarkedIcon, setBookmarkedIcon] = useState(false)

    // blog publish date functionality
    let publishDate = new Date(publish_date)
    let currDate = new Date()
    let timeDiff = currDate.getTime() - publishDate.getTime();
    let diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    // bookmarked function
    let bookmarkedFunc = () => {
        setBookmarkedIcon(true)
        let existBookmark = bookmarkedBlog.find(bkBlog => bkBlog.id === blog.id)
        if (!existBookmark) {
            setBookmarkedBlog([...bookmarkedBlog, blog])
        } else {
            toast.error('Already bookmarked!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <div className='card shadow-lg font-semibold'>
            <figure>
                <img className='h-96 w-full' src={cover_img} alt="" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <figure>
                            <img className='h-12 w-12 rounded-full' src={author_img} alt="" />
                        </figure>
                        <div>
                            <h2 className='text-lg font-bold'>{author_name}</h2>
                            <p className='text-slate-500'>{publish_date} ({diffDays} Days Ago)</p>
                        </div>
                    </div>
                    <div className='w-32 flex justify-between items-center'>
                        <span>{read_time} minute read</span> <span onClick={bookmarkedFunc} className={`cursor-pointer text-slate-400 ${bookmarkedIcon ? 'text-slate-950 text-lg' : ''}`}> <FontAwesomeIcon icon={faBookmark} /></span>
                    </div>
                </div>
                <h2 className='font-bold text-xl lg:text-3xl pr-5'>{title}</h2>
                <div className="tags flex gap-4 flex-wrap">
                    {
                        tags.map((tag, ind) => <span className='cursor-pointer text-info' key={ind}>#{tag}</span>)
                    }
                </div>
                <button onClick={() => setSpentTimeRead(spentTimeRead + read_time)} className='btn btn-accent max-w-fit bg-primary text-slate-50 font-bold text-md'>mark as read</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Blog;
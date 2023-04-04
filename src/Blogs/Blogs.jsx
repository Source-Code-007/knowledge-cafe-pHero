import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Blogs = () => {
    let [blogs, setBlogs] = useState([])
    let [spentTimeRead, setSpentTimeRead] = useState(0)
    let [bookmarkedBlog, setBookmarkedBlog] = useState([])
    useEffect(() => {
        fetch('knowledge-cafe.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='container max-w-7xl py-12 px-10 xl:px-0 mx-auto grid grid-cols-12 gap-5'>
            <div className="col-span-12 md:col-span-8 space-y-6">
                {
                    blogs.map(blog => <Blog bookmarkedBlog={bookmarkedBlog} setBookmarkedBlog={setBookmarkedBlog} spentTimeRead={spentTimeRead} setSpentTimeRead={setSpentTimeRead} key={blog.id} blog={blog} />)
                }
            </div>
            <div className="col-span-12 md:col-span-4">
                <Bookmark bookmarkedBlog={bookmarkedBlog} spentTimeRead={spentTimeRead}></Bookmark>
            </div>
        </div>
    );
};

export default Blogs;
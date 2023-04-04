import React from 'react';

const Bookmark = ({ bookmarkedBlog, spentTimeRead }) => {

    return (
        <>
            <div className='font-semibold px-6 py-4 bg-slate-100 rounded-lg text-blue-500 mb-5 border border-blue-500'>
                <h2 className='text-xl font-bold'>Spent time on read: <span className='font-extrabold'>{spentTimeRead}</span> minute</h2>
            </div>
      
            <div className='p-5 bg-slate-100 shadow rounded-lg space-y-3 font-semibold text-lg'>
                <h2 className='font-bold text-xl'>Bookmarked Blogs: {bookmarkedBlog.length}</h2>
                <ul className='space-y-6 min-h-16'>
                    {
                        bookmarkedBlog && bookmarkedBlog.map(bkBlog => <li className='bg-slate-50 shadow p-3 rounded-lg' key={bkBlog.id}>{bkBlog.title}</li>)
                    }
                </ul>
            </div>
        </>
    );
};

export default Bookmark;
import React, { useState } from 'react';
import { useEffect } from 'react';
import Blogs from './Blogs';

const Blog = () => {

    const [ blog, setBlog ] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=893eb9a7287a485cbd24660331cd266d`

        fetch(url)
        .then(res => res.json())
        .then(data => setBlog(data?.articles))
        setIsLoading(false);

    },[])
    return (
        <div>
            {
                isLoading && <p className="text-center text-red-800 text-5xl">loading</p>
                
              
            }
          
            
            {
                blog?.map(blogs => <Blogs key={blogs.id} blogs={blogs}></Blogs>)
            }
        </div>
    );
};

export default Blog;
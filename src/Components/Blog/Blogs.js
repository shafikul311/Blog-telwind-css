import React from 'react';

const Blogs = (props) => {
    const {author, content, description, publishedAt, title, urlToImage } = props.blogs
    console.log(props.blogs)
    return (
        <div className="p-20 border-b-2">
            <div className="flex justify-between p-30 m-10">
                <div className="pt-2 pl-2">
                    <h4 className="text-2xl">Author : {author}</h4>
                    <p className="from-gray-50">Published At : {(publishedAt).toString()} </p>
                    
                </div>
                <div>
                    <img style={{height:"200px"}} className="w-30 h-15" src={urlToImage} alt="" />
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-2xl">{title}</h3>
                <p>{content}</p>
                <p>{description}</p>
            </div>
            
            
        </div>
    );
};

export default Blogs;
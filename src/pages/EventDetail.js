import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EventDetail() {
    const [post, setPost] = useState();
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const news = window.news || [];
        setPost(news.find(x => Number(x.id) === Number(slug)));
    }, [slug]);

    return (
        <div className="container">
            <div className="py-3">
            {post && (
                <React.Fragment>
                    <h1 id="title">
                        {post.title}
                    </h1>
                    <p id="content" dangerouslySetInnerHTML={{ __html: post.description}}></p>
                    <div>
                        <Link 
                            to={'..'}  
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(-1);
                            }}                            
                            className="btn btn-light border rounded-circle p-0 me-2" 
                            style={{width: "32px", height: "32px", lineHeight: 1.5}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94"/></svg>                
                        </Link>
                        Back
                    </div>                
                </React.Fragment>
            )}
            </div>
        </div>
    );
}
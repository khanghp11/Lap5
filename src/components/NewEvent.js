import { Link } from "react-router-dom";

export default function NewEvent(props) {
    const post = props.post;

    return (
        <div className="col-12 col-xl-4 col-lg-4">
            <div className="card card-news">
                <img src={post.image} className="card-img-top" alt={post.title}/>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description.substring(0, 100)}...</p>
                    <Link to={`/event/${post.id}`} className="btn btn-warning w-100">
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    );
}
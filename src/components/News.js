import NewEvent from "./NewEvent";

export default function News() {
    const news = window.news;

    return (
        <section id="news-section" className="container my-5">
            <h3 className="text-center text-uppercase my-5">Tin tức & Sự kiện</h3>
            <div className="row" id="news-list">
                {news && news.map(post => (
                    <NewEvent post={post} key={`post_${post.id}`}/>
                ))}
            </div>
        </section>
    );
}
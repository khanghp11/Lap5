(function() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    }),
    post = news.find(x => x.id == params.new_id);    
    
    document.title = post.title;
    document.getElementById('title').innerHTML = post.title;
    document.getElementById('content').innerHTML = post.description;
})();
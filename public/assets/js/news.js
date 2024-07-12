(function() {
    news.forEach(function(item) {
        const col = document.createElement('div');
        col.classList.add('col-12', 'col-xl-4', 'col-lg-4');

        let html ='<div class="card card-news">';
        html += `<img src="${item.image}" class="card-img-top" alt="${item.title}">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${item.title}</h5>`;
        html += `<p class="card-text">${item.description.substring(0, 100)}...</p>`;
        html += `<a href="/post.html?new_id=${item.id}" class="btn btn-warning w-100">Detail</a>`;
        html += '</div></div>';

        col.innerHTML = html;
        
        document.getElementById('news-list').append(col);
    });
})();

    

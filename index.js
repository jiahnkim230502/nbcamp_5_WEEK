// 팀원분께서 도와주셔서 완전히 제가 다 한 것은 아니지만 최대한 이해하고 넘어간 부분이 대부분이라고 생각됩니다.

function show_card() { // 포스터 카드를 불러오기 위한 함수입니다.
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzM1MjRhMGNjYjU0NGIyNjVjODA3MzdjYTQyYWUxZCIsInN1YiI6IjY0NzA4Y2RlMTNhMzIwMDBmOWFmYWQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jdxCThGLxS_ndjNrBkik5DzinsC3QkpTuKdnX1s4df8'
        }
    };
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => {
            let rows = data['results']
            rows.forEach((a) => { // URL에서 가져온 정보를 새로운 데이터영역인 함수 a에 배열시켰습니다
                let title = a['title'];
                let vote_average = a['vote_average'];
                let overview = a['overview'];
                let id = a['id'];
                let poster_path = "https://image.tmdb.org/t/p/w300" + a['poster_path'] // 포스터 이미지를 불러 오게 하기 위한 url을 추가해 a의 poster_path 값을 합쳤습니다

                let temp_html = `<div class = "movie-card">
                                <div class="card-body" onclick = 'alert("영화 ID : ${id}")' >
                                    <img src="${poster_path}"
                                        class="poster_path">
                                                <div class="card-body">
                                                    <h4 class="cardtitle">${title}</h4>
                                                    <p class = "vote_average">★ ${vote_average}</p>
                                                    <p class="overview">${overview}</p>
                                </div>`
                document.getElementById("card-list").insertAdjacentHTML('beforeend', temp_html); // 불러온 정보를 문서의 card-list id에 넣었습니다
            });
        });
};
function search() {    // 검색 기능을 활성화 하기 위한 함수입니다.
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzM1MjRhMGNjYjU0NGIyNjVjODA3MzdjYTQyYWUxZCIsInN1YiI6IjY0NzA4Y2RlMTNhMzIwMDBmOWFmYWQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jdxCThGLxS_ndjNrBkik5DzinsC3QkpTuKdnX1s4df8'
        }
    };
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => {
            let searchString = document.querySelector("#search-input").value // 문서의 id값 search-input을 찾아내어 값을 반환시킵니다.
            let rows = data['results']
            document.getElementById("card-list").innerHTML = "" // 입력한 값에 대한 정보 값을 제외하고 공백처리 하였습니다.
            rows.forEach((a) => {
                let title = a['title'];
                let vote_average = a['vote_average'];
                let overview = a['overview'];
                let id = a['id'];
                let poster_path = "https://image.tmdb.org/t/p/w300" + a['poster_path']
                let temp_html = `<div class = "movie-card">
                                <div class="card-body" onclick = 'alert("영화 ID : ${id}")' >
                                    <img src="${poster_path}"
                                        class="poster_path">
                                                <div class="card-body">
                                                    <h4 class="cardtitle">${title}</h4>
                                                    <p class = "vote_average">★ ${vote_average}</p>
                                                    <p class="overview">${overview}</p>
                                </div>`
                if (searchString == title) {
                    document.getElementById("card-list").insertAdjacentHTML('beforeend', temp_html); // 문서의 id값 card-list에 관련된 태그를 찾아내어 temp_html을 삽입합니다. 여기에 검색 결과에 대한 값이 삽입됩니다
                };
            });
        });
};
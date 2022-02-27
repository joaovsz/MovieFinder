const key = '400dd5c32ca30c28cb503d75e23d8055'
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=vote_count.desc&api_key=${key}&language=pt-BR`
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const movie = document.getElementById("container")
const button = document.getElementById("button")
 button.addEventListener('click', getData)

document.addEventListener('DOMContentLoaded',() => {
    reset();
})



function reset() {
    movie.style.display = 'none'
   
}

function getData(){
    axios.get(url).then(response => {
        const data = response.data;
        const results = data.results
        console.log(results)
        getMovies(results)

    })
}


function getMovies(results) {
        let index = Math.floor(Math.random() * results.length)
        const titles = results[index].title
        const poster = results[index].poster_path
        const overviews = results[index].overview
        getDesc(titles, poster, overviews)
       

   
}

function getDesc(titles, poster, overviews ) {
        movie.style.display = 'flex'
        
        movie.innerHTML =` <div class="movie">
                                        <div id="poster">
                                            <img src=${IMG_URL + poster} width="170" >
                                        </div>
                                        <div class="description">
                                            <h2>
                                                ${titles}
                                            </h2>
                                            <p>${overviews}</p>
                                            
                                            </div>
                                        </div>
                             `
                            
    }

    
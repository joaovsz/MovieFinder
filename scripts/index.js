import { URL_DISCOVER, IMG_URL } from "./api.js";

const movie = document.getElementById("container");
const button = document.getElementById("button");
button.addEventListener("click", getData);
const selected = document.getElementById("select");
document.addEventListener("DOMContentLoaded", () => {
  reset();
});

function reset() {
  movie.style.display = "none";
}

function getData() {
  axios.get(URL_DISCOVER).then((response) => {
    const data = response.data;
    const results = data.results;
    getMovies(results);
  });
}

function getMovies(results) {
  let index = Math.floor(Math.random() * results.length);
  const titles = results[index].title;
  const poster = results[index].poster_path;
  const overviews = results[index].overview;
  getDesc(titles, poster, overviews);
}

function getDesc(titles, poster, overviews) {
  movie.style.display = "flex";
  movie.innerHTML = ` <div class="movie">
                                        <div id="poster">
                                            <img src=${
                                              IMG_URL + poster
                                            } width="170" >
                                        </div>
                                        <div class="description">
                                            <h2>
                                                ${titles}
                                            </h2>
                                            <p>${overviews}</p>
                                            </div>
                                        </div>
                             `;
}

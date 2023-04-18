const key = "400dd5c32ca30c28cb503d75e23d8055";
const pages = Array.from({length: 50}, (v, i) => i + 1);
const index = Math.floor(Math.random() * pages.length);
export const URL_DISCOVER = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&page=${pages[index]}&language=pt-BR`;

export const IMG_URL = "https://image.tmdb.org/t/p/w500";

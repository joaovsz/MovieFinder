const key = "400dd5c32ca30c28cb503d75e23d8055";
let pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let index = Math.round(Math.random() * pages.length++);
export let URL_DISCOVER = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&page=${index}&language=pt-BR`;

export const IMG_URL = "https://image.tmdb.org/t/p/w500";

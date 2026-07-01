console.log("Javascript Execution Starts");

const h = document.getElementById("heading"); // single element
console.log(h);
h.innerText = "HIIII"; // access and change the inner content
console.log(h.innerText);

h.innerHTML = "<strong>Umar</strong>";

// const movies = document.getElementsByClassName("movie"); // all elements with class movie
// console.log(movies);

// Tag name, class, id -> querySelector
const headerTag = document.querySelector("h1"); // First tag
console.log(headerTag);

headerTag.style.color = "Red";
headerTag.style.backgroundColor = "Black";

const movie = document.querySelector("li"); // First tag
console.log(movie);

const movieList = document.querySelector(".movieList");
console.log(movieList);

movieList.innerHTML += "<li class='movie'>Manosh</li>"; // access and change tag with content

const movies = document.querySelectorAll(".movie"); // all elements having class movie
console.log(movies);

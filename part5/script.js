// Movie class used to create movie objects.
class Movie {
  constructor(movieId, title, year, rating) {
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}

// Array that stores the movie list.
let movieList = [
  new Movie(101, "Obssession", 2026, 9.6),
  new Movie(102, "Interstellar", 2014, 8.7),
  new Movie(103, "Backrooms", 2026, 8.6)
];

// Displays all movies on the webpage.
function displayMovies() {
  let output = "";

  for (let i = 0; i < movieList.length; i++) {
    output += `<div class="movie-item">
      Title: ${movieList[i].title} |
      Year: ${movieList[i].year} |
      Rating: ${movieList[i].rating}
    </div>`;
  }

  document.getElementById("movieList").innerHTML = output;
}

// Adds a new movie to the list.
function addMovie() {
  let title = document.getElementById("title").value;
  let year = Number(document.getElementById("year").value);
  let rating = Number(document.getElementById("rating").value);

  movieList.push(new Movie(title, year, rating));
  displayMovies();
}

// Updates an existing movie using Title
function updateMovie() {
  let title = Number(document.getElementById("movieId").value);

  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].title === title) {
      movieList[i].title = document.getElementById("title").value;
      movieList[i].year = Number(document.getElementById("year").value);
      movieList[i].rating = Number(document.getElementById("rating").value);
    }
  }

  displayMovies();
}

// Deletes a movie using Title
function deleteMovie() {
  let title = Number(document.getElementById("title").value);

  movieList = movieList.filter(function(movie) {
    return movie.title !== title;
  });

  displayMovies();
}

// Searches movies by title.
function searchByTitle() {
  let searchTitle = document.getElementById("searchTitle").value.toLowerCase();
  let results = movieList.filter(function(movie) {
    return movie.title.toLowerCase().includes(searchTitle);
  });

  let output = "";

  for (let i = 0; i < results.length; i++) {
    output += `<div class="movie-item">${results[i].title}</div>`;
  }

  document.getElementById("searchResult").innerHTML = output || "0 result";
}

// Sorts movies by title A-Z.
function sortAZ() {
  movieList.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });

  displayMovies();
}

// Sorts movies by title Z-A.
function sortZA() {
  movieList.sort(function(a, b) {
    return b.title.localeCompare(a.title);
  });

  displayMovies();
}

// Sorts movies by rating from highest to lowest.
function sortBest() {
  movieList.sort(function(a, b) {
    return b.rating - a.rating;
  });

  displayMovies();
}

displayMovies();
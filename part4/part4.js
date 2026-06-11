// Movie class used to create movie objects.
class Movie {
  constructor(movieId, title, year, rating) {
    this.movieId = movieId;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}

// Array of movie objects with unique movie IDs.
let movies = [
  new Movie(105, "Avatar", 2009, 4.5),
  new Movie(102, "Titanic", 1997, 4.7),
  new Movie(110, "Inception", 2010, 4.8),
  new Movie(101, "The Matrix", 1999, 4.6),
  new Movie(108, "Interstellar", 2014, 4.9),
  new Movie(104, "Jaws", 1975, 4.2),
  new Movie(109, "Frozen", 2013, 4.1),
  new Movie(103, "Shrek", 2001, 4.3),
  new Movie(107, "Cars", 2006, 4.0),
  new Movie(106, "Up", 2009, 4.4)
];

console.log("Unsorted movie array:", movies);

// Sorts the movie array by movie ID in ascending order.
movies.sort(function(a, b) {
  return a.movieId - b.movieId;
});

console.log("Sorted movie array by Movie ID:", movies);

// Searches the movie array by movie ID.
function sequentialSearchMovie(array, movieId) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].movieId === movieId) {
      return array[i];
    }
  }

  return null;
}

console.log("Movie found:", sequentialSearchMovie(movies, 105));
console.log("Movie not found:", sequentialSearchMovie(movies, 999));
// Movie object
let myMovie = {
  title: "The longest day",
  year: 1964
};

console.log("Original movie object:", myMovie);

// Adds rating and summary properties to the movie object.
myMovie.rating = 5;
myMovie.summary = "World War II movie about the Normandy landings";

console.log("After adding rating and summary:", myMovie);

// Updates the rating and year properties.
myMovie.rating = 4;
myMovie.year = 1962;

console.log("After updating rating and year:", myMovie);

// Removes the summary property from the movie object.
delete myMovie.summary;

console.log("After removing summary:", myMovie);
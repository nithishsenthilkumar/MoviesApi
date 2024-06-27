const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFkY2ZkNGMwZjJlMzlkMTBmNzYyZGFhYTNlODZjMyIsInN1YiI6IjY1YWQxMzdhNTQ0YzQxMDBlZGMyNzIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EviGGuaY2Rhuj5jCLajTJzBtnUUBFW60oUIQsijJLxs",
  },
};

async function myfunction() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    options
  );

  const division = document.getElementById("division");
  const heading = document.createElement("h1");
  heading.innerHTML = "Top Rated Movies";
  division.appendChild(heading);

  const movies = await response.json();
  movies.results.forEach((movie, index) => {
    if (
      typeof movie.original_title == "undefined" ||
      typeof movie.overview == "undefined" ||
      typeof movie.release_date == "undefined"
    ) {
      console.log("undefined");
    } else {
      const title = document.createElement("h2");
      title.innerHTML = movie.original_title;
      division.appendChild(title);

      const overview = document.createElement("p");
      overview.innerHTML = movie.overview;
      division.appendChild(overview);

      const releasedate = document.createElement("h3");
      releasedate.innerHTML = movie.release_date;
      division.appendChild(releasedate);

      const line = document.createElement("hr");
      division.appendChild(line);
    }
  });
}

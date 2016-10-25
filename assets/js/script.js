function searchMovieByTitle() {
  document.getElementById('search_icon').addEventListener("click",  function() {
    var input_data = document.getElementById('main_movie_search').value;
    console.log(input_data);

    $.ajax({
      url: "http://www.omdbapi.com/?t=" + input_data + "&plot=short&r=json",
      cache: false,
      success: function(data){
        console.log(data);
        if (data.Response == 'True') {
          document.getElementById('movie_head').style.display = 'block';
          var movie_title = document.getElementById('movie_title');
          var movie_rated = document.getElementById('movie_rated');
          var movie_runtime = document.getElementById('movie_runtime');
          var movie_genre = document.getElementById('movie_genre');
          var movie_released = document.getElementById('movie_released');
          var movie_country = document.getElementById('movie_country');
          var movie_rating = document.getElementById('movie_rating');
          var movie_votes = document.getElementById('movie_votes');

          movie_title.innerHTML = data.Title +
          '<a href="#"><span class="movie_year"> (' + data.Year + ') </span</a>';
          movie_rated.innerHTML = data.Rated + " | ";
          movie_runtime.innerHTML = data.Runtime + " | ";
          movie_genre.innerHTML = data.Genre + " | ";
          movie_released.innerHTML = data.Released;
          movie_country.innerHTML = "(" + data.Country + ")";
          movie_rating.innerHTML = data.imdbRating;
          movie_votes.innerHTML = data.imdbVotes;
        }
      }
    });
  });
}

searchMovieByTitle();

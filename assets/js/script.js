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

function searchMoviesByInput() {
  document.getElementById('main_movie_search').addEventListener("input",  function() {
    var input_data = document.getElementById('main_movie_search').value;

    $.ajax({
      url: "http://www.omdbapi.com/?s=" + input_data + "&plot=short&r=json",
      cache: false,
      success: function(data){
        $('.movie_block').remove();
        if (data.Search != undefined) {
          var result_lenght = data.Search.length;
          for (var i = 0; i < result_lenght; i++) {
            //get template block
            var templateScript = $("#movie_list").html();
            // create handlebar with the data from json
            var template = Handlebars.compile(templateScript);
            //append template to view
            $(document.body).append(template(data.Search[i]));
            console.log(data.Search[i]);
            // if (data.Search[i].Poster != undefined) {
              var picture_link = data.Search[i].Poster;
              $('.movie_block').css('background-image', url("'" + data.Search[i].Poster  + "'"));
              // var movie_block =$(".movie_block").find("[data-id='" + data.Search[i].imdbID + "']");
              movie_block.css('background-image', 'url(' + data.Search[i].imdbID + ')');
            // }
          }
        }
      }
    });
  });
}

searchMovieByTitle();
searchMoviesByInput();

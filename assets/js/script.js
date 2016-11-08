function searchMovieByTitle() {
  document.getElementById('search_icon').addEventListener("click",  function() {
    var input_data = document.getElementById('main_movie_search').value;
    var search_category = $('.search_category :selected').val;
    console.log(search_category);
    $.ajax({
      url: "http://www.omdbapi.com/?t=" + input_data + "&plot=short&r=json",
      cache: false,
      success: function(data) {
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
          console.log($('#movie_title').height() + 50 + 'px');
          //the 50 pixels represents the nav bar height and the movie bottom details height and the title margin
          $('.movie_head').css('height', $('#movie_title').height() + 80 + 'px' );
      }
    });
  });
}

function searchMoviesByInput() {
  document.getElementById('multiple_movie_search').addEventListener("input",  function() {
    var input_data = document.getElementById('multiple_movie_search').value;

    $.ajax({
      url: "http://www.omdbapi.com/?s=" + input_data + "&plot=short&r=json",
      cache: false,
      success: function(data){
        //remove desplayed movie blocks
        $('.movie_block').remove();

        if (data.Search != undefined) {
          var result_length = data.Search.length;
          for (var i = 0; i < result_length; i++) {
            //get template block
            var templateScript = $("#movie_list").html();
            // create handlebar with the data from json
            var template = Handlebars.compile(templateScript);
            //append template to view
            $('.lower_content').append(template(data.Search[i]));
            var picture_link = data.Search[i].Poster;
            //set background-image
            $('div[data-id=' + data.Search[i].imdbID + ']').css('background-image', "url('" + picture_link + "')");
          }

          //240 is the sum of height and padding of the movie block
          //divide the result_length by 4 there are 4 elements on each row
          //the result will return the number of rows
          var rows = Math.ceil(result_length / 4);
          var movie_block_height = (rows) * 260;
          //set the movie list block the with necessary to contain the list
          $('.lower_content').css('min-height', movie_block_height + 'px');
        }
      }
    });
  });
}

if (document.getElementById('main_movie_search')) {
  searchMovieByTitle();

}
if (document.getElementById('multiple_movie_search')) {
  searchMoviesByInput();
}

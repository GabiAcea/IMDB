function searchMovieByTitle() {
  document.getElementById('search_icon').addEventListener("click",  function() {
    var input_data = document.getElementById('main_movie_search').value;
    console.log(input_data);

    $.ajax({
      url: "http://www.omdbapi.com/?t=" + input_data + "&plot=short&r=json",
      cache: false,
      success: function(data){
        var details_block = document.getElementById('movie_details_section'),
            node = document.createElement('p'),
            actors = document.createTextNode(data.Actors);
            awards = document.createTextNode(data.Awards),
            country = document.createTextNode(data.Country),
            director = document.createTextNode(data.Director),
            genre = document.createTextNode(data.Genre),
            metascore = document.createTextNode(data.Metascore),
            plot = document.createTextNode(data.Plot),
            poster = document.createTextNode(data.Poster),
            rated = document.createTextNode(data.Rated),
            released = document.createTextNode(data.Released),
            //if response true, do stuff
            response = document.createTextNode(data.Response),
            runtime = document.createTextNode(data.Runtime),
            title = document.createTextNode(data.Title),
            type = document.createTextNode(data.Type),
            write = document.createTextNode(data.Writer),
            year = document.createTextNode(data.Year),
            imdb_id = document.createTextNode(data.imdbID),
            imdb_rating = document.createTextNode(data.imdbRating),
            imdb_votes = document.createTextNode(data.imdbVotes),
            language = document.createTextNode(data.Language);

        node.appendChild(actors);
        document.getElementById('movie_details_section').appendChild(node);
      }
    });
  });
}

searchMovieByTitle();

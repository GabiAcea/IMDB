console.log('here');
$.ajax({
  url: "http://www.omdbapi.com/?t=terminator&y=&plot=short&r=json",
  cache: false,
  success: function(data){
    console.log(data);
  }
});

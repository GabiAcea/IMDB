console.log('here');
$.ajax({
  url: "http://www.omdbapi.com/?t=unborn&y=&plot=short&r=json",
  cache: false,
  success: function(data){
    console.log(data);
  }
});

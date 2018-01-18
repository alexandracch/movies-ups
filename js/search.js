$(document).ready(function() {
  var movieSection = $('#movie-section');
  var buttonSearch = $('#button-search');

  buttonSearch.on('click', function() {
    $('#movie-section').empty();
    var inputMovie = $('#search').val();
    $.getJSON('https://www.omdbapi.com/?s=' + inputMovie + '&apikey=a1792c9b').then(function(response) {
      console.log(response);
      for (var element in response.Search) {
        var movie = response.Search[element];
        var posterMovie = movie.Poster;
        var idMovie = movie.imdbID;
        if (posterMovie === 'N/A') {
          posterMovie = '../assets/img/noimg.png';
        }
        $('#movie-section').append('<div class="col s12 container-flex-column"><img id="movie" src="' + posterMovie + '" alt="movies-API-OMDB" class=" materialboxed imgs-gallery responsive-img"><h6 class=center-align id="name-movie">' + movie.Title + '</h6></div>');
      }
    });
    $('#search').val('');
  });
});
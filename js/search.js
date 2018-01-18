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
          posterMovie = 'assets/img/noimg.png';
        }
        var divMovie = $('<div class="left border">');
        var imgPoster = $('<img src="' + posterMovie + '" width= 70px data-id ="' + idMovie + '">');
        divMovie.append(movie.Title);
        divMovie.append(imgPoster);
        $('#movie-section').append(divMovie);
      }

      // $('#peliculas div img').on('click', function() {
      //   $('#click-movie').empty();
      //   var dataIdMovie = $(this).data('id');
      //   alert(dataIdMovie);
      //   $.getJSON('https://www.omdbapi.com/?i=' + dataIdMovie + '&page=2&apikey=cde77cc6').then(function(response) {
      //     var mTitle = response.Title;
      //     var mPoster = $('<div><img  src="' + response.Poster + '"height=120px width= 70px data-id ="' + idMovie + '"></div>');
      //     var mPlot = response.Plot;
      //     var newDiv = $('<div>');
      //     newDiv.append(mTitle);
      //     newDiv.append(mPoster);
      //     newDiv.append(mPlot);
      //     $('#click-movie').append(newDiv);
      //   });
      // });
      // para las paginas siguientes
      // $.getJSON('http://www.omdbapi.com/?s=' + inputMovie + '&page=2&apikey=cde77cc6').then(function(responseJ) {
      // console.log(responseJ);
    });
  });
});
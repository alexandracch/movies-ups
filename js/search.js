var arrMovies = ['Gladiator', 'Braveheart', 'Django Unchained', 'Deadpool', 'Game of Thrones', 'Twilight', 'Batman', 'knowing', 'Iron Man'];
$(document).ready(function() {
  // Initialize collapse button
  $('.button-collapse').sideNav();
  var movieSection = $('#movie-section');
  var buttonSearch = $('#button-search');

  // $('#search').on('click', function() {

  // });
  // datos del usuario
  $('#photo').attr('src', localStorage.photo);
  $('#name').append(localStorage.name);
  $('#email').append(localStorage.email);
  // Iniciando parallax del gif de portada
  $('.parallax').parallax();
  // Initialize collapse button
  $('.button-collapse').sideNav();
  // Boton de salida
  // Boton de salida
  $('#logout').on('click', function() {
    firebase.auth().signOut().then(function() {
      window.location.href = 'login.html';
      console.log('saliste');
    });
  });

  buttonSearch.on('click', function() {
    $('#movie-section').empty();
    var inputMovie = $('#search').val();
    console.log(inputMovie);
    arrMovies.indexOf(inputMovie);
    console.log(arrMovies.indexOf(inputMovie));
    $.getJSON('https://www.omdbapi.com/?s=' + inputMovie + '&apikey=a1792c9b').then(function (response) {
      console.log(response);
      for (var element in response.Search) {
        var movie = response.Search[element];
        var posterMovie = movie.Poster;
        var idMovie = movie.imdbID;
        if (posterMovie === 'N/A') {
          posterMovie = '../assets/img/noimg.png';
        }
        $('#movie-section').append('<div class="col s4 container-flex-column"><img id="movie" src="' + posterMovie + '" alt="movies-API-OMDB" class=" materialboxed imgs-gallery responsive-img"><h6 class=center-align id="name-movie">' + movie.Title + '</h6></div>');
      }
    });
    $('#search').val('');
  });
});
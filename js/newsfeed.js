$(document).ready(function() {
  // Inicializamos material box
  $('.materialboxed').materialbox();

  // Initialize collapse button
  $('.button-collapse').sideNav();

  // Iniciar modal
  // $('#modal-movie0').modal();
  $('#modal-movie').modal();

  // Para traer la data de la API
  // Trabajaremos para el caso con las siguientes películas:
  // var arrMovies = ['Gladiator', 'Braveheart', 'Django Unchained', 'Deadpool', 'Game of Thrones', 'Twilight', 'Harry Potter and the Deathly Hallows', 'Star Wars', 'Batman', 'knowing', 'Iron Man' ];

  var arrMovies = ['Gladiator', 'Braveheart', 'Django Unchained', 'Deadpool', 'Game of Thrones', 'Twilight', 'Batman', 'knowing', 'Iron Man'];

  // Seleccionamos estructura a moestrar películas en el newsfeed
  var containerMovies1 = $('#container-movie-1');
  var containerMovies2 = $('#container-movie-2');
  var containerMovies3 = $('#container-movie-3');
  // var containerMovies4 = $('#container-movie-4');

  for (var i = 0; i < arrMovies.length; i++) {

    if (i < 3) {
      containerMovies1.prepend('<div class="col s4 container-flex-column"><img id="movie' + i + '" src="" alt="movies-API-OMDB" class="materialboxed imgs-gallery responsive-img"><h6 class=center-align id="name-movie' + i + '">Nombre Película</h6><a class="waves-effect waves-light btn modal-trigger" href="#modal-movie">Ver Datos</a></div>');
    }
    if (i >= 3 && i < 6) {
      containerMovies2.prepend('<div class="col s4 container-flex-column"><img id="movie' + i + '" src="" alt="movies-API-OMDB" class="materialboxed imgs-gallery responsive-img"><h6 class=center-align id="name-movie' + i + '">Nombre Película</h6><a class="waves-effect waves-light btn modal-trigger" href="#modal-movie">Ver Datos</a></div>');
    }
    if (i >= 6 && i < 9) {
      containerMovies3.prepend('<div class="col s4 container-flex-column"><img id="movie' + i + '" src="" alt="movies-API-OMDB" class=" materialboxed imgs-gallery responsive-img"><h6 class=center-align id="name-movie' + i + '">Nombre Película</h6><a class="waves-effect waves-light btn modal-trigger" href="#modal-movie">Ver Datos</a></div>');
    }
    // if (i >= 9 && i < 12) {
    //   containerMovies4.prepend('<div class="col s4 container-flex-column"><img id=movie' + i + ' + src="" alt="movies-API-OMDB"class="imgs-gallery responsive-img"><h6 id=name-movie' + i + ' >Nombre Película</h6>');
    // }
    // apicall(arrMovies[i], '#movie' + i, '#name-movie' + i, '#td-year', '#td-time', '#td-repart', '#td-genre', '#name-movie1', '#movie1');
    // $('#td-year').text('');
    // $('#td-time').text('');
    // $('#td-repart').text('');
    // $('#td-genre').text('');
    apicall(arrMovies[i], '#movie' + i, '#name-movie' + i, '#td-year', '#td-time', '#td-repart', '#td-genre');
    //
    // $('#td-year').text('');
    // $('#td-time').text('');
    // $('#td-repart').text('');
    // $('#td-genre').text('');
    // $('#name-movie1').text('');
    // $('#movie1').attr('src', '');
  }

  // llamando API OMDB:
  // , idYear, idTime, idRepart, idGenre, idNameMovie, idImgMovie
  // &apikey=a1792c9b
  function apicall(nameMovie, idImg, idNameMovie, idYear, idTime, idRepart, idGenre) {
    $.getJSON('http://www.omdbapi.com/?t=' + nameMovie + '&apikey=a1792c9b').then(function(response) {
      console.log(response);
      // var name = response.Title;
      $(idImg).attr('src', response.Poster);
      $(idNameMovie).text(response.Title);
      $(idYear).text(response.Year);
      $(idTime).text(response.Runtime);
      $(idRepart).text(response.Actors);
      $(idGenre).text(response.Genre);
      // $(idNameMovie).text(name);
      // $(idImgMovie).attr('src', response.Poster);
    });
  };
});
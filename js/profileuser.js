$(document).ready(function() {
  // alert('hola');
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyD6hxhZ9lWlGruPqp4Pl0pFaQd__Rka7P8',
    authDomain: 'movie-ups.firebaseapp.com',
    databaseURL: 'https://movie-ups.firebaseio.com',
    projectId: 'movie-ups',
    storageBucket: 'movie-ups.appspot.com',
    messagingSenderId: '1064902545731'
  };
  firebase.initializeApp(config);

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
  // Inicializamos material box
  $('.materialboxed').materialbox();

  // Initialize collapse button
  $('.button-collapse').sideNav();
  // Iniciar modal
  // $('#modal-change').modal();

  // Iniciar modal
  // $('#modal-movie0').modal();
  $('#modal-movie').modal();
  // Iniciando slider
  $('.slider').slider();

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
    var content = '<div class="col s4 container-flex-column"><img id="movie' + i + '" src="" alt="movies-API-OMDB" class="materialboxed imgs-gallery responsive-img"><h6 class=center-align id="name-movie' + i + '">Nombre Película</h6><div id="raty' + i + '" class=""></div><a class="waves-effect waves-light btn modal-trigger btn-modal red darken-4" href="#modal-movie" data-movie="' + i + '">Ver Datos</a></div>';

    if (i < 3) {
      containerMovies1.prepend(content);
      // Para las strellas.
      $('#raty' + i).raty({ score: 5 });
    }
    if (i >= 3 && i < 6) {
      containerMovies2.prepend(content);
      // Para las strellas.
      $('#raty' + i).raty({ score: 4 });
    }
    if (i >= 6 && i < 9) {
      containerMovies3.prepend(content);
      // Para las strellas.
      $('#raty' + i).raty({ score: 3 });
    }

    apicall(i);
    // if (i >= 9 && i < 12) {
    //   containerMovies4.prepend('<div class="col s4 container-flex-column"><img id=movie' + i + ' + src="" alt="movies-API-OMDB"class="imgs-gallery responsive-img"><h6 id=name-movie' + i + ' >Nombre Película</h6>');
    // }
    // apicall(arrMovies[i], '#movie' + i, '#name-movie' + i, '#td-year', '#td-time', '#td-repart', '#td-genre', '#name-movie1', '#movie1');
  }

  // llamando API OMDB:
  // , idYear, idTime, idRepart, idGenre, idNameMovie, idImgMovie
  // &apikey=a1792c9b


  function apicall(indexElement) {
    var idImg = 'movie' + indexElement;
    var idNameMovie = 'name-movie' + indexElement;
    var nameMovie = arrMovies[indexElement];
    console.log(' imagen ' + idImg + ' idNameMovie ' + idNameMovie + ' nameMovie ' + nameMovie);
    $.getJSON('http://www.omdbapi.com/?t=' + nameMovie + '&apikey=a1792c9b').then(function(response) {
      console.log(response);
      // arrNameMovies.push = response.Title;
      // console.log(arrNameMovies);
      // console.log(idYear);
      // var name = response.Title;
      $('#' + idImg).attr('src', response.Poster);
      console.log('#' + idImg);
      $('#' + idNameMovie).text(response.Title);
    });
    // console.log(arrNameMovies);
  };

  function apicallModal(indexElement) {
    var nameMovie = arrMovies[indexElement];
    $.getJSON('http://www.omdbapi.com/?t=' + nameMovie + '&apikey=a1792c9b').then(function(response) {
      $('#movie-img').attr('src', response.Poster);
      $('#td-year').text(response.Year);
      $('#td-time').text(response.Runtime);
      $('#td-repart').text(response.Actors);
      $('#td-genre').text(response.Genre);
      $('#name-movie').text(response.Title);
    });
  }

  $('.btn-modal').on('click', function(event) {
    var element = $(this);
    var idItem = element.data('movie');
    console.log(idItem);
    apicallModal(idItem);
  });
});

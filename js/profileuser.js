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

  $('#photo-user').attr('src', localStorage.photo);
  $('#name-user').append(localStorage.name);
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

  for (var i = 0; i < arrMovies.length; i++) {
    var content = '<div class="col s4 container-flex-column"><img id="movie' + i + '" src="" alt="movies-API-OMDB" class="materialboxed imgs-gallery responsive-img"><h6 class=center-align id="name-movie' + i + '">Nombre Película</h6><div id="raty' + i + '" class=""></div><a class="waves-effect waves-light btn modal-trigger btn-modal red darken-4 block" href="#modal-movie" data-movie="' + i + '">Ver Datos</a></div>';

    if (i < 3) {
      containerMovies1.prepend(content);
      // Para las strellas.
      $('#raty' + i).raty({ score: 5 });
    }
    apicall(i);
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
      // $('#td-repart').text(response.Actors);
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

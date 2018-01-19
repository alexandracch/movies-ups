$(document).ready(function() {
  $('.slider').slider();
  // Initialize collapse button
  $('.button-collapse').sideNav();
    // datos del usuario
    $('#photo').attr('src', localStorage.photo);
    $('#name').append(localStorage.name);

  $('#photo-user').attr('src', localStorage.photo);
  $('#name-user').append(localStorage.name);
  $('#email').append(localStorage.email);
  var $seguidores = $('#seguidores');
  
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
  ;
});
$(document).ready(function() {
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
  
  // traer la rama
  var dbRef = firebase.database().ref('users');
  // local storage de login
  var name = localStorage.name;
  console.log(name);
  console.log(dbRef);
 // insertarlo en html
  $('#user-name').append(name);
});

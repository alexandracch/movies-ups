$(document).ready(function() {
  $('.slider').slider();
  // Initialize collapse button
  $('.button-collapse').sideNav();
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

  // Colocando el nombre y foto en las barras
  $('.one').attr('src', localStorage.photo);
  $('.text-chip').append(localStorage.name);

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


  // Crando variables 
  var textArea = $('#area');
  var comment = $('#button');
  var commented = $('#visualizing');

  // Validando el texArea 
  textArea.on('keyup', function() {
    if (textArea.val() === '') {
      comment.attr('disabled', true);
      comment.css({ 'background': '' });       
    } else {
      comment.attr('disabled', false);
      comment.css({ 'background': '#D14736' });
    }
  });  
  
  // Utilizando el boton Comentar para pasar a otro contenedor
  comment.on('click', function() {

    var nameUser = localStorage.name;
    var $messages = '<div class="col s12 box" style=" background-color: rgb(189, 224, 208);margin-top:5% " >' + '<span>_name_<span>' + '<div class="right"><img src="_photo_"  style="width:50px; height: 50px; border-radius: 50% "></div>' + '<div class="message-box"> <p></p></div>' + '</div>';
    var appenReplace = $messages.replace('<p></p>', textArea.val()).replace('_photo_', localStorage.photo).replace('_name_', localStorage.name)
    commented.append(appenReplace); 


    // guardar comentarios en firebase
    firebase.database().ref('comments').push({
      name: localStorage.name,
      message: textArea.val()
    });
    // limpiando el textarea
    $('#area').val('');

    // Generando el contador
    var accountant = commented.find('.message-box').length;
    
    // Conviertiendo el entero a Porcentaje para que me pueda funcionar la barra
    var accountantPor = (accountant * 10 + '%');
    console.log(accountantPor);
    // Condicionando para que incremente la barra progresiva.
    if (accountant) {
      $('.user1').css({ 'width': accountantPor });
    }
  });
});
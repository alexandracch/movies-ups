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
      comment.css({ 'background': 'yellow' });
    }
  });

  // Utilizando el boton Comentar para pasar a otro contenedor
  comment.on('click', function() {
    var nameUser = localStorage.name;
    var $messages = '<div class="col s12 box">' + '<span>_name_<span>' + '<div class="right"><img src="_photo_"  style="width:50px; height: 50px; border-radius: 50% "></div>' + '<div class="div-name"><h4></h4></div>' + '<div class="message-box"><span></span></div>' + '</div>';
    var appenReplace = $messages.replace('<span></span>', textArea.val()).replace('_photo_', localStorage.photo).replace('_name_', localStorage.name);
    commented.append(appenReplace + textArea.val());
    // guardar comentarios en firebase
    firebase.database().ref('comments').push({
      name: localStorage.name,
      message: textArea.val()
    });
    //limpiando el textarea
    $('#area').val('');

    //Generando el contador
    var accountant = commented.find('.message-box').length;
    
    //Conviertiendo el entero a Porcentaje para que me pueda funcionar la barra
    var accountantPor = (accountant + '%');
    console.log(accountantPor);
    //Condicionando para que incremente la barra progresiva.
    if (accountant) {
      $('.user1').css({ 'width': accountantPor  });
    }



  });
});
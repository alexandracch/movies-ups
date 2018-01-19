$(document).ready(function() {
  $('#photo').attr('src', localStorage.photo);
  $('#name').append(localStorage.name);
  $('#email').append(localStorage.email);

  console.log(localStorage.nameMovie);
  $('#name-movie').text(localStorage.nameMovie);
  $('#img-user1').attr('src', localStorage.photo);

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
  $('input.autocomplete').autocomplete({
    // data para autocompletado de palabras
    data: {
      'Apple': null,
      'Microsoft': null,
      'Google': 'https://placehold.it/250x250',
      'Hola': null,
      '¿Cómo estás?': null,
      'Jajajaja': null,
      'Bueno': null,
      'Está bien': null,
      'Laboratoria': null,
      'calle': null,
      'Hackathon': null,
      'Movie': null,
      'Película': null,
      'Buena': null,
      'Actor': null,
      'Cine': null,
      'Oscar': null,
      'Globos de oro': null,
      'Festival de Cannes': null,
      'Star Wars': null,
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

  var $input = $('#autocomplete-input');
  var nameUser = localStorage.name;
  var $btnSend = $('#send');
  var $chatUl = $('#comments-ul');
  var $btnSendAttr = $('button[type=submit]');

  // para no dar comentarios vacios
  $input.on('input', function() {
    if ($(this).val().length === 0 || $(this).val().length === ' ' || $(this).val().length === '') {
      $btnSendAttr.attr('disabled', true); // desabilita el boton
      // textArea contiene algo
    } else if ($(this).val().length >= 1) {
      $btnSendAttr.attr('disabled', false); // habilita el boton
    }
  });
  // aparición de nuevo comentario
  $btnSend.on('click', function() {
    var nameUser = localStorage.name;
    var $inputVal = $input.val();
    var $comments = '<div class="col s12 box">' + '<span>_name_<span>' + '<div class="right"><img src="_photo_"  style="width:50px; height: 50px; border-radius: 50% "></div>' + '<div class="div-name"><h4></h4></div>' + '<div class="message-box"><span></span></div>' + '</div>';
    var appenReplace = $comments.replace('<span></span>', $input.val()).replace('_photo_', localStorage.photo).replace('_name_', localStorage.name);
    $input.val('');
    $('#comments').prepend(appenReplace);
    // contador de comentarios
    var countComment = $('#comments').find('.box').length;
    console.log(countComment);

    // Conviertiendo el entero a Porcentaje para que me pueda funcionar la barra
    var accountantPor = (countComment * 10 + '%');
    console.log(accountantPor);
    console.log(typeof(accountantPor));
    // Condicionando para que incremente la barra progresiva.
    $('#determinate1').attr('style', 'width:' + accountantPor);
    

    // guardar comentarios en firebase
    firebase.database().ref('comments').push({
      name: localStorage.name,
      message: $inputVal,
    });

    $inputVal = $input.val('');
    // para que no se puedan volver a enviar comentarios en blanco
    if ($inputVal = $input.val('')) {
      $btnSendAttr.attr('disabled', true); // desabilita el boton
    }
  });

  // para traer todos lo posteos que hizo
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var token = firebase.auth().currentUser.uid;
      queryDataset(token);
    }
  });

  firebase.database().ref('users').child(localStorage.uid).once('value').then(function(snapshot) {
    var Postarray = snapshot.val();
    var keys = Object.keys(Postarray);
    for (var i = 0; i < keys.length; i++) {
      var currentObject = Postarray[keys[i]];
      arrayTraer[i] = currentObject.name;
      arrayTraerFoto[i] = currentObject.photo;
    }
  });

  
});
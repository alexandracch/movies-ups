$(document).ready(function() {
  setTimeout(function() {
    window.location.href = 'welcome.html';
  }, 40000);
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
  
  var provider = new firebase.auth.GoogleAuthProvider();
 
  $('#login').on('click', function() {
    firebase.auth()
      .signInWithPopup(provider) // envía popup de gmail
      .then(function(result) { // luego...
        console.log(result.user);
        saveDataUser(result.user); // llama a la función
        // local storage a utilizar en las demás vistas
        localStorage.name = result.user.displayName;
        localStorage.uid = result.user.uid;
        localStorage.email = result.user.email;
        localStorage.photo = result.user.photoURL;
      });
  });
  // guarda datos de usuarios automáticamente
  function saveDataUser(user) { // función creadora de nodos
    var myUser = {
      uid: user.uid, // inicio de sesion uid único
      name: user.displayName, // nombre
      email: user.email, // email
      photo: user.photoURL, // foto de gmail
    };
    firebase.database().ref('users/' + user.uid).set(myUser); // se usa el uid de usurio ára verificar que no se duplique el logeo
  }
});

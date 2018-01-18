$(document).ready(function() {
  // Initialize collapse button
  $('.button-collapse').sideNav();
   // Iniciar modal
   $('#modal-change').modal();
  $('#photo').attr('src', localStorage.photo);
  $('#name').append(localStorage.name);
  $('#email').append(localStorage.email);
});
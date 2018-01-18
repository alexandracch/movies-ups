$(document).ready(function() {
  $('.slider').slider();
  // Initialize collapse button
  $('.button-collapse').sideNav();
  // bar
  setInterval(function() {
    $('#podium1').animate({'width': '0%'}).animate({'width': '90%'}, 1000)
      .delay(7000).animate({'opacity': '0'}, 1000)
      .animate({'width': '0%'}).animate({'opacity': '1'});
  }, 100);
  setInterval(function() {
    $('#podium2').animate({ 'width': '0%' }).animate({ 'width': '75%' }, 1000)
      .delay(7000).animate({ 'opacity': '0' }, 1000)
      .animate({ 'width': '0%' }).animate({ 'opacity': '1' });
  }, 400);
  setInterval(function() {
    $('#podium3').animate({ 'width': '0%' }).animate({ 'width': '65%' }, 1000)
      .delay(7000).animate({ 'opacity': '0' }, 1000)
      .animate({ 'width': '0%' }).animate({ 'opacity': '1' });
  }, 600);

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
    commented.append('<div  >' + textArea.val());
    $('#area').val('');
    commented.find('div');
    console.log(commented.find('div'))
    var array = ['pera','fddd','ssss'];
    var  newArray = [];
    acum = 0;
    for (var i = 0; i < array.length; i++) { 
      acum += array[i]; }
    alert(acum)

  });

  
});
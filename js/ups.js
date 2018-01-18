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
});
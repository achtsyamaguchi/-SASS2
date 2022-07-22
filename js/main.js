$(function () {
  $('.ham_btn').on('click', function () {
    $('.ham_btn').toggleClass('close');
    $('.header_nav_wrapper').toggleClass('fade');
    $('body').toggleClass('noscroll');
  });
});
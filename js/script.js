$(document).ready(function () {
   $('.main-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true
   });

   $('.hamburger').click(function () {
      $('.hamburger').toggleClass('hamburger__active')
      $('.wrapper').toggleClass('wr-active').removeClass('wrapper')
      $('.page-sidebar').toggleClass('sidebar-active')
      //$('.sidebar-content').css({ 'display': 'block', 'padding': '25px 25px 124px', 'width':'180px'})
      $('.sidebar-content').toggleClass('sidebar-content-active')
      $('.hamburger-text').css({ 'display': 'none' })
      $('.logo-png').css({'width':'159px','height':'167px'})
      $('.logo-title').css({ 'display': 'inline-block', 'padding-left':'20px','text-align':'center','padding-top':'20px'})
      $('.nav').css({ 'display': 'block' })
      $('.page-content').toggleClass('page-content-active')
   });



   $('.wrapper-small').on('click', function() {
      $('.burger-small').toggleClass('burger_active')
      $('.page-sidebar').toggleClass('sidebar-menu')
      $('.hidden_menu').toggleClass('menu_show')
   });

});

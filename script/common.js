$(document).ready(function () {
  $('.loader').delay(3000).fadeOut('slow');
  $('#overlayer').delay(3000).fadeOut('slow');
  $('.fullpage').fullpage({
    menu: '.menu',
    anchors: ['home', 'work', 'about'],
    autoScrolling: true,
    navigation: true,
    navigationTooltips: ['.home', '.work', '.about'],
    animateAnchor: true,
    showActiveTooltip: true,
    scrollingSpeed: 1000,
    animateAnchor: true,
    loopBottom: true,
    afterRender: function () {
      var wow = new WOW();
      wow.init();
      $('.work__item p').matchHeight(); // always one height
      $('.work__item').tilt({
        perspective: 1200,
      });
      particlesJS.load('particles-js', '../js/particlesjs-config.json');
    },
  });
  var i = 0;
  var txt =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga deserunt, quo quae adipisci repellendus praesentium tempora dolores iste rem sunt!';
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById('typetext').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }
  }
  setInterval(function () {
    typeWriter();
  }, 3000);
  $('.open_f').on('click', function () {
    var opnFilter = $('.filter').find('.filter__list');
    $(opnFilter).toggleClass('open-filter');
    $(this).toggleClass('anim-btn');
  });

  $('.work__block').isotope({
    itemSelector: '.work__item',
    layoutMode: 'fitRows',
  });
  $('.filter__list li a').on('click', function (e) {
    e.preventDefault();
    $('.filter__list li a').removeClass('active');
    $(this).addClass('active');

    var filterSelect = $(this).attr('data-filter');
    $('.work__block').isotope({
      filter: filterSelect,
    });
    return false;
  });
});

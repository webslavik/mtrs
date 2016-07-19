!(function() {

  
  // SLICK SLIDER 
  //-----------------------------

  // main page top slider
  $('.main-page__big-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 1000
    prevArrow: '.slider-top__left-arrow',
    nextArrow: '.slider-top__right-arrow'
  });


  // main page logos
  $('.main-page-brands').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 1000
    prevArrow: '.brand-arrow-left',
    nextArrow: '.brand-arrow-right'
  });

  // main page clients
  $('.clients-reviews').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 1000
    prevArrow: '.clients-arrow-left',
    nextArrow: '.clients-arrow-right'
  });

  // card page 
  $('.slideshow__display').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    fade: true,
    asNavFor: '.slideshow__thumbs',
  });

  $('.slideshow__thumbs').slick({
    slidesToShow: 4,
    dots: false,
    prevArrow: '.slideshow__thumbs-left-arrow',
    nextArrow: '.slideshow__thumbs-right-arrow',
    asNavFor: '.slideshow__display',
    canterMode: true,
    focusOnSelect: true
  });

  $('.card-page__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 1000
    prevArrow: '.card-page__arrows-left',
    nextArrow: '.card-page__arrows-right'
  });







  // Scroll 
  //--------------------------------------------------------
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });



  // Scroll up
  //--------------------------------------------------
  $('#button-up').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: 0
    }, 800);
  });



  // Spinner
  //-------------------------------------
  $('.form-count__minus').on('click', function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.form-count__plus').on('click', function() {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  })



  // Select2
  //-------------------------------------------------
  $('.matrasses-model__select').select2({
    minimumResultsForSearch: -1,
    width: '47%'
  });

  $('.product__form-select').select2({
    minimumResultsForSearch: -1,
  });


  // Readmore js
  //--------------------------------------------------
  $('.description-section__definition').readmore({
    maxHeight: 10,
  });
  

})();


// Пришлось вынести за пределы аннонимной функции 
// т.к. код отказывался работать

// GOOGLE MAPS
//-----------------------------

function initMap() {
    
  var map;
  
  var coordinates = {lat: 55.707501, lng: 37.687818};

  var mapOption = {
    center: coordinates,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwhell: false
  };

  map = new google.maps.Map(document.getElementById('main-map'), mapOption);

  var marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    title: 'Some title'
  })


} // end initMap()

  // function initMap() {
  //       var cairo = {lat: 49.8438884, lng: 24.0287383};
  //       var map = new google.maps.Map(document.getElementById('map'), {
  //         scaleControl: true,
  //         center: cairo,
  //         mapTypeId:google.maps.MapTypeId.ROADMAP,
  //         zoom:17,
  //         scrollwheel: false
  //       });
  //       var marker = new google.maps.Marker({
  //         map: map, 
  //         position: cairo,
  //         animation:google.maps.Animation.BOUNCE
  //       });
  //     }

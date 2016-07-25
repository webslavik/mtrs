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

  $('.optovik-page__brands-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 1000
    prevArrow: '.optovik__brand-arrow-left',
    nextArrow: '.optovik__brand-arrow-right'
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
    count = count < 1 ? 0 : count;
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

  $('.catalog__select').select2({
    minimumResultsForSearch: -1,
    width: '160px',

  });

  $('.catalog__select_big').select2({
    minimumResultsForSearch: -1,
    width: '220px',

  });

   $('.pop-up__select').select2({
    minimumResultsForSearch: -1,
  })



  // pop up 
  popUpToggle();

  function popUpToggle() {
    $('.pop-up__content').on('click', function(e) {
      e.stopPropagation();
    })


    $('#request_call, .btn-pop-up__close, .pop-up').on('click', function(e) {
      e.preventDefault();
      $('.pop-up').toggleClass('pop-up__hide');
    });
  }
  
    
  


//// range slider //ползунок цен


$(function(){ // Добавление  категорий сортировки 
    $("select").change(function(e){
        var b = e.target.id; 
        var a = $(this).val();
        $("."+b).html(a + "<img class='sort_img' src='img/icon/close.png', alt=''>");
        $("."+b).addClass("visible").removeClass('hiden');
        $(".sort_img").click(function(){
          $(this).parent().addClass('hiden').removeClass('visible');
        })
        $(".closeX").addClass("visible").removeClass('hiden');
         $(".closeX").click(function(){
           $(".filter_select_wrap span").addClass("hiden").removeClass("visible");
            $('.catalog-wrap__content select').prop('selectedIndex',0);
           
        })

    })
 });
$(function(){ // калькулятор цен

    var input = $(".cart-count_input");
    
    input.change(function(){
        var et  = $(this);
  
        var roditel = et.parents('ul');
  
        var n_endprice = roditel.children(".list_coast_content");
  
        var n_price = roditel.children(".list_price_content").text();
  
        var n_rub = parseInt(n_price.replace(/\D+/g,""));

        var n_input = roditel.children(".cart-count_input");
   
        var endcost = $(this).val() * n_rub ;

        var x = abc(endcost);

        function abc(cost){// пробел внутри числа
          var c = (cost + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
          
          return c;
        }
        var cost = n_endprice.html(x + " руб.");


        var summ = 0;
        $(".list_coast_content").each(function(){
         summ += parseInt($(this).html().replace(/\D+/g,""));
        })
        var oplata = $(".k_oplate");
        var y = abc(summ);
        oplata.html(y + " руб.");

    }) 
  });
$(function(){// удаление блока
 $(".cart_close").click(function(e){
    
    $(this).parent().remove();
 })
});



// range slider  ползунок цен
 $( "#slider-range" ).slider({
        // orientation: 'vertical',
        range: true,
        min: 0,
        max: 350000,
        values: [ 30000, 120000 ],
        slide: function( event, ui ) {
          $( "#amount" ).val(ui.values[ 0 ] );
          $( "#amount_2" ).val(ui.values[ 1 ] );
        }
      });

  

      // Изменение местоположения ползунка при вводиде данных в первый элемент input
      $("input#amount").change(function(){
        var value1 = $("input#amount").val();
        var value2 = $("input#amount_2").val();
          if(parseInt(value1) > parseInt(value2)){
          value1 = value2;
          $("input#amount").val(value1);
        }
        $("#slider-range").slider("values",0,value1); 
      });

      // Изменение местоположения ползунка при вводиде данных в второй элемент input  
      $("input#amount_2").change(function(){
        var value1=$("input#amount").val();
        var value2=$("input#amount_2").val();

        if(parseInt(value1) > parseInt(value2)){
          value2 = value1;
          $("input#amount_2").val(value2);
        }
        $("#slider-range").slider("values",1,value2);
      });

      // фильтрация ввода в поля
      $('#amount, #amount_2').keypress(function(event){
        var key, keyChar;
        if(!event) var event = window.event;
        
        if (event.keyCode) key = event.keyCode;
        else if(event.which) key = event.which;
      
        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
        keyChar=String.fromCharCode(key);
        
        if(!/\d/.test(keyChar)) return false;
      
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
    scrollwheel: false
  };

  map = new google.maps.Map(document.getElementById('main-map'), mapOption);

  var marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    title: 'Some title'
  })


 } 
 
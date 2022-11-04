
$(document).ready(function(){
	
	$('#page_effect').fadeIn(2000);

});


$(function(){
   $('#checkIn').datepicker();
   $('#checkOut').datepicker();
})

$(document).ready(function(){
   $('.strick-slider').slick({
      dots:true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay:true,
      speed:200,

      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]

   })

})
document.querySelector('.fa-circle-play').addEventListener('click',videoToggle);
document.querySelector('.fa-circle-pause').addEventListener('click',videoToggle);




  function videoToggle () {
    video = $('.strick-video').get(0);
    if(video.paused)
    {
      video.play();
      $('.fa-circle-play').hide();
      $('.fa-circle-pause').show();
    }
    else{
      video.pause();
      $('.fa-circle-pause').hide();
      $('.fa-circle-play').show();
     
    }
    }

    //Tel Code Number
var input = document.querySelector("#mobile_code");
window.intlTelInput(input,({
  // options here
}));

$(document).ready(function() {
	$('.iti__flag-container').click(function() { 
	  var countryCode = $('.iti__selected-flag').attr('title');
	  var countryCode = countryCode.replace(/[^0-9]/g,'')
	  $('#mobile_code').val("");
	  $('#mobile_code').val("+"+countryCode+" "+ $('#mobile_code').val());
   });
});


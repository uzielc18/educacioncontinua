/* ----------------------------------------------------------------------------------------
* Author        : Awaiken
* Template Name : App Launch - App Landing Page HTML5 Template
* File          : Custom JS
* Version       : 1.0
* ---------------------------------------------------------------------------------------- */
(function ($) {
    "use strict";
	
	var $window = $(window); 
	
	/* Popup video */
	$('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', // String que contiene el identificador de YouTube
                    id: 'v=', // Patrón de búsqueda del identificador del vídeo
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL del vídeo de YouTube con el identificador incrustado
                }
            }
        }
    });
	
})(jQuery);
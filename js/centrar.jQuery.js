// Para evitar conflictos pasamos como parámetro $ a una función anónima
(function($) {
	// Declarando la función principal
	$.fn.centrar = function() {
		// Almacenando la referencia al elemento (imagen) en una variable
		var elemento = $(this);
		// Función que centrará la imagen
		function cambiarCSS() {
			// Almacenando en variables El alto y ancho de la imagen
			var altoImagen = $(elemento).height(),
				anchoImagen = $(elemento).width(),
			// Y también el alto y ancho de la ventana
				altoVentana = $(window).height(),
				anchoVentana = $(window).width()
			;
			// Centramos el elemento (imagen)
			$(elemento).css({
				"left": (anchoVentana - anchoImagen) / 2,
				"position": "absolute",
				"top": (altoVentana - altoImagen) / 2
			});
		}
		// Ejecutamos la función que centra la imagen
		cambiarCSS();
		// Hacemos que también se centre la imagen cuando se redimensione la ventana
		$(window).bind("resize", cambiarCSS);
	};
})(jQuery);
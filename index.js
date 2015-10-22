	$('#menu a').click( function() {
		var page = $(this).attr('href'); 
		var speed = 750; // gérer la vitesse de défliement
        
        // Ici on retranche la hauteur du bandeau (201px dans ta feuille de styles)
		$('html, body').animate( { scrollTop: $(page).offset().top - 201 }, speed );
		return false;
	});
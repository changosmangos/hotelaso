// archivos
function subirFoto(foto){
	var options = new FileUploadOptions();
options.fileKey="archivo";
options.fileName="Carlos Alberto.jpg";

	
	var ft = new FileTransfer();
ft.upload(foto,("http://www.igitsoft.com/pgtest.php"), function(r){
	navigator.notification.confirm ("Loa datos han sido registrados correctamente xD ", function (btn) { 
		
		switch (btn) {
			case 1: 
			navigator.notification.vibrate(3000);
			break;
			case 2: 
			navigator.notification.beep(3);
			break;
		}
		window.location.href= "#page";
	},"Registro", "Vibrar, Sonar, Cancelar");
	
}, function (err){
	navigator.notification.alert("Error al subir archivo: " + err.code, null, "Registro", "Aceptar");
}, options);

	}
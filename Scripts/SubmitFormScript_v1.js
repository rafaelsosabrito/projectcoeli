function submitForm() {
    // Validar el formulario antes de enviarlo
    if (validateForm()) {

        // Obtener el formulario
        var form = document.getElementById("personalisiertes-form");

        // Crear un objeto FormData con los datos del formulario
        var formData = new FormData(form);

        // Convertir FormData a una cadena de consulta (application/x-www-form-urlencoded)
        var formBody = [];
        formData.forEach(function(value, key) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(value);
            formBody.push(encodedKey + "=" + encodedValue);
        });
        formBody = formBody.join("&");

        // Mostrar los datos en la consola antes de enviar la solicitud
        console.log(formBody);

        document.getElementById("contact").innerHTML = `
            <div id="success-message">
                <h2 class="major">Nachricht gesendet</h2>
                <p>Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze mit Ihnen in Verbindung setzen.</p>
                <div class="close">Close</div>
            </div>`;

        var contactSection = document.getElementById("contact");
		var closeButton = contactSection.querySelector('.close');
		// Añadir el manejador de clic para la crucecita
		closeButton.addEventListener('click', function() {
			location.hash = '';
		});

        // Crear una solicitud XMLHttp
        var xhr = new XMLHttpRequest();

        // Configurar la solicitud
        xhr.open("POST", "process_form.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        // Configurar la función de devolución de llamada cuando la solicitud se complete
        xhr.onload = function () {
            if (xhr.status == 200) {
                // Manejar la respuesta del servidor si es necesario
                console.log("response: ");
                console.log(xhr);
                // Mostrar el mensaje de éxito

            } else {
                alert("Es gab ein Problem beim Senden der Nachricht. Bitte versuchen Sie es erneut.");
            }
        };

        // Enviar la solicitud con los datos del formulario
        xhr.send(formBody);
    }
}

window.onload = function() {
	var originalFormHTML = document.getElementById("contact").innerHTML;

	window.addEventListener('hashchange', function() {
		if (window.location.hash === '#contact') {
			document.getElementById("contact").innerHTML = originalFormHTML;
			var contactSection = document.getElementById("contact");
			var closeButton = contactSection.querySelector('.close');
			// Añadir el manejador de clic para la crucecita
			closeButton.addEventListener('click', function() {
				location.hash = '';
			});
		}
	});
};


function validateForm() {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;

	// Validar si el campo de nombre está vacío
	if (name.trim() === '') {
		alert('Bitte füllen Sie Ihren Vor- und Nachnamen aus.');
		return false; // Detener el envío del formulario
	}

	// Validar el formato del correo electrónico
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
		return false; // Detener el envío del formulario
	}

	// Si todo está bien, devuelve true para permitir el envío del formulario
	return true;
}
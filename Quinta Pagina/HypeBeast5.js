// Obtener el botón y el cuerpo del documento
const modeToggle = document.getElementById('modeToggle'); 
const body = document.body;
const navbar = document.querySelector(".navbar"); // Selecciona el navbar correctamente

// Función para cambiar entre modo claro y oscuro
function toggleDarkMode() {
    body.classList.toggle('dark-mode'); // Cambia la clase del body

    // Cambiar la clase del navbar entre claro y oscuro
    if (body.classList.contains('dark-mode')) {
        modeToggle.innerText = 'Modo Claro';
        navbar.classList.remove("bg-body-tertiary");
        navbar.classList.add("bg-dark", "navbar-dark");
    } else {
        modeToggle.innerText = 'Modo Oscuro';
        navbar.classList.remove("bg-dark", "navbar-dark");
        navbar.classList.add("bg-body-tertiary");
    }
}

// Escuchar el clic en el botón para alternar entre modos
modeToggle.addEventListener('click', toggleDarkMode);

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) { // Verifica que el botón existe antes de agregar el evento
        backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

// Escuchar el clic en el botón para alternar entre modos
modeToggle.addEventListener('click', toggleDarkMode);

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // Función para volver arriba con animación suave
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));

    // Detecta clic en "Políticas y Privacidad" del navbar
    document.getElementById("openPolicyModal").addEventListener("click", function (event) {
        event.preventDefault(); // Previene la navegación inesperada
        modal.show(); // Muestra el modal
    });

    // Habilita el botón "Aceptar" solo cuando el checkbox está marcado
    document.getElementById("confirmRead").addEventListener("change", function () {
        document.getElementById("acceptBtn").disabled = !this.checked;

    // Cierra el modal cuando se hace clic en "Aceptar"
    document.getElementById("acceptBtn").addEventListener("click", function () {
        modal.hide(); // Oculta el modal

        });
    });
});

function validateAndSend() {
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (firstName === "" || lastName === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
    }

    let mailtoLink = `mailto:dc23-1479@unphu.edu.do?subject=Contacto de ${firstName} ${lastName}&body=${encodeURIComponent(message)}%0A%0AEmail: ${email}`;
    window.location.href = mailtoLink;
}
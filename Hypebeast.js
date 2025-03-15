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


document.getElementById('confirmRegister').addEventListener('click', function () {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;

    if (nombre && apellido && correo && password) {
      alert("Aquí se hubiera registrado con una cuenta");

      // Obtener la instancia del modal y cerrarlo
      let modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
      modal.hide();

      // Limpiar formulario después de cerrar el modal
      document.getElementById('registerForm').reset();

      // Asegurar que el usuario pueda seguir navegando sin interrupciones
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop').remove();
    } else {
      alert("Por favor, complete todos los campos.");
    }
  });

  // Cerrar modal correctamente cuando se haga clic en "Cerrar"
  document.getElementById('closeModal').addEventListener('click', function () {
    let modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    modal.hide();

    // Asegurar que el usuario pueda seguir navegando
    document.body.classList.remove('modal-open');
    document.querySelector('.modal-backdrop').remove();
  });
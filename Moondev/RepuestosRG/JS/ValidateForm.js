// Obtener el formulario
  var formulario = document.getElementById("FormValidate");

  // Obtener todos los campos input dentro del formulario
  var campos = formulario.querySelectorAll("input");

  // Iterar sobre los campos input y establecer el mensaje personalizado
  campos.forEach(function(campo) {
    campo.addEventListener('invalid', function() {
      if (!this.validity.valid) {
        this.setCustomValidity("Por favor, complete este campo");
      }
    });
    campo.addEventListener('input', function() {
      this.setCustomValidity('');
    });
  });

  // Función para validar la contraseña
  function validarContrasena() {
    var contrasena = document.getElementById("PwrdUser").value;
    var mensajeError = document.getElementById("mensajeError");

    // Verificar longitud mínima
    if (contrasena.length < 12) {
      mensajeError.textContent = "La contraseña debe tener al menos 12 caracteres.";
      return false;
    }

    // Verificar si contiene al menos un carácter especial
    var caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!caracteresEspeciales.test(contrasena)) {
      mensajeError.textContent = "La contraseña debe contener al menos un carácter especial.";
      return false;
    }

    // La contraseña cumple con todas las validaciones
    mensajeError.textContent = ""; // Limpiar mensaje de error
    return true;
  }

  // Agregar un listener para validar la contraseña cuando se cambie su valor
  document.getElementById("PwrdUser").addEventListener("input", validarContrasena);

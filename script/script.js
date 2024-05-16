function tipoHabitacion() {
  let estandar = document.getElementById('tipoHabitacionE').checked
  let premium = document.getElementById('tipoHabitacionP').checked

  if (estandar) {
    return "Estándar";
  } else if (premium) {
    return "Premium";
  }
}
let calidadHabitacion = tipoHabitacion()

function validarEntradas() {
  let nombre = document.getElementById('nombreHuesped').value
  let cantidadPersonas = parseInt(document.getElementById('cantidadPersonas').value)
  let cantidadDias = parseInt(document.getElementById("cantidadDias").value)

  document.getElementById('errorNombre').textContent = ''
  document.getElementById('errorNumeroNoValido').textContent = ''
  document.getElementById('errorCantidadDias').textContent = ''


  let error = false;

  if (nombre.trim() === '' || !isNaN(nombre)) {
    document.getElementById('errorNombre').textContent = "Nombre del Huésped no puede estar vacío o ser un número."
    error = true
  }
  if (cantidadPersonas < 1 || cantidadPersonas > 7 || cantidadPersonas === '') {
    document.getElementById('errorNumeroNoValido').textContent = "Debe ingresar entre 1 y 7 personas."
    error = true
  }
  if (cantidadDias.toString().trim() === '' || cantidadDias === 0) {
    document.getElementById("errorCantidadDias").textContent = "Error: Ingrese un valor válido."
    error = true
  }
  return !error;
}

function precioHabitacion(cantidadPersonas) {
  let precioHabitacion = 0

  if (calidadHabitacion == "Estándar") {
    if (cantidadPersonas >= 1 && cantidadPersonas <= 2) { precioHabitacion = 20000 }
    else if (cantidadPersonas >= 3 && cantidadPersonas <= 4) { precioHabitacion = 30000 }
    else if (cantidadPersonas >= 5 && cantidadPersonas <= 7) { precioHabitacion = 35000 }
  } else if (calidadHabitacion == "Premium") {
    if (cantidadPersonas >= 1 && cantidadPersonas <= 2) { precioHabitacion = 35000 }
    else if (cantidadPersonas >= 3 && cantidadPersonas <= 4) { precioHabitacion = 52000 }
    else if (cantidadPersonas >= 5 && cantidadPersonas <= 7) { precioHabitacion = 61000 }
  }
  else {
    let error = document.getElementById("errorNumeroNoValido")
    error.textContent = "Error: Valor no válido"
  }
  return precioHabitacion
}

function precioFinal(dias, cantidadPersonas) {
  return dias * precioHabitacion(cantidadPersonas)
}

function mostrarHuespedes(nombre, cantidadPersonas, cantidadDias) {
  let precio = precioFinal(cantidadDias, cantidadPersonas)
  let datos = nombre + " - " + cantidadPersonas + " - " + cantidadDias + " - " + calidadHabitacion + " -  Total: " + precio;
  const li = document.createElement('li')
  li.textContent = datos
  document.getElementById('Huéspedes').appendChild(li)
}

function registroHuesped() {
  let nombre = document.getElementById("nombreHuesped").value
  let cantidadPersonas = parseInt(document.getElementById("cantidadPersonas").value)
  let cantidadDias = parseInt(document.getElementById("cantidadDias").value)
  let entradas = validarEntradas()
  if (entradas) {
    mostrarHuespedes(nombre, cantidadPersonas, cantidadDias, calidadHabitacion)
  }

}

function limpiar() {
  let lista = document.getElementById("Huéspedes")
  lista.textContent = ''
}

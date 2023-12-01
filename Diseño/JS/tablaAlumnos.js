document.addEventListener('DOMContentLoaded', function () {
    // Obtiene el botón de agregar actividad por su ID
    var agregarActividadBtn = document.getElementById('agregarActividadesBtn');

    if (agregarActividadBtn) {
        agregarActividadBtn.addEventListener('click', function () {
            // Obtiene la tabla existente
            var tablaOriginal = document.getElementById('tablaActividades');

            // Obtiene los datos de la nueva fila (puedes modificar según tus necesidades)
            var tipoPractica = document.querySelector('#tablaActividades select').value;
            var fecha = document.querySelector('#tablaActividades input[type="date"]').value;
            var actividadRealizada = document.querySelector('#tablaActividades input[type="text"]').value;
            var totalHoras = document.querySelector('#tablaActividades input[type="number"]').value;
            var observaciones = document.querySelector('#tablaActividades textarea').value;

            // Crea una nueva fila y agrega las celdas con los datos
            var nuevaFila = tablaOriginal.insertRow(-1);
            var celdaTipoPractica = nuevaFila.insertCell(0);
            var celdaFecha = nuevaFila.insertCell(1);
            var celdaActividad = nuevaFila.insertCell(2);
            var celdaTotalHoras = nuevaFila.insertCell(3);
            var celdaObservaciones = nuevaFila.insertCell(4);

            // Asigna los valores a las celdas
            celdaTipoPractica.innerHTML = tipoPractica;
            celdaFecha.innerHTML = fecha;
            celdaActividad.innerHTML = actividadRealizada;
            celdaTotalHoras.innerHTML = totalHoras;
            celdaObservaciones.innerHTML = observaciones;
            
            // Limpia los campos después de agregar la fila
            document.querySelector('#tablaActividades select').value = 'Dual';
            document.querySelector('#tablaActividades input[type="date"]').value = '';
            document.querySelector('#tablaActividades input[type="text"]').value = '';
            document.querySelector('#tablaActividades input[type="number"]').value = '';
            document.querySelector('#tablaActividades textarea').value = '';
        });
    } else {
        console.error('El botón agregarActividadesBtn no se encuentra en el DOM.');
    }
});

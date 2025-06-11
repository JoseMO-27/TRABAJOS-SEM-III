document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM (Document Object Model): Selecciona los elementos HTML del documento
    const autenticacionDiv = document.getElementById('autenticacion'); // Contenedor de la sección de autenticación
    const menuDiv = document.getElementById('menu'); // Contenedor del menú principal
    const retiroDiv = document.getElementById('retiro'); // Contenedor de la sección de retiro
    const depositoDiv = document.getElementById('deposito'); // Contenedor de la sección de depósito
    const saldoDiv = document.getElementById('saldo'); // Contenedor de la sección de saldo
    const documentoInput = document.getElementById('documento'); // Campo de entrada para el número de documento
    const bancoSelect = document.getElementById('banco'); // Selector para elegir el banco
    const btnAutenticar = document.getElementById('btnAutenticar'); // Botón para autenticar
    const btnRetirar = document.getElementById('btnRetirar'); // Botón para ir a la sección de retiro
    const btnDepositar = document.getElementById('btnDepositar'); // Botón para ir a la sección de depósito
    const btnSaldo = document.getElementById('btnSaldo'); // Botón para consultar el saldo
    const btnSalir = document.getElementById('btnSalir'); // Botón para salir del cajero
    const cantidadRetiroInput = document.getElementById('cantidadRetiro'); // Campo de entrada para la cantidad a retirar
    const btnConfirmarRetiro = document.getElementById('btnConfirmarRetiro'); // Botón para confirmar el retiro
    const btnVolverMenuRetiro = document.getElementById('btnVolverMenuRetiro'); // Botón para volver al menú desde la sección de retiro
    const cantidadDepositoInput = document.getElementById('cantidadDeposito'); // Campo de entrada para la cantidad a depositar
    const btnConfirmarDeposito = document.getElementById('btnConfirmarDeposito'); // Botón para confirmar el depósito
    const btnVolverMenuDeposito = document.getElementById('btnVolverMenuDeposito'); // Botón para volver al menú desde la sección de depósito
    const btnVolverMenuSaldo = document.getElementById('btnVolverMenuSaldo'); // Botón para volver al menú desde la sección de saldo
    const saldoActualSpan = document.getElementById('saldoActual'); // Elemento para mostrar el saldo actual
    const mensajeAutenticacionP = document.getElementById('mensajeAutenticacion'); // Párrafo para mostrar mensajes de autenticación
    const mensajeMenuP = document.getElementById('mensajeMenu'); // Párrafo para mostrar mensajes en el menú
    const mensajeRetiroP = document.getElementById('mensajeRetiro'); // Párrafo para mostrar mensajes en la sección de retiro
    const mensajeDepositoP = document.getElementById('mensajeDeposito'); // Párrafo para mostrar mensajes en la sección de depósito
    const mensajeExitoDiv = document.getElementById('mensajeExito'); // Div para mostrar mensajes de éxito
    const textoMensajeExitoP = document.getElementById('textoMensajeExito'); // Párrafo para mostrar el texto del mensaje de éxito

    // Saldo inicial (simulado): Genera un saldo aleatorio entre 100 y 1000
    let saldo = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    saldoActualSpan.textContent = saldo.toFixed(2); // Muestra el saldo inicial con dos decimales

    // Funciones:
    // Función para mostrar una sección específica y ocultar las demás
    function mostrarSeccion(seccion) {
        autenticacionDiv.style.display = 'none'; // Oculta la sección de autenticación
        menuDiv.style.display = 'none'; // Oculta el menú principal
        retiroDiv.style.display = 'none'; // Oculta la sección de retiro
        depositoDiv.style.display = 'none'; // Oculta la sección de depósito
        saldoDiv.style.display = 'none'; // Oculta la sección de saldo
        mensajeExitoDiv.style.display = 'none'; // Oculta el mensaje de exito

        // Muestra la sección especificada
        if (seccion === 'autenticacion') {
            autenticacionDiv.style.display = 'block';
        } else if (seccion === 'menu') {
            menuDiv.style.display = 'block';
        } else if (seccion === 'retiro') {
            retiroDiv.style.display = 'block';
        } else if (seccion === 'deposito') {
            depositoDiv.style.display = 'block';
        } else if (seccion === 'saldo') {
            saldoDiv.style.display = 'block';
        }
    }

    // Función para mostrar un mensaje de éxito temporalmente
    function mostrarMensajeExito(mensaje) {
        textoMensajeExitoP.textContent = mensaje; // Establece el texto del mensaje de éxito
        mensajeExitoDiv.style.display = 'block'; // Muestra el div del mensaje de éxito

        // Oculta el mensaje de éxito después de 3 segundos
        setTimeout(() => {
            mensajeExitoDiv.style.display = 'none';
        }, 3000);
    }

    // Event Listeners: Define las acciones a realizar cuando se interactúa con los elementos HTML
    // Autenticación
    btnAutenticar.addEventListener('click', function() {
        const documento = documentoInput.value; // Obtiene el valor del campo de documento

        // Valida el número de documento (entre 6 y 10 dígitos numéricos)
        if (documento.length >= 6 && documento.length <= 10 && /^\d+$/.test(documento)) {
            const bancoSeleccionado = bancoSelect.value; // Obtiene el valor del banco seleccionado
            mensajeAutenticacionP.textContent = `Autenticación exitosa. Banco: ${bancoSelect.options[bancoSelect.selectedIndex].text}`; // Muestra un mensaje de éxito
            mostrarSeccion('menu'); // Muestra el menú principal
        } else {
            mensajeAutenticacionP.textContent = 'Número de documento inválido. Debe tener entre 6 y 10 dígitos numéricos.'; // Muestra un mensaje de error
        }
    });

    // Menú Principal
    btnRetirar.addEventListener('click', function() {
        mostrarSeccion('retiro'); // Muestra la sección de retiro
        mensajeMenuP.textContent = ""; // Limpia el mensaje del menú
        mensajeRetiroP.textContent = ""; // Limpia el mensaje de retiro
    });

    btnDepositar.addEventListener('click', function() {
        mostrarSeccion('deposito'); // Muestra la sección de depósito
        mensajeMenuP.textContent = ""; // Limpia el mensaje del menú
        mensajeDepositoP.textContent = ""; // Limpia el mensaje de depósito
    });

    btnSaldo.addEventListener('click', function() {
        mostrarSeccion('saldo'); // Muestra la sección de saldo
        mensajeMenuP.textContent = ""; // Limpia el mensaje del menú
    });

    btnSalir.addEventListener('click', function() {
        mensajeMenuP.textContent = "Sesión finalizada. Gracias por usar el cajero automático."; // Muestra un mensaje de despedida
        mostrarSeccion('autenticacion'); // Vuelve a la sección de autenticación
        documentoInput.value = ""; // Limpia el campo de documento
    });

    // Retiro
    btnConfirmarRetiro.addEventListener('click', function() {
        const cantidadRetiro = parseFloat(cantidadRetiroInput.value); // Obtiene la cantidad a retirar

        // Valida la cantidad a retirar (debe ser un número mayor que cero)
        if (isNaN(cantidadRetiro) || cantidadRetiro <= 0) {
            mensajeRetiroP.textContent = 'Ingrese una cantidad válida mayor que cero.'; // Muestra un mensaje de error
            return; // Sale de la función
        }

        // Verifica si el saldo es suficiente
        if (cantidadRetiro > saldo) {
            mensajeRetiroP.textContent = 'Saldo insuficiente.'; // Muestra un mensaje de error
            return; // Sale de la función
        }

        saldo -= cantidadRetiro; // Resta la cantidad retirada del saldo
        saldoActualSpan.textContent = saldo.toFixed(2); // Actualiza el saldo en la interfaz
        mostrarMensajeExito('Retiro exitoso.'); // Muestra un mensaje de éxito
        cantidadRetiroInput.value = ""; // Limpia el campo de cantidad a retirar
        mostrarSeccion('menu'); // Vuelve al menú principal

    });

    // Depósito
    btnConfirmarDeposito.addEventListener('click', function() {
        const cantidadDeposito = parseFloat(cantidadDepositoInput.value); // Obtiene la cantidad a depositar

        // Valida la cantidad a depositar (debe ser un número mayor que cero)
        if (isNaN(cantidadDeposito) || cantidadDeposito <= 0) {
            mensajeDepositoP.textContent = 'Ingrese una cantidad válida mayor que cero.'; // Muestra un mensaje de error
            return; // Sale de la función
        }

        saldo += cantidadDeposito; // Suma la cantidad depositada al saldo
        saldoActualSpan.textContent = saldo.toFixed(2); // Actualiza el saldo en la interfaz
        mostrarMensajeExito('Depósito exitoso.'); // Muestra un mensaje de éxito
        cantidadDepositoInput.value = ""; // Limpia el campo de cantidad a depositar
        mostrarSeccion('menu'); // Vuelve al menú principal
    });
    

    btnVolverMenuRetiro.addEventListener('click', function() {
        mostrarSeccion('menu'); // Vuelve al menú principal
    });

    btnVolverMenuDeposito.addEventListener('click', function() {
        mostrarSeccion('menu'); // Vuelve al menú principal
    });

    btnVolverMenuSaldo.addEventListener('click', function() {
        mostrarSeccion('menu'); // Vuelve al menú principal
    });

    // Inicialización: Muestra la sección de autenticación al cargar la página
    mostrarSeccion('autenticacion');
});
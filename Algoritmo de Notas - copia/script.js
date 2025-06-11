document.addEventListener('DOMContentLoaded', function() {
    const notaCorte1Input = document.getElementById('notaCorte1');
    const notaCorte2Input = document.getElementById('notaCorte2');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultadoDiv = document.getElementById('resultado');
  
    calcularBtn.addEventListener('click', function() {
      const notaCorte1 = parseFloat(notaCorte1Input.value);
      const notaCorte2 = parseFloat(notaCorte2Input.value);
  
      if (isNaN(notaCorte1) || isNaN(notaCorte2) || notaCorte1 < 0 || notaCorte1 > 5 || notaCorte2 < 0 || notaCorte2 > 5) {
        resultadoDiv.textContent = 'Por favor, ingrese notas válidas entre 0 y 5.';
        return;
      }
  
      const pesoCorte1 = 0.30;
      const pesoCorte2 = 0.30;
      const pesoExamenFinal = 0.40;
      const notaObjetivo = 3.0;
  
      const notaAcumuladaCortes = (notaCorte1 * pesoCorte1) + (notaCorte2 * pesoCorte2);
  
      if (notaAcumuladaCortes >= notaObjetivo) {
        resultadoDiv.textContent = '¡Felicidades! Ya alcanzas o superas la nota objetivo con tus notas actuales.';
        return;
      }
  
      const notaNecesariaExamen = (notaObjetivo - notaAcumuladaCortes) / pesoExamenFinal;
  
      if (notaNecesariaExamen > 5.0) {
        resultadoDiv.textContent = 'Es imposible alcanzar la nota objetivo con las notas actuales.';
        return;
      }
  
      resultadoDiv.textContent = `Necesitas sacar ${notaNecesariaExamen.toFixed(2)} en el examen final para obtener una nota acumulada de 3.0`;
    });
  });
function formatTime(formato) {
    const semanas = formato.match(/(\d+)w/);
    const dias = formato.match(/(\d+)d/);
    const horas = formato.match(/(\d+)h/);
    const minutos = formato.match(/(\d+)m/);
  
    let resultado = '';

    if (semanas) {
      resultado += semanas[1] + ' semana, ';
    }
    if (dias) {
      resultado += dias[1] + ' días, ';
    }
  
    if (horas) {
      resultado += horas[1] + ' horas, ';
    }
  
    if (minutos) {
      resultado += minutos[1] + ' minutos';
    }
  
    // Eliminar la coma extra al final
    resultado = resultado.replace(/,\s*$/, '');
  
    return resultado;
  }

export default formatTime
  
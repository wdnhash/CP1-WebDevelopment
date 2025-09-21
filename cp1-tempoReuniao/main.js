function toInt(v) {
  return Math.floor(Number(v) || 0);
}

function calcular() {
  let ini = toInt(document.getElementById("horaIni").value) * 60 +
            toInt(document.getElementById("minuIni").value);

  let fim = toInt(document.getElementById("horaFim").value) * 60 +
            toInt(document.getElementById("minuFim").value);

  let dur = ((fim - ini) % 1440 + 1440) % 1440;

  let h = Math.floor(dur / 60);
  let m = dur % 60;

  document.getElementById("horas").textContent   = ("0" + h).slice(-2);
  document.getElementById("minutos").textContent = ("0" + m).slice(-2);
}
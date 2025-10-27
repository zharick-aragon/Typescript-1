"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
var tbody = document.getElementById("series-filas");
var promedioTemporadas = document.getElementById("promedio-temporadas");
function mostrarSeries() {
    var totalTemporadas = 0;
    data_js_1.series.forEach(function (serie) {
        var tr = document.createElement("tr");
        tr.innerHTML = "\n        <th scope=\"row\">".concat(serie.id, "</th>\n        <td><a href=\"#\">").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporada, "</td>\n        ");
        tbody.appendChild(tr);
        totalTemporadas += serie.temporada;
    });
    var promedio = totalTemporadas / data_js_1.series.length;
    promedioTemporadas.textContent = "Seasons average:  ".concat(Math.floor(promedio));
}
mostrarSeries();

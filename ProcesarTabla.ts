import { series } from "./data.js";

const tbody = document.getElementById("series-filas")!;
const promedioTemporadas = document.getElementById("promedio-temporadas")!;

function mostrarSeries(): void {
    let totalTemporadas = 0;
    series.forEach((serie) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th scope="row">${serie.id}</th>
        <td><a href="#">${serie.nombre}</a></td>
        <td>${serie.canal}</td>
        <td>${serie.temporada}</td>
        `;
        tbody.appendChild(tr);
        totalTemporadas += serie.temporada;
    });
    const promedio = totalTemporadas / series.length;
    promedioTemporadas.textContent = `Seasons average:  ${Math.floor(promedio)}`;
}

mostrarSeries();

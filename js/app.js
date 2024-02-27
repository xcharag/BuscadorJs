const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const maxYear = new Date().getFullYear();
const minYear = maxYear-10;

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos();
    llenarYearSelect();
})

function mostrarAutos(){
    autos.forEach(auto=>{
        const {marca,modelo,year,puertas,transmision,color,precio} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} ${modelo} -${year} -${puertas} puertas - Transmision:${transmision} -Precio:${precio}Bs -Color:${color}
        `;

        resultado.appendChild(autoHTML);
    })
}

function llenarYearSelect(){
    for (let i=maxYear; i>minYear;i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}
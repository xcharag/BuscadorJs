const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const maxYear = new Date().getFullYear();
const minYear = maxYear-10;
const marca = document.querySelector("#marca");
const precioMin = document.querySelector("#minimo");
const precioMax = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const filtros = document.querySelectorAll("#buscador select");

const datosBusqueda ={
    marca:'',
    year : '',
    precioMin: '',
    precioMax: '',
    puertas: '',
    transmision: '',
    color: ''
}

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos);
    llenarYearSelect();
    console.log(filtros);
})

marca.addEventListener('change',e=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})

precioMin.addEventListener('change',e=>{
    datosBusqueda.precioMin = e.target.value;
    filtrarAuto();
})

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarPrecioMin); //Vamos concatenando los filtros y vamos creando las funciones exactamente igual cambiando sus variables
    limpiarHTML();
    mostrarAutos(resultado);
    console.log(resultado);
}

function limpiarHTML(){
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if (marca){
        return auto.marca === marca;
    } return auto;
}

function filtrarPrecioMin(auto){
    const {precioMin} = datosBusqueda;
    if (precioMin){
        return auto.precio >= parseInt(precioMin);
    } return auto;
}

function mostrarAutos(autos){
    if (autos){
        autos.forEach(auto=>{
            const {marca,modelo,year,puertas,transmision,color,precio} = auto;
            const autoHTML = document.createElement('p');
            autoHTML.textContent = `
            ${marca} ${modelo} -${year} -${puertas} puertas - Transmision:${transmision} -Precio:${precio}Bs -Color:${color}
        `;

            resultado.appendChild(autoHTML);
        })
    } else {
        const sinCoincidencias = document.createElement('p');
        sinCoincidencias.textContent = 'Hola';
        sinCoincidencias.style.color = 'red';
        resultado.appendChild(sinCoincidencias);
    }
}

function llenarYearSelect(){
    for (let i=maxYear; i>minYear;i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}
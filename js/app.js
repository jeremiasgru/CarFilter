//VARIABLES
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados 
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}

//EVENTOS

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
    //Llena las opciones de años
    llenarSelect();
});

//Event Listener para los select de la busqueda 
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value                           //usamos el parametro con target y value para que nos arroje directamente el nombre de lo que selecc.
    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);                           //usamos el parametro con target y value para que nos arroje directamente el nombre de lo que selecc.
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value                           //usamos el parametro con target y value para que nos arroje directamente el nombre de lo que selecc.
    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value                           //usamos el parametro con target y value para que nos arroje directamente el nombre de lo que selecc.
    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);                           //usamos el parametro con target y value para que nos arroje directamente el nombre de lo que selecc.
    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value                           //usamos el parametro con target y value para que nos arroje directamente el nombre de lo que selecc.
    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value                           //usamos el parametro con target y value para que nos arroje directamente el nombre de lo que selecc.
    filtrarAuto();
});



//FUNCIONES

function mostrarAutos(autos) {
    
    limpiarHTML();
    
    autos.forEach(auto => {
        const {marca,modelo,year,precio,puertas,color,transmision} = auto // destructuring OJO TRATAR DE USAR PARA QUITAR CODIGO!!!
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `${marca} ${modelo} - ${year} - $${precio} - ${puertas} Puertas - ${color} - Transmision: ${transmision}`

        //Insertamos en el HTML
        resultado.appendChild(autoHTML);
    });
}

    //LIMPIAR HTML

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect() {
    for ( let i = max; i >= min; i-- ) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones al year
    }
}

//Funcion que filtra en base a la busqueda

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    if (resultado.length){
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
};

function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay resultados para estos filtros';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if (marca) {
        return auto.marca === marca
    } return auto;
};

function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if (year) {
        return auto.year === year
    } return auto;
};

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo
    } return auto;
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo
    } return auto;
}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas
    } return auto;
}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision
    } return auto;
}

function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if (color) {
        return auto.color === color
    } return auto;
}


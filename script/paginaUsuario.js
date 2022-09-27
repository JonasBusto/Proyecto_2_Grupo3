const divInyectarHeader = document.getElementById("inyectar-header");
let id = localStorage.getItem('id')
let localSTG = JSON.parse(localStorage.getItem('Usuarios')) || [];
let usuarioExistente = localSTG.filter(local => local.id === Number(id))

if (id !== null) {

    divInyectarHeader.innerHTML = `
  <div class="col-12 d-flex flex-column justify-content-center text-center pb-3">
  <h5 class="subtitulo-pregunta">Bienvenido a Rolling Resto, ${usuarioExistente[0].usuario}</h5>
  <h4>DISFRUTA DE NUESTRO MENU!</h4>
  <p class="subtitulo-ofertar-reserva">Busca el plato que desees, o simplemente prueba este plato
  destacado de la semana</p>
  </div>
  `
}

// Coloco en un array los datos del localStorage
let comidas = JSON.parse(localStorage.getItem('Comidas')) || [];

// Selecciono los elementos con los que trabajo
const productos = document.getElementById('productos');
const buscar = document.getElementById('buscar');

let comidasFiltradas = comidas;

const renderComidas = () => {

    productos.innerHTML = '';
    // Recorro el array para inyectar el código
    comidasFiltradas.forEach(comida => {
        // Creo el elemento HTML que contenga el codigo.
        const card = document.createElement('div');
        // Le agrego sus clases
        card.className = 'col-12 col-sm-6 col-lg-4';
        // Inyecto con template literals o backticks
        card.innerHTML = `<div class="card h-100">
                            <div class="card-body">
                                <img src="${comida.url}" class="card-img-top" alt="...">
                                <h5 class="card-title">${comida.nombre}</h5>
                                <p class="card-text">${comida.descripcion}</p>
                            </div>
                            <div class="card-footer bg-white border-0 precio-estilo">
                                $${comida.precio}
                            </div>
                            <div class="card-footer bg-white div-btn-ver-mas-usuario">
                                <button id="buy${comida.id}" class="btn btn-ver-mas-usuario">
                                  <a href="/entradaBlog.html?id=${comida.id}" >VER MÁS</a>
                                </button>
                            </div>
                        </div>`;
        // Hago un appendChild
        productos.appendChild(card);

    });
};

const buscarComida = () => {
    comidasFiltradas = comidas.filter(comida =>
        comida.nombre
            .toUpperCase()
            .includes(buscar.value.toUpperCase())
    );
    console.log(comidasFiltradas)
    renderComidas();
};

const buscarComidaCat = (categoria) => {
    comidasFiltradas = comidas.filter(comida =>
        comida.categoria
            .toUpperCase()
            .includes(categoria.toUpperCase())
    );
    renderComidas();
}
// Ejecuto las funciones
renderComidas();

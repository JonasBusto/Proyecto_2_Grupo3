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
      card.className = 'col';
      // Inyecto con template literals o backticks
      card.innerHTML = `<div class="card h-100">
                          <div class="card-body">
                            <img src="${comida.url}" class="card-img-top" alt="...">
                            <h5 class="card-title">${comida.nombre}</h5>
                            <p class="card-text">${comida.descripcion}</p>
                            </div>
                            <div class="card-footer bg-white border-0">
                                $${comida.precio}
                            </div>
                            <div class="card-footer bg-white">
                                <button id="buy${comida.id}" class="btn btn-verMas-estilo">
                                <a href="/entradaBlog.html?id=${comida.id}" >Ver más</a>
                            </button>
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
// DEFINO COMIDAS PRECARGADAS
class Comida {
    constructor(id, nombre, desc, cat, precio, url, destacado) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = desc;
        this.categoria = cat;
        this.precio = precio;
        this.url = url;
        this.destacado = destacado;
    }
}

// Cargo comidas en el localStorage
if (JSON.parse(localStorage.getItem("Comidas")) === null) {
    let arrayComidasInicial = [];

    // AGREGO 4 PIZZAS
    arrayComidasInicial.push(new Comida(0, "Pizza Capricciosa", "desc1_pizza", "Pizza", 390.50, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972860/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/pizza/pizza-capricciosa_hfgmx8.png", true));
    arrayComidasInicial.push(new Comida(1, "Pizza Sicilian", "desc2_pizza", "Pizza", 280.00, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972861/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/pizza/pizza-sicilian_pfk2fo.png", false));
    arrayComidasInicial.push(new Comida(2, "Pizza Margaritta", "desc3_pizza", "Pizza", 179.99, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972860/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/pizza/pizza-margaritta_qredlc.png", false));
    arrayComidasInicial.push(new Comida(3, "Pizza 4 Quesos", "desc4_pizza", "Pizza", 190.00, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972859/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/pizza/pizza-4-quesos-salame_n7jww3.png", false));

    // PLATO
    arrayComidasInicial.push(new Comida(4, "Bife + Papas Fritas + Huevos fritos", "desc1_plato", "Plato_especial", 500.00, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972849/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/platos/plato8_zktsj4.png", false));
    arrayComidasInicial.push(new Comida(5, "Bife + Papas Fritas + Tomates", "desc2_plato", "Plato_especial", 269.99, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972850/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/platos/plato9_lggbdi.png", false));
    arrayComidasInicial.push(new Comida(6, "Pollo + Verdura", "desc3_plato", "Plato_especial", 315.00, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972848/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/platos/plato4_losoh8.png", false));
    arrayComidasInicial.push(new Comida(7, "Verduras + Queso rallado", "desc4_plato", "Plato_especial", 400.30, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972848/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/platos/plato3_dolq7i.png", false));

    // POSTRES
    arrayComidasInicial.push(new Comida(8, "Crema + Frutilla + Banana", "desc1_postre", "Postre", 350.00, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972877/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/postre/postre1_bxkohc.png", false));
    arrayComidasInicial.push(new Comida(9, "Chocolate + Dulce de Leche", "desc2_postre", "Postre", 649.99, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972878/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/postre/postre2_xvedij.png", false));
    arrayComidasInicial.push(new Comida(10, "Frutilla + Anana", "desc3_postre", "Postre", 450.00, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972878/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/postre/postre3_vgajqy.png", false));
    arrayComidasInicial.push(new Comida(11, "Pastel de frutilla", "desc4_postre", "Postre", 274.99, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663972880/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/postre/postre6_bkp0ff.png", false));

    // PASTAS - FIDEOS
    arrayComidasInicial.push(new Comida(12, "Pasta con tallarines fettuccine", "desc1_pasta", "Pastas_fideos", 194.99, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663990910/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/pastas/fideos_tallarines_fettuccine_bbtc9p.png", false));
    arrayComidasInicial.push(new Comida(13, "Pasta con albondigas", "desc2_pasta", "Pastas_fideos", 399.99, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663990910/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/pastas/fideos_con_salsa_albondiga_l8fpm4.png", false));
    arrayComidasInicial.push(new Comida(14, "Pasta a la boloñesa al dente", "desc3_pasta", "Pastas_fideos", 499.99, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663990909/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/pastas/fideos_bolo%C3%B1esa_al_dente_sjyxab.png", false));
    arrayComidasInicial.push(new Comida(15, "Pasta con loncha de jamon", "desc4_pasta", "Pastas_fideos", 274.99, "https://res.cloudinary.com/dtccrvpzp/image/upload/v1663990909/RCS%20-%20Proyecto%202%20-%20Grupo%203-%202022/pastas/fideos_con_loncha_de_jamon_gj53zr.png", false));

    localStorage.setItem("Comidas", JSON.stringify(arrayComidasInicial));
}

if(JSON.parse(localStorage.getItem("Usuarios")) === null) {
    let arrayUsuariosInicial = [];
    arrayUsuariosInicial.push({id: 1, usuario: "Administrador", contraseña: "admin", role: "admin", habilitado: true});

    // USUARIO HABILITADO
    arrayUsuariosInicial.push({id: 2, usuario: "Rolling", contraseña: "rolling2022", role: "usuario", habilitado: true});
    
    // USUARIO INHABILITADO
    arrayUsuariosInicial.push({id: 3, usuario: "Grupo3", contraseña: "grupo3", role: "usuario", habilitado: false});

    localStorage.setItem("Usuarios", JSON.stringify(arrayUsuariosInicial));
}

const divInyectarDestacado = document.getElementById("inyectar-destacado");
const divInyectarPizzas = document.getElementById("inyectar-pizzas");
const divInyectarPlatosEsp = document.getElementById("inyectar-platos-esp");
const divInyectarPostres = document.getElementById("inyectar-postres");
const divInyectarPastasFideos = document.getElementById("inyectar-pastas-fideos");


function inyectarDestacado() {
    let localSTG = JSON.parse(localStorage.getItem("Comidas"));
    let indexDestacadoEncontrado = 0;
    for (let i = 0; i < localSTG.length; i++) {
        if (localSTG[i].destacado === true) {
            indexDestacadoEncontrado = i;
            i = localSTG.length;
        }
    }

    divInyectarDestacado.innerHTML = `
    <div class="col-12 col-md-6 d-flex flex-column justify-content-center text-center pb-3">
        <h5 class="subtitulo-pregunta">¿Estas con Hambre?</h5>
        <h4>NO ESPERES MAS!</h4>
        <p class="subtitulo-ofertar-reserva">Comienza reservando este plato destacado de la casa</p>
        <h5 class="destacado-nombre">${localSTG[indexDestacadoEncontrado].nombre}</h5>
        <p class="desc-plato-destacado">${localSTG[indexDestacadoEncontrado].descripcion}</p>
        <div class="d-flex justify-content-center">
            <a href="/entradaBlog.html?id=${localSTG[indexDestacadoEncontrado].id}" class="a-ordenar-estilo-header">VER MAS DETALLES</a>
        </div>
    </div>
    <div class="col-12 col-md-6 d-flex flex-column">
        <img src="${localSTG[indexDestacadoEncontrado].url}" class="img-fluid w-100 mt-2" alt="plato1.png">
        <div class="destacado d-flex justify-content-end">
            <h3 class="w-75">DESTACADO DE LA SEMANA</h3>
        </div>
    </div>
    `
}

const inyectarComidas = () => {
    let localSTG = JSON.parse(localStorage.getItem("Comidas"));

    // INYECTO LAS PIZZAS
    for (let i = 0; i < localSTG.length; i++) {

        if (localSTG[i].categoria === "Pizza") {
            const div = document.createElement("div");
            div.classList = "swiper-slide h-auto d-flex flex-column align-items-center justify-content-between text-center pb-3"

            div.innerHTML = `
                <div>
                    <img src="${localSTG[i].url}" class="img-fluid w-100"
                        alt="pizza_menu.png">
                </div>
                <div>
                    <div class="precio-info d-flex justify-content-end">
                        <h3><i class="fa-solid fa-dollar-sign"></i> ${localSTG[i].precio}</h3>
                    </div>
                    <h4 class="nombre-item">${localSTG[i].nombre}</h4>
                    <p>${localSTG[i].descripcion}</p>
                    <a id="btn-ver-mas${localSTG[i].id}" class="btn-ordenar-estilo">VER MAS</a>
                </div>
            
            `
            divInyectarPizzas.appendChild(div);

            // CREAR BOTONES PARA ACCEDER AL "VER MAS" YA QUE HAY UN BUG CON EL SWIPER SI USO "href"
            let btnVerMasSwiper = document.getElementById("btn-ver-mas" + localSTG[i].id);
            btnVerMasSwiper.addEventListener("click", () => {
                location.href = "/entradaBlog.html?id=" + localSTG[i].id;
            })
        }
    }

    // INYECTO PLATOS ESPECIALES
    for (let i = 0; i < localSTG.length; i++) {

        if (localSTG[i].categoria === "Plato_especial") {
            const div = document.createElement("div");
            div.classList = "swiper-slide h-auto d-flex flex-column align-items-center justify-content-between text-center pb-3"

            div.innerHTML = `
                <div>
                    <img src="${localSTG[i].url}" class="img-fluid w-100"
                        alt="pizza_menu.png">
                </div>
                <div>
                    <div class="precio-info d-flex justify-content-end">
                        <h3><i class="fa-solid fa-dollar-sign"></i> ${localSTG[i].precio}</h3>
                    </div>
                    <h4 class="nombre-item">${localSTG[i].nombre}</h4>
                    <p>${localSTG[i].descripcion}</p>
                    <a id="btn-ver-mas${localSTG[i].id}" class="btn-ordenar-estilo">VER MAS</a>
                </div>
            
            `
            divInyectarPlatosEsp.appendChild(div);

            // CREAR BOTONES PARA ACCEDER AL "VER MAS" YA QUE HAY UN BUG CON EL SWIPER SI USO "href"
            let btnVerMasSwiper = document.getElementById("btn-ver-mas" + localSTG[i].id);
            btnVerMasSwiper.addEventListener("click", () => {
                location.href = "/entradaBlog.html?id=" + localSTG[i].id;
            })
        }
    }

    // INYECTO POSTRES
    for (let i = 0; i < localSTG.length; i++) {

        if (localSTG[i].categoria === "Postre") {
            const div = document.createElement("div");
            div.classList = "swiper-slide h-auto d-flex flex-column align-items-center justify-content-between text-center pb-3"

            div.innerHTML = `
                <div>
                    <img src="${localSTG[i].url}" class="img-fluid w-100"
                        alt="pizza_menu.png">
                </div>
                <div>
                    <div class="precio-info d-flex justify-content-end">
                        <h3><i class="fa-solid fa-dollar-sign"></i> ${localSTG[i].precio}</h3>
                    </div>
                    <h4 class="nombre-item">${localSTG[i].nombre}</h4>
                    <p>${localSTG[i].descripcion}</p>
                    <a id="btn-ver-mas${localSTG[i].id}" class="btn-ordenar-estilo">VER MAS</a>
                </div>
            
            `
            divInyectarPostres.appendChild(div);

            // CREAR BOTONES PARA ACCEDER AL "VER MAS" YA QUE HAY UN BUG CON EL SWIPER SI USO "href"
            let btnVerMasSwiper = document.getElementById("btn-ver-mas" + localSTG[i].id);
            btnVerMasSwiper.addEventListener("click", () => {
                location.href = "/entradaBlog.html?id=" + localSTG[i].id;
            })
        }
    }

    // INYECTO PASTAS/FIDEOS
    for (let i = 0; i < localSTG.length; i++) {

        if (localSTG[i].categoria === "Pastas_fideos") {
            const div = document.createElement("div");
            div.classList = "swiper-slide h-auto d-flex flex-column align-items-center justify-content-between text-center pb-3"

            div.innerHTML = `
                <div>
                    <img src="${localSTG[i].url}" class="img-fluid w-100"
                        alt="pizza_menu.png">
                </div>
                <div>
                    <div class="precio-info d-flex justify-content-end">
                        <h3><i class="fa-solid fa-dollar-sign"></i> ${localSTG[i].precio}</h3>
                    </div>
                    <h4 class="nombre-item">${localSTG[i].nombre}</h4>
                    <p>${localSTG[i].descripcion}</p>
                    <a id="btn-ver-mas${localSTG[i].id}" class="btn-ordenar-estilo">VER MAS</a>
                </div>
            
            `
            divInyectarPastasFideos.appendChild(div);

            // CREAR BOTONES PARA ACCEDER AL "VER MAS" YA QUE HAY UN BUG CON EL SWIPER SI USO "href"
            let btnVerMasSwiper = document.getElementById("btn-ver-mas" + localSTG[i].id);
            btnVerMasSwiper.addEventListener("click", () => {
                location.href = "/entradaBlog.html?id=" + localSTG[i].id;
            })
        }
    }
}

inyectarDestacado();
inyectarComidas();










// CREO LOS SLIDER CON SWIPPER

let swiper = new Swiper(".menu-disponible", {
    slidesPerView: 4,
    spaceBetween: 30,
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        }
    }
});

var swiper2 = new Swiper(".carousel-presentacion", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination2",
    },
});

let swiper3 = new Swiper(".menu-opciones", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    // loop: true,
    autoplay: {
        delay: 2500,
    },
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    }
});


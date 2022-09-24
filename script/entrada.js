const divInyectarComidaHeader = document.getElementById("inyectar-comida-header");
const divInyectarDetallesComida = document.getElementById("inyectar-detalles-comida");
let captarID = Number(location.search.replace("?id=", ""));
let localSTG = JSON.parse(localStorage.getItem("Comidas"));

const inyectarComidaHeader = () => {
    divInyectarComidaHeader.innerHTML = 	`
    <div class="row m-0 flex-row">
        <div class="d-flex justify-content-center col-12 col-md-5">
            <img src="${localSTG[captarID].url}" class="img-fluid w-75 mt-2" alt="plato1.png">
        </div>
        <div class="d-flex col-12 col-md-7 flex-column text-center">
            <div class="d-flex flex-column align-items-center px-5">
                <h3>EL MEJOR PLATO</h3>
                <h1>${localSTG[captarID].nombre}</h1>
            </div>
            <h4>VALORACIÓN DEL PLATO</h4>

            <div class="d-flex justify-content-center">
                <div class="d-flex flex-row justify-content-center valoracion-plato-destacado">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="d-flex align-items-center">
                    <h3 class="m-0">4 / 5</h3>
                </div>
            </div>
            <div class="d-flex mt-3 justify-content-center div-btn-ordenar-comida">
                <button class="btn">Ordenar</button>
            </div>
        </div>
    </div>
    `
}

function inyectarDetallesComida() {
    divInyectarDetallesComida.innerHTML = `
    <div class="row m-0 justify-content-center">
        <div class="col-12">
            <h3 class="titulos">VER MAS DETALLES</h3>
            <div class="d-flex flex-column">
                <div>
                    <h4 class="sub-titulos">DESCRIPCION</h4>
                    <div>
                        <p>${localSTG[captarID].descripcion}</p>
                    </div>
                </div>
                <div>
                    <h4 class="sub-titulos">PRECIO Y CARACTERISTICAS</h4>
                    <div class="row m-0 justify-content-center">
                        <div
                            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex flex-column div-caracteristicas">
                            <div class="d-flex flex-column align-items-center mb-auto">
                                <i class="fa-solid fa-sack-dollar"></i>
                            </div>
                            <div class="d-flex flex-column justify-content-between text-center">
                                <h5>PRECIO</h5>
                                <p>${localSTG[captarID].precio}$</p>
                            </div>
                        </div>
                        <div
                            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex flex-column div-caracteristicas">
                            <div class="d-flex flex-column align-items-center mb-auto">
                                <i class="fa-regular fa-credit-card"></i>
                            </div>
                            <div class="d-flex flex-column justify-content-between text-center">
                                <h5>METODOS DE PAGOS</h5>
                                <p>Debido y Credito</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 class="sub-titulos">IMAGENES</h4>
                <div class="div-1er-swipper swiper mySwiper2">
                    <div class="swiper-wrapper div-swiper-img-grande">
                        <div class="swiper-slide">
                            <img src="/img/carousel-img1.png" />
                        </div>
                        <div class="swiper-slide">
                            <img src="img/carousel-img2.png" />
                        </div>
                        <div class="swiper-slide">
                            <img src="img/carousel-img3.png" />
                        </div>
                        <div class="swiper-slide">
                            <img src="/img/img1-carousel.jpg" />
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <div thumbsSlider="" class="w-50 d-none d-md-block swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="/img/carousel-img1.png" />
                        </div>
                        <div class="swiper-slide">
                            <img src="img/carousel-img2.png" />
                        </div>
                        <div class="swiper-slide">
                            <img src="img/carousel-img3.png" />
                        </div>
                        <div class="swiper-slide">
                            <img src="/img/img1-carousel.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-3 d-flex flex-column div-reseñas">
            <h4 class="sub-titulos">RESEÑAS</h4>
            <div class="d-flex flex-column">
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column w-auto mx-3 div-img-perfil">
                        <img src="/img/pizza/pizza-4-quesos-salame.png" class="img-fluid" alt="">
                    </div>
                    <div class="d-flex flex-column">
                        <div>
                            <h6>Pepe</h6>
                            <div class="d-flex flex-row valoracion">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <p class="mb-1">"Buen lugar mucha <b>variedad</b> y <b>buenos precios</b>"</p>
                        <div class="d-flex flex-row div-likes">
                            <p class="text-dark">¿Te gusta?</p>
                            <div class="mx-2 d-flex flex-row justify-content-between w-25">
                                <i class="fa-regular fa-thumbs-up"></i>
                                <i class="fa-regular fa-thumbs-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-3">
                <label for="exampleFormControlTextarea1" class="form-label label-comentario">REALIZAR
                    COMENTARIO (PROXIMAMENTE)</label>
                <h6>TU USUARIO: <b>Pepe</b></h6>
                <textarea class="form-control w-50" id="exampleFormControlTextarea1" rows="2"></textarea>
                <button id="btn-comentar" class="my-1">COMENTAR</button>
            </div>
        </div>
    </div>
    `
}




inyectarComidaHeader();
inyectarDetallesComida();

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
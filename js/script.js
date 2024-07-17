document.addEventListener("DOMContentLoaded", function() {
    // Arreglo con la información de los juegos
    const juegos = [
        { 
            nombre: "Albion Online", 
            detalles: "Albion Online es un MMORPG no lineal en el que escribes tu propia historia sin limitarte a seguir un camino prefijado, estrenado en 2017 para computador y dispositivos móviles. El juego se desarrolla en Albion, un mundo medieval ficticio. Donde los propios jugadores controlan el sistema económico del juego recolectando recursos, construyendo objetos y comerciando con ellos. También pueden luchar contra monstruos u otros jugadores, explorar el mundo y conquistar territorios y bienes.",
            precio: "Gratuito",
            imagen: "Albion Online.jpg",
            linkCompra: "Albion Online.html" // Enlace al archivo HTML de compra
        },
        { 
            nombre: "Sonic Dash", 
            detalles: "Sonic Dash es un videojuego móvil de carrera sin fin de 2013 desarrollado por Hardlight y publicado por Sega. Es el segundo juego de Sonic the Hedgehog de Hardlight, el primero fue el remake de Sonic Jump en 2012. El juego se lanzó en marzo de 2013 para iOS, en noviembre de 2013 para Android y diciembre de 2014 para Windows Phone y Microsoft Windows, junto con un lanzamiento de arcade en noviembre de 2015 como Sonic Dash Extreme . Inicialmente se lanzó como una aplicación de paga, pero se convirtió en un juego gratuito un mes después de su lanzamiento en iOS.",
            precio: "Gratuito",
            imagen: "Sonic Dash.jpg",
            linkCompra: "Sonic Dash.html" // Enlace al archivo HTML de compra
        },
        { 
            nombre: "Mario Bros", 
            detalles: "Mario Bros. es un videojuego de arcade desarrollado y publicado por Nintendo en 1983. Fue creado por Shigeru Miyamoto y Gunpei Yokoi, el ingeniero jefe de Nintendo. En el juego, Mario es retratado como un fontanero ítalo-estadounidense que, junto con su hermano menor Luigi, tiene que derrotar a las criaturas que han venido de las alcantarillas de Nueva York. El juego se centra en la exterminación de estas, volteándolas sobre sus espaldas y pateándolas.",
            precio: "Gratuito",
            imagen: "Mario bros.jpg",
            linkCompra: "Mario Bros.html" // Enlace al archivo HTML de compra
        },
        { 
            nombre: "The Legend of Zelda Links Awakening", 
            detalles: "The Legend of Zelda (ゼルダの伝説でんせつ Zeruda no Densetsu?) es una serie de videojuegos de acción-aventura creada por los diseñadores japoneses Shigeru Miyamoto y Takashi Tezuka y desarrollada por Nintendo, empresa que también se encarga de su distribución internacional. Su trama por lo general describe las heroicas aventuras del joven guerrero Link, que debe enfrentarse a peligros y resolver acertijos para ayudar a la Princesa Zelda a derrotar a Ganondorf y salvar su hogar, el reino de Hyrule.",
            precio: "Gratuito",
            imagen: "The-Legend-of-Zelda-Links-Awakening.jpg",
            linkCompra: "The legend of Zelda Links Awakening.html" // Enlace al archivo HTML de compra
        }
        // Agrega más juegos aquí si es necesario
    ];

    let currentIndex = 0;
    const carouselLarge = document.querySelector(".carousel-large");
    const thumbnailItems = document.querySelectorAll(".thumbnail-item");

    // Función para cambiar el juego en el cuadro grande
    function cambiarJuego(nombreJuego) {
        const juego = juegos.find(juego => juego.nombre === nombreJuego);
        if (juego) {
            carouselLarge.innerHTML = `
                <div class="carousel-item">
                    <img src="${juego.imagen}" alt="${juego.nombre}">
                    <div class="game-details">
                        <h1>${juego.nombre}</h1>
                        <p>${juego.detalles}</p>
                        <span class="price-tag">${juego.precio}</span>
                        <a href="${juego.linkCompra}" class="buy-button">Comprar Ahora</a>
                    </div>
                </div>
            `;
        }
    }

    // Función para cambiar automáticamente al siguiente juego
    function cambiarAutomaticamente() {
        currentIndex = (currentIndex + 1) % juegos.length;
        cambiarJuego(juegos[currentIndex].nombre);
    }

    // Temporizador para cambiar automáticamente al siguiente juego cada 5 segundos
    setInterval(cambiarAutomaticamente, 5000);

    // Mostrar el primer juego al cargar la página
    cambiarJuego(juegos[currentIndex].nombre);

    // Agregar evento de clic a cada miniatura
    thumbnailItems.forEach((item) => {
        item.addEventListener("click", function() {
            const nombreJuego = item.getAttribute("data-juego");
            currentIndex = juegos.findIndex(juego => juego.nombre === nombreJuego);
            cambiarJuego(nombreJuego);
        });
    });
});



const juegos = [
    { nombre: "Albion Online", detalle: "Albion Online.html" },
    { nombre: "Sonic", detalle: "Sonic.html" },
    { nombre: "Mario Bros", detalle: "Mario Bros.html" },
    { nombre: "The Legend of Zelda Links Awakening", detalle: "The Legend of Zelda Links Awakening.html" }
];

//Barra de busqueda funcional
function buscarJuego() {
    const input = document.getElementById('buscar-input').value.toLowerCase();
    const resultados = document.getElementById('resultados-busqueda');
    resultados.innerHTML = '';
    if (input) {
        const juegosFiltrados = juegos.filter(juego => juego.nombre.toLowerCase().includes(input));
        if (juegosFiltrados.length > 0) {
            juegosFiltrados.forEach(juego => {
                const p = document.createElement('p');
                p.textContent = juego.nombre;
                p.onclick = () => seleccionarJuego(juego.detalle);
                resultados.appendChild(p);
            });
            resultados.style.display = 'block';
        } else {
            resultados.style.display = 'none';
        }
    } else {
        resultados.style.display = 'none';
    }
}
        //funcion para que redirija a los detalles de cada juego
        function seleccionarJuego(detalle) {
            window.location.href = detalle;
        }

        

        //funcion de la carretilla
        document.addEventListener("DOMContentLoaded", function() {
            const cartIcon = document.getElementById("cart-icon");
            const cartModal = document.getElementById("cart-modal");
            const closeBtn = document.getElementsByClassName("close")[0];
            const cartItemsContainer = document.getElementById("cart-items");
            const cartTotalContainer = document.getElementById("cart-total");
            const buyButton = document.getElementById("buy-button");
        
            // Mostrar el modal del carrito
            cartIcon.onclick = function() {
                displayCartItems();
                cartModal.style.display = "block";
            };
        
            // Cerrar el modal del carrito
            closeBtn.onclick = function() {
                cartModal.style.display = "none";
            };
        
            // Cerrar el modal si se hace clic fuera de él
            window.onclick = function(event) {
                if (event.target === cartModal) {
                    cartModal.style.display = "none";
                }
            };
        
             // Función para mostrar los productos del carrito
            function displayCartItems() {
                const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
                cartItemsContainer.innerHTML = "";
                let total = 0;
        
                cartItems.forEach(item => {
                    const itemDiv = document.createElement("div");
                    itemDiv.innerHTML = `
                        <p>${item.name} - $${item.price} x ${item.quantity}</p>
                    `;
                    cartItemsContainer.appendChild(itemDiv);
                    total += item.price * item.quantity;
                });
        
        
                cartTotalContainer.innerHTML = `Total: $${total.toFixed(2)}`;
                updateCartQuantity();
            }
        
             // Actualizar la cantidad del carrito
             function updateCartQuantity() {
                const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
                const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
                cartIcon.setAttribute('data-quantity', totalQuantity);
            }
        
              // Acción del botón comprar
            buyButton.onclick = function() {
                alert("Compra realizada con éxito!");
                localStorage.removeItem("cartItems");
                cartModal.style.display = "none";
                updateCartQuantity();
            };
        
            // Inicializar la cantidad del carrito
            updateCartQuantity();
        });
        
        // Función para añadir productos al carrito desde otros HTML
        function addToCart(name, price, quantity) {
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            const itemIndex = cartItems.findIndex(item => item.name === name);
        
            if (itemIndex > -1) {
                cartItems[itemIndex].quantity += quantity;
            } else {
                cartItems.push({ name, price, quantity });
            }
        
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            alert("Producto añadido al carrito!");
            updateCartQuantity();
        }
        
        // Función para actualizar la cantidad del carrito
        function updateCartQuantity() {
            const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
            const cartIcon = document.getElementById("cart-icon");
            cartIcon.setAttribute('data-quantity', totalQuantity);
        }
        
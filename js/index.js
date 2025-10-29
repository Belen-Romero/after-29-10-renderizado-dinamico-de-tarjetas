//⚠️Detalle: la ruta de las imagenes las pongo como si el html las buscara
const arrayProductos = [
  {
    nombre: "Producto A",
    img: "./img/budin.jpg",
    precio: 1000,
    descripcion: "descripcion 1",
  },
  {
    nombre: "Producto B",
    img: "./img/pan.jpg",
    precio: 2000,
    descripcion: "descripcion 2",
  },
  {
    nombre: "Producto C",
    img: "./img/pancake.jpg",
    precio: 3000,
    descripcion: "descripcion 3",
  },
  {
    nombre: "Producto D",
    img: "./img/croissant.jpg",
    precio: 4000,
    descripcion: "descripcion 4",
  },
];

const mainContainer = document.getElementById("main-container");

let divTarjetas = document.createElement("div");
divTarjetas.classList.add("contenedor-tarjetas");

arrayProductos.forEach((producto) => {
  //Creo el article
  let tarjetaProducto = document.createElement("article");
  tarjetaProducto.classList.add("tarjeta-producto");

  //Creo imagen
  let imgProducto = document.createElement("img");
  //Le damos valor al atributo src
  imgProducto.src = producto.img;
  //⚠️Este width vendria de su css⚠️ aca lo agrego a mano solo por el ejemplo⚠️
  imgProducto.style.width = "20rem";

  //Creo el titulo
  let tituloProducto = document.createElement("h2");
  tituloProducto.classList.add("titulo-producto");

  //Creo el precio
  let precioProducto = document.createElement("p");
  precioProducto.classList.add("precio-producto");
  precioProducto.textContent = `Precio: $${producto.precio}`;

  //Creo descripcion
  let descripcion = document.createElement("p");
  descripcion.classList.add("descripcion-producto");
  descripcion.textContent = producto.descripcion;

  //Armo la tarjeta metiendo todos sus hijos (img, h2, p, p)
  tarjetaProducto.appendChild(imgProducto);
  tarjetaProducto.appendChild(tituloProducto);
  tarjetaProducto.appendChild(precioProducto);
  tarjetaProducto.appendChild(descripcion);

  divTarjetas.appendChild(tarjetaProducto);
});

mainContainer.appendChild(divTarjetas);

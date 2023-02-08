function getId(n) {
  console.log(n);
  axios
    .get("http://localhost:8080/api/productos/" + n)
    .then(function (response) {
      console.log(response.status);
      console.log(response.data);
      document.getElementById("nombreProducto").innerHTML =
        response.data.articulo.nombre;
      document.getElementById("nombrePrecio").innerHTML =
        response.data.articulo.precio;
    })
    .catch(function (error) {
      console.log(error);
    });
}
function getProductoById(n) {
  console.log(n);
  axios
    .get("http://localhost:8080/api/productos/" + n)
    .then(async function (response) {
      console.log('status',response.status);
      console.log(response.data);
      document.getElementById("nombreProducto").innerHTML =
        response.data.articulo.nombre;
      document.getElementById("nombrePrecio").innerHTML =
        "$" + response.data.articulo.precio + "MXN";
      document.getElementById("nombreDescripcion").innerHTML =
        response.data.articulo.descripcion;
      const miImagen = document.getElementById("nombreImagen");
      miImagen.src = response.data.articulo.url;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getNewCar(idArticulo, cantidad = 1) {
  

  if (document.getElementsByClassName("idCarritoTemporal").length == 0) {
    

    axios
      .post("http://localhost:8080/api/carrito/", {
        idArticulo,
        cantidad,
      })
      .then(async function (response) {
        console.log('status',response.status);
        let existingTag = document.getElementById("nombreCarrito");
        let newSpanTag = document.createElement("span");
        newSpanTag.id = response.data["0"]._id;
        newSpanTag.className = "idCarritoTemporal";

        existingTag.appendChild(newSpanTag);
      }) .then(()=>{
        const text = document.getElementsByClassName("itemsCarrito")[0].textContent;
      
        document.getElementsByClassName("itemsCarrito")[0].innerHTML = parseInt(text)+1
        
      })
      .catch(function (error) {
        
        console.log(error)
      });
  } else {
    console.log("Ya hay algo");

    let spanTags = document.getElementsByClassName("idCarritoTemporal");

    axios
      .post("http://localhost:8080/api/carrito/"+spanTags[0].id+"/productos", {
        
        idArticulo:idArticulo,
        cantidad:cantidad
      })
      .then(async function (response) {
        console.log(response.data);
      })
      .then(()=>{
        const text = document.getElementsByClassName("itemsCarrito")[0].textContent;
    
        document.getElementsByClassName("itemsCarrito")[0].innerHTML = parseInt(text)+1
        
      })
      .catch(function (error) {
        
        console.log(error);
      });
  }


}

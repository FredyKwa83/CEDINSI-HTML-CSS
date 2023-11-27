function consultarDatos(){
    fetch("info.json")
    .then(respuesta => {
        if(!respuesta.ok){
            throw new Error("no responde");
        }
        console.log(respuesta)
        return respuesta.json();
    })
    
    .then(data => {
        const listarProductos = document.querySelector("#listaProductos")  
        console.log(data);
        for (let i = 0; i < data.productos.length; i++) {
            const crearDiv = document.createElement("div")
            crearDiv.classList.add("producto")
            const crearImag = document.createElement("img")
            crearImag.classList.add("producto")
            crearImag.src = (data.productos[i].imagen)
            crearDiv.innerHTML = `
            <h3 class="nombre-producto">${data.productos[i].nombre}</h3>
            <p class="linea-roja" > Descuento: -${data.productos[i].descuento}%</p>
            <p> Precio: $${data.productos[i].precio}</p>
            `
            crearDiv.appendChild(crearImag)
            listarProductos.appendChild(crearDiv)
        }


    })
    
    .catch(error => {
        console.error(error, "error :(")
    })
}

consultarDatos()

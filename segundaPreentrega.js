let productos = [
    { 
        id: 1, 
        nombre: "Agenda de viaje", 
        categoria: "Producto", 
        precio: 1000
    },{ 
        id: 2, 
        nombre: "Calendario de fotos", 
        categoria: "Producto", 
        precio: 1500
    },{
        id: 3,
        nombre: "Servicio de Community Manager",
        categoria: "Servicio",
        precio: 2000,
    },{
        id: 4,
        nombre: "Servicio de Drone y Fotografia",
        categoria: "Servicio",
        precio: 3000,
    }
];


let seleccionGlobal = () => {

    let pregunta = prompt("¿Queres un Servicio o un Producto?").toLowerCase()

    let productoFiltrado = productos.filter(producto => producto.categoria.toLowerCase() == pregunta)

    let categoriaFiltrada

    productoFiltrado.forEach( e => {
        if ( e.categoria == "Servicio") {
            preguntaEspecifica = () => {
                let categoria1 = prompt("Ingrese 3 si desea el Servicio de Community Manager." + "\n" + "Ingrese 4 si desea el Servicio de Drone y Fotografia.")
                return categoriaFiltrada = categoria1
            }
        } else if (e.categoria == "Producto") {
            preguntaEspecifica = () => {
                let categoria1 = prompt("Ingrese 1 si desea el Producto Agenda de viaje." + "\n" +  "Ingrese 2 si deseea el Producto Calendario de fotos.")
                return categoriaFiltrada = categoria1
            }
        }
    })

    preguntaEspecifica()

    productoFiltrado.forEach( e => {

        if (e.id == categoriaFiltrada) {
            alert(`${e.nombre}, su precio es de:  ${e.precio}`)
            
        }
    })

}

seleccionGlobal()




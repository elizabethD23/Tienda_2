import {llenarTienda} from './tiendallenado.js'
import {ampliarInformacionProducto} from './ampliarinfo.js'

let producto={}

llenarTienda()

let modalinfo = new bootstrap.Modal(document.getElementById('modalinformacion'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
        producto=ampliarInformacionProducto(evento)
        console.log(producto)
        modalinfo.show()
    }
})

let carrito=[]
let botonAgrgarCarrito=document.getElementById("botonadd")
botonAgrgarCarrito.addEventListener("click",function(){

    let cantidad=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad
    
    carrito.push(producto)

    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    
    let capsula=document.getElementById("capsula") 
    capsula.textContent=suma
    capsula.classList.remove("invisible")

    console.log(carrito)

    modalinfo.hide()
})

let limpiar=document.getElementById("limpiar")
limpiar.addEventListener("click",function(){

    carrito=[]

    let capsula=document.getElementById("capsula") 
    capsula.classList.add("invisible")

})


let botonVerCarrito=document.getElementById("vercarrito")
botonVerCarrito.addEventListener("click",function(){

    let base=document.getElementById("basecarro")

    base.innerHTML=""

    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        columna1.appendChild(foto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)

    })

    modalcompra.show()
})


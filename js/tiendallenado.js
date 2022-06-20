export function llenarTienda(){

    let productosBD= [
        {foto: '../img/33.jpg', nombre: "Short deportivo verde", precio:"45000",descripcion:"Short deportivo verde"},
        {foto: '../img/13.jpg', nombre: "Balon de futbol", precio:"150000",descripcion:"Balon de futbol con decoraciones amarillas"},
        {foto: '../img/31.jpg', nombre: "Buso deportivo", precio:"98000",descripcion:"Buso corto deportivo"},
        {foto: '../img/35.jpg', nombre: "Conjunto deportivo", precio:"78000",descripcion:"Conjunto deportivo rosa"},
        {foto: '../img/45.jpg', nombre: "Gorra deportiva", precio:"45000",descripcion:"Short deportivo negro unisex"},
        {foto: '../img/10.jpg', nombre: "Pantaloneta", precio:"250000",descripcion:"Pantalonta deportiva"},
        {foto: '../img/14.jpg', nombre: "Balon de futbol", precio:"120000",descripcion:"Balon de futbol narajando"},
        {foto: '../img/41.jpg', nombre: "Medias deportivas", precio:"150000",descripcion:"Balon de futbol con decoraciones azules"},
        {foto: '../img/descarga.jpg', nombre: "Deportivo women", precio:"80000",descripcion:"Camisa comoda deportiva"},
      
        
       
        {foto: '../img/40.jpg', nombre: "Botas mercurial", precio:"78000",descripcion:"Conjunto deportivo rosa"},
    ]
    
    let fila=document.getElementById("fila")
    productosBD.forEach(function(producto){
        
        let columna=document.createElement("div")
        columna.classList.add("col")
    
       
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
      
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
    
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

      
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"
        
      
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(boton)
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    })
    


}




   
   
    










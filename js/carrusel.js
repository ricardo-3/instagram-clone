

 fetch("api/carrusel.json")
 .then((response) => response.json()) 
 .then((data)=> {
   for( i = 0; i < data.carrusel.length; i++) {
     const carruselHtml = 
    '<div class="historia"id="historia'+i+'"><img src="img/javascript.png"id="imagen'+i+'"alt="imagen"><p id="parrafo'+i+'"></p></div>'
      
    name = data.carrusel[i].nombre.substr(0,10)
    imag = data.carrusel[i].imgFoto
    urlCarrusel = data.carrusel[i].ruta
    
    
    const carrusel = document.querySelector("#historiasContainer");
           carrusel.insertAdjacentHTML('beforeend', carruselHtml);
           cargarCarrusel(name, imag, urlCarrusel)
        
   }

 })

   function cargarCarrusel(usuario, foto,) {
     
     const history = document.querySelector('#parrafo'+i)
     const img = document.querySelector('#imagen'+i)
     

     history.textContent = usuario;
     img.setAttribute('src',foto);
     

   } 

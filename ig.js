
 fetch("api/json.json")
     .then((response)=> response.json())
     .then((data) => maquetarPublicaciones(data))
    //  {
//        for (i = 0; i < data.posts.length; i++) {
//       var postHtml = '<div class="containerPost"><article class="post"><header class="headerPost"><img class="imgLike" width="30" height="30" id="userFoto'+i+'"/><h6 class="userName" id="usuarioss'+i+'"> &nbsp;</h6></header> <button class="moreOptions"><svg aria-label="Más opciones" class="points" fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg></button><hr><div class="photo"><img  class="card-img-top" alt="..." id="fotoPost'+i+'"></div><div class="menuPost"><svg aria-label="Me gusta"  fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg><svg aria-label="Comentar"  fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg><svg aria-label="Guardar"  fill="#262626" height="24" viewBox="0 0 48 48" width="24" class="bookmark"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>  </div><div class="likesPost"><img src="img/sergioUser.jpg" class="imgLike" width="20" height="20"/><p class="userLike">Les gusta a Sergio Denis, pipo, popo </p></div><div class="comentPost"><span class="userComent" >Paz Martinez</span><p class="coment"> &nbsp;"Que par de pajaron los 2"</p></div><br><div class="moreComents"><span class="userComent">Sergio Denis</span><p class="coment">&nbsp; "La vida vale la pena"</p></div><p class="timePost">HACE 5 HORAS</p><hr><input type="text" placeholder="Agregar un comentario" class="newComent"> <a href="" class="publicar">Publicar</a></article></div>'
//         console.log(data);
//       usuario = data.posts[i].usuario
//       foto = data.posts[i].Foto
//       urlPost =  data.posts[i].url

//      const posts = document.querySelector("#postContainer");
//      posts.insertAdjacentHTML('beforeend', postHtml);
//         cargarDatosPost(usuario, urlPost, foto)
//         }
//      })
// function cargarDatosPost(user, urlFoto, fotoUser){
//     const userDiv = document.querySelector('#usuarioss'+i);
//     const otro = document.querySelector('#userFoto'+i);
//     const fotoPost = document.querySelector('#fotoPost'+i);
//     userDiv.textContent = user;
//     fotoPost.setAttribute('src',urlFoto);
//     otro.setAttribute('src',fotoUser);

// }

function maquetarPublicaciones(data){
const contenido = data.posts.reduce((acu,publicacion, index)=>{
//    const usuario = publicacion.usuario
//    const foto = publicacion.Foto
//    const urlPost =  publicacion.url
   const {usuario, Foto, url} = publicacion;
    return acu+tema(usuario, Foto, url, index)

}, "")
const posts = document.querySelector("#postContainer");
posts.innerHTML = contenido;
}
function tema(usuario, fotoUser, urlPost, index){
return  `<div class="containerPost">
<article class="post">
<header class="headerPost">
<img class="imgLike" width="30" height="30" id=${"userFoto"+index} src=${fotoUser}/>
<h6 class="userName" id=${"usuarioss"+index}> &nbsp; ${usuario}</h6>
</header> 
<button class="moreOptions">
<svg aria-label="Más opciones" class="points" fill="#262626" height="16" viewBox="0 0 48 48" width="16">
<circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
<circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
<circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
</button><hr><div class="photo"><img  class="card-img-top" alt="..." id=${"fotoPost"+index} src=${urlPost}>
</div><div class="menuPost"><svg aria-label="Me gusta"  fill="#262626" height="24" viewBox="0 0 48 48" width="24">
<path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg><svg aria-label="Comentar"  fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg><svg aria-label="Guardar"  fill="#262626" height="24" viewBox="0 0 48 48" width="24" class="bookmark">
<path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>  </div>
<div class="likesPost"><img src="img/sergioUser.jpg" class="imgLike" width="20" height="20"/>
<p class="userLike">Les gusta a Sergio Denis, pipo, popo </p></div><div class="comentPost"><span class="userComent" >Paz Martinez</span><p class="coment"> &nbsp;"Que par de pajaron los 2"</p></div><br><div class="moreComents"><span class="userComent">Sergio Denis</span><p class="coment">&nbsp; "La vida vale la pena"</p></div><p class="timePost">HACE 5 HORAS</p><hr>
<input type="text" placeholder="Agregar un comentario" class="newComent"> <a href="" class="publicar">Publicar</a></article></div>`

}
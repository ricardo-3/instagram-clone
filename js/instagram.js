var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swiperWrapper = document.querySelector("#swiperWrapper");

fetch("./api/historias.json")
.then((rest)=>rest.json())
.then((rest)=>historias(rest))




function historiaItem(his){
  return`
 <div>
  <img src="${his.foto}" /> 
  <p>${his.usuario}</p> 
 </div>
`
}

function historias(rest) {
  const valor = rest.reduce((acumulador, item)=>{
   return acumulador + historiaItem(item)
  },"")
 swiperWrapper.innerHTML=valor 

} 


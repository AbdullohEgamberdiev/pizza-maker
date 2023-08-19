// 'use strict';

const mainLogoElement = document.querySelector("a"),
      pizzaTitleElement = document.querySelector("h2"),
      tomatoCircle = document.querySelector(".pizza__tomato"),
      tomatoInput = document.getElementById("check__tomato"),
      sausages = document.getElementsByClassName(".market__sausage"),
      sausageInput = document.getElementById("check__sausage"),
      olives = document.getElementsByClassName(".olives"),
      olivesInput = document.getElementById("check__olives"),
      hensInput = document.getElementById("check__hens"),
      hens = document.getElementsByClassName(".hens__meat"),
      cheeseInput = document.getElementById("check__cheese"),
      cheese = document.getElementsByTagName("div"),
      tomatoesInput = document.getElementById("check__tomatoes"),
      tomatoes = document.getElementsByClassName(".tomatoes"),
      sausage = document.querySelector(".sausage"),
      sausage1 = document.querySelector(".sausage1"),
      sausage2 = document.querySelector(".sausage2"),
      sausage3 = document.querySelector(".sausage3"),
      sausage4 = document.querySelector(".sausage4"),
      sausage5 = document.querySelector(".sausage5"),
      sausage6 = document.querySelector(".sausage6"),
      sausage7 = document.querySelector(".sausage7"),
      sausage8 = document.querySelector(".sausage8"),
      sausage9 = document.querySelector(".sausage9"),
      sausage10 = document.querySelector(".sausage10"),
      sausage11 = document.querySelector(".sausage11"),
      sausage12 = document.querySelector(".sausage12"),
      olive = document.querySelector(".olive"),
      olive1 = document.querySelector(".olive1"),
      olive2 = document.querySelector(".olive2"),
      olive3 = document.querySelector(".olive3"),
      olive4 = document.querySelector(".olive4"),
      olive5 = document.querySelector(".olive5"),
      olive6 = document.querySelector(".olive6"),
      olive7 = document.querySelector(".olive7"),
      olive8 = document.querySelector(".olive8"),
      olive9 = document.querySelector(".olive9"),
      hen = document.querySelector(".hen__meat"),
      hen1 = document.querySelector(".hen__meat1"),
      hen2 = document.querySelector(".hen__meat2"),
      hen3 = document.querySelector(".hen__meat3"),
      hen4 = document.querySelector(".hen__meat4"),
      hen5 = document.querySelector(".hen__meat5"),
      hen6 = document.querySelector(".hen__meat6"),
      hen7 = document.querySelector(".hen__meat7"),
      hen8 = document.querySelector(".hen__meat8"),
      hen9 = document.querySelector(".hen__meat9"),
      cheese1 = document.querySelector(".cheese"),
      tomato = document.querySelector(".tomato"),
      tomato1 = document.querySelector(".tomato1"),
      tomato2 = document.querySelector(".tomato2"),
      tomato3 = document.querySelector(".tomato3"),
      tomato4 = document.querySelector(".tomato4"),
      tomato5 = document.querySelector(".tomato5"),
      tomato6 = document.querySelector(".tomato6"),
      tomato7 = document.querySelector(".tomato7"),
      tomato8 = document.querySelector(".tomato8"),
      tomato9 = document.querySelector(".tomato9");

let price = 1;
  document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;

//          SAUSAGES STYLE DISPLAY NONE
sausage.style.display = 'none';
sausage1.style.display = 'none';
sausage2.style.display = 'none';
sausage3.style.display = 'none';
sausage4.style.display = 'none';
sausage5.style.display = 'none';
sausage6.style.display = 'none';
sausage7.style.display = 'none';
sausage8.style.display = 'none';
sausage9.style.display = 'none';
sausage10.style.display = 'none';
sausage11.style.display = 'none';
sausage12.style.display = 'none';

//          OLIVES STYLE DISPLAY NONE
olive.style.display = 'none';
olive1.style.display = 'none';
olive2.style.display = 'none';
olive3.style.display = 'none';
olive4.style.display = 'none';
olive5.style.display = 'none';
olive6.style.display = 'none';
olive7.style.display = 'none';
olive8.style.display = 'none';
olive9.style.display = 'none';

//          HENS STYLE DISPLAY NONE
hen.style.display = 'none';
hen1.style.display = 'none';
hen2.style.display = 'none';
hen3.style.display = 'none';
hen4.style.display = 'none';
hen5.style.display = 'none';
hen6.style.display = 'none';
hen7.style.display = 'none';
hen8.style.display = 'none';
hen9.style.display = 'none';

//          CHEESE STYLE DISPLAY NONE
cheese1.style.display = 'none';

//          TOMATO STYLE DISPLAY NONE
tomato.style.display = 'none';
tomato1.style.display = 'none';
tomato2.style.display = 'none';
tomato3.style.display = 'none';
tomato4.style.display = 'none';
tomato5.style.display = 'none';
tomato6.style.display = 'none';
tomato7.style.display = 'none';
tomato8.style.display = 'none';
tomato9.style.display = 'none';

  // TOMATO SAUCE INPUT START
tomatoInput.addEventListener("input" , (e) => {
  e.preventDefault();
  if (tomatoInput.checked === true) {
    price += 5;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    tomatoCircle.style.display = 'block';
  } else {
    price -= 5;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    tomatoCircle.style.display = 'none';
  }
})

// SAUSAGE INPUT START

sausageInput.addEventListener("input" , (e) => {
  e.preventDefault();
  if (sausageInput.checked === true) {
    price += 8;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    sausage.style.display = 'block';
    sausage1.style.display = 'block';
    sausage2.style.display = 'block';
    sausage3.style.display = 'block';
    sausage4.style.display = 'block';
    sausage5.style.display = 'block';
    sausage6.style.display = 'block';
    sausage7.style.display = 'block';
    sausage8.style.display = 'block';
    sausage9.style.display = 'block';
    sausage10.style.display = 'block';
    sausage11.style.display = 'block';
    sausage12.style.display = 'block';
  } else {
    price -= 8;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    sausage.style.display = 'none';
    sausage1.style.display = 'none';
    sausage2.style.display = 'none';
    sausage3.style.display = 'none';
    sausage4.style.display = 'none';
    sausage5.style.display = 'none';
    sausage6.style.display = 'none';
    sausage7.style.display = 'none';
    sausage8.style.display = 'none';
    sausage9.style.display = 'none';
    sausage10.style.display = 'none';
    sausage11.style.display = 'none';
    sausage12.style.display = 'none';
  }
})



olivesInput.addEventListener("input" , (e) => {
  e.preventDefault();
  if (olivesInput.checked === true) {
    price += 6;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    olive.style.display = 'block';
    olive1.style.display = 'block';
    olive2.style.display = 'block';
    olive3.style.display = 'block';
    olive4.style.display = 'block';
    olive5.style.display = 'block';
    olive6.style.display = 'block';
    olive7.style.display = 'block';
    olive8.style.display = 'block';
    olive9.style.display = 'block';
  } else {
    price -= 6;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    olive.style.display = 'none';
    olive1.style.display = 'none';
    olive2.style.display = 'none';
    olive3.style.display = 'none';
    olive4.style.display = 'none';
    olive5.style.display = 'none';
    olive6.style.display = 'none';
    olive7.style.display = 'none';
    olive8.style.display = 'none';
    olive9.style.display = 'none';
  }
})


hensInput.addEventListener("input" , (e) => {
  e.preventDefault();
  if (hensInput.checked === true) {
    price += 15;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    hen.style.display = 'block';
    hen1.style.display = 'block';
    hen2.style.display = 'block';
    hen3.style.display = 'block';
    hen4.style.display = 'block';
    hen5.style.display = 'block';
    hen6.style.display = 'block';
    hen7.style.display = 'block';
    hen8.style.display = 'block';
    hen9.style.display = 'block';
  } else {
    price -= 15;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    hen.style.display = 'none';
    hen1.style.display = 'none';
    hen2.style.display = 'none';
    hen3.style.display = 'none';
    hen4.style.display = 'none';
    hen5.style.display = 'none';
    hen6.style.display = 'none';
    hen7.style.display = 'none';
    hen8.style.display = 'none';
    hen9.style.display = 'none';
  }
})


cheeseInput.addEventListener("input" , (e) => {
  e.preventDefault();
  if (cheeseInput.checked === true) {
    price += 12;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    cheese1.style.display = 'block';
  } else {
    price -= 12;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    cheese1.style.display = 'none';
  }
})



tomatoesInput.addEventListener("input" , (e) => {
  e.preventDefault();
  if (tomatoesInput.checked === true) {
    price += 5;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    tomato.style.display ='block';
    tomato1.style.display ='block';
    tomato2.style.display ='block';
    tomato3.style.display ='block';
    tomato4.style.display ='block';
    tomato5.style.display ='block';
    tomato6.style.display ='block';
    tomato7.style.display ='block';
    tomato8.style.display ='block';
    tomato9.style.display ='block';
  } else {
    price -= 5;
    document.querySelector(".price__title").textContent = `Pizza's price : ${price} $`;
    tomato.style.display ='none';
    tomato1.style.display ='none';
    tomato2.style.display ='none';
    tomato3.style.display ='none';
    tomato4.style.display ='none';
    tomato5.style.display ='none';
    tomato6.style.display ='none';
    tomato7.style.display ='none';
    tomato8.style.display ='none';
    tomato9.style.display ='none';
  }
})














setInterval(() => {
  mainLogoElement.classList.toggle("logo__link")
}, 1000);

setInterval(() => {
  pizzaTitleElement.classList.toggle("pizza__title")
}, 500);
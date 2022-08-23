// DOM - Document object model
// document - это объект нашей HTML разметки, точка входа



///////////////////////// Создание элементов /////////////////////////////////

// const h1 = document.createElement('h1')
// h1.textContent = 'Java Script - DOM'

// const p = document.createElement('p')
// p.textContent = 'Параграф - p'

// const span = document.createElement('span')
// span.textContent = 'Строчный тег -  span'

// const div = document.createElement('div')
// div.innerHTML = 'Random TEXT in div'
// div.innerHTML = '<h2>IT IS H2 in DIV</h2>'
// div.innerHTML = `
// <h2>h2</h2>
// <ul>
// <li>item1</li>
// <li>item2</li>
// <li>item3</li>
// <li>item4</li>
// <li>item5</li>
// </ul>
// `


///////////////////////// Стилизация внутри JS ///////////////////////////////

// const box = document.createElement('div')

// для написания стилей по отдельности
// box.style.width = '400px'
// box.style.height = '400px'
// box.style.background = 'red'
// box.style.boxShadow = '0px 0px 20px 5px #000'

// Для написания нескольких стилей одновременно

// box.style.cssText = `
// width: 200px;
// height: 200px;
// background: purple;
// box-shadow: 0px 0px 20px 5px greenyellow;
// `



///////////////////////// Получение элемента(ов) из HTML ////////////////////////

// Получение по id

// const input1 = document.getElementById('inp1')
// input1.style.width = '500px'

// const input2 = document.getElementById('inp2')
// input2.style.background = 'red'

//////////////////////// Получение по тегам ///////////////////////////////////

// const spans = document.getElementsByTagName('span') // Возвращает псевдо массив элементов
// console.log(spans[0]);
// console.log(spans[1]);
// console.log(spans[2]);

// spans[0].style.background = 'purple'

// for (let i = 0; i < spans.length; i++) {
//     if (i == 0) {
//         spans[0].style.background = 'red'
//     } else if (i == 1) {
//         spans[1].style.background = 'yellow'
//     } else if (i == 2) {
//         spans[2].style.background = 'green'
//     }
// }

//////////////////////// Получение по классам ///////////////////////////////////

// const spans = document.getElementsByClassName('span') // Возвращает псевдо массив элементов
// console.log(spans);


//////////////////////// Получение по селектору ////////////////////////////////
// Обращение по селектору тега
// const h1 = document.querySelector('h1')

//Обращение по селектору id
// const input1 = document.querySelector('#inp1')

//Обращение по селектору класса
// const span = document.querySelectorAll('.span')
// console.log(span);

/////////////////////// Работа с атрибутами //////////////////////////////////

// const img = document.createElement('img')
// img.setAttribute('src', './img/20200628_231525.jpg')
// img.src = './img/20200628_231525.jpg'
// img.style.width = '200px'

////////////////////// Работа с классами /////////////////////////////////////

// const h1 = document.querySelector('h1')
// const p = document.querySelector('p')
// const input = document.querySelectorAll('input')

// h1.className = 'title' // первый способ
// h1.classList.add('title') // второй способ (добавляет)
// p.classList.add('text')

// p.classList.remove('text') // удаление классов

// for (let i = 0; i < input.length; i++) {
//     input[i].classList.add('test')
// }






//////////////////////// Добавление элемента в HTML ////////////////////////////
// append - Добавляет созданный элемент в конец

// const body = document.body
// body.append(h1)
// body.append(p)
// body.append(span)
// body.append(h1, p, span)
// body.append(box)
// body.append(img)

// Prepend -  добавляет созданный элемент в начало

// body.append(h1, p, div)



const body = document.body
const header = document.createElement('header')
const div = document.createElement('div')
const logo_block = document.getElementsByClassName('logo_block')
logo_block.classList.add('logo_block')
const img_logo = document.createElement('img')
img_logo.src = './img/Logo.png'
img_logo.alt = 'Logo'
const h1
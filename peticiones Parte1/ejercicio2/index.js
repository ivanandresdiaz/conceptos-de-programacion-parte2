const button=document.getElementById('button');
const container=document.getElementById('container');
var imgUrl;
button.addEventListener('click',insertarImg);
async function insertarImg(){
    const scroll=document.createElement('scroll-page');
    scroll.classList.add('scroll-item');
    button.setAttribute('disabled','disabled');
    const elementoCreado=document.createElement('img');
    elementoCreado.setAttribute('src',`${imgUrl}`);
    scroll.appendChild(elementoCreado)
    container.appendChild(scroll);
    await renderPage()
    button.removeAttribute('disabled','disabled');
}
async function renderPage(){
    const response= await fetch('https://dog.ceo/api/breeds/image/random');
    data= await response.json();
    imgUrl=data.message;
    }
renderPage()
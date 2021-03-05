const API='https://api.github.com/users/';
const input=document.getElementById('input');
const button=document.getElementById('button');
const container=document.querySelector('#container');
var usuarioGitHub;
input.addEventListener('blur',(event)=>{
    usuarioGitHub=event.target.value;
});
button.addEventListener('click',async()=>{
    try {
        const response= await fetch(`https://api.github.com/users/${usuarioGitHub}`);    
        const data= await response.json();
        container.innerHTML=`
        <h1>Resultados</h1>
        <h4>Nombre</h4>
        <p>${data.name}</p>
        <h4>foto</h4>
        <img src="${data.avatar_url}" alt="">
        <h4>Numero de respositorios</h4>
        <p>${data.public_repos}</p>
        `
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
})

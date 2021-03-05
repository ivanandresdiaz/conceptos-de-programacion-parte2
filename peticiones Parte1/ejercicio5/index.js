const span=document.querySelector('#span');
const button=document.querySelector('#button');
const container=document.querySelector('#container');
//no encontre en la documentacion del API las razas ordenadas, solo encontre una pagina done aparecian dentro de un INPUT
const API= 'https://dog.ceo/api/breeds/list/all';
var razasArray;
(async function getData(){
    const response= await fetch(API);
    data= await response.json();
    razasArray=Object.entries(data.message);
})()
const url='https://dog.ceo/api/breed/Affenpinscher/images/random';
button.addEventListener('click',()=>{
    button.setAttribute('disabled','disabled');
    const numeroRandom=Math.floor(Math.random()*(razasArray.length+1));
    let nombrePrincipalRaza=razasArray[numeroRandom][0];
    if(razasArray[numeroRandom][1].length===0){
        span.innerHTML=nombrePrincipalRaza;
    }else{
        let pregunta=[];
        for(i=0;i<razasArray[numeroRandom][1].length;i++){
            pregunta.push(`${i}.${razasArray[numeroRandom][1][i]}`);
        }
        var preguntaConcatenada;
        for(i=0;pregunta.length>i;i++){
            if(i===0){
                preguntaConcatenada=pregunta[i];    
            }else{
                preguntaConcatenada=preguntaConcatenada.concat(', ', pregunta[i]);
            }
        }
        console.log(preguntaConcatenada);
        const razaEspecifica= prompt(`la raza de perro ${nombrePrincipalRaza.toUpperCase()} tiene ${razasArray[numeroRandom][1].length} variables. elije un numero del 0 hasta el ${pregunta.length-1}:
            ${preguntaConcatenada};
        `);
        if(razaEspecifica>(pregunta.length-1) || razaEspecifica<0){
            span.innerHTML=`${nombrePrincipalRaza}-seleccionaste mal el tipo, da click de nuevo en el boton`;
        }else{
            span.innerHTML=`${nombrePrincipalRaza}-${razasArray[numeroRandom][1][razaEspecifica]}`
        }
        
    };
    const APIRandomPicture=`https://dog.ceo/api/breed/${nombrePrincipalRaza}/images/random`;
    (async function getDataRandomImage(){
        const response= await fetch(APIRandomPicture);
        const data=await response.json();
        const imagenSrc=data.message;
        container.innerHTML=`<img src="${imagenSrc}" alt="${nombrePrincipalRaza}">`;
        button.removeAttribute('disabled','disabled');        
        console.log(data);
    })()
})

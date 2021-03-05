const API='https://api.github.com/orgs/';
const input=document.querySelector('#input');
const button=document.querySelector('#button');
const container=document.querySelector('#container');
var orgName;
input.addEventListener('blur',(event)=>{

    orgName=event.target.value;
    console.log(orgName);
});
button.addEventListener('click',async ()=>{
    if(orgName){
        const response= await fetch(`${API}${orgName}/repos`);
        const data= await response.json();
        console.log(data);
        for(i=0;i<data.length;i++){
            const nombreRepositorio=data[i].name;
            const createElement=document.createElement('li');
            const textContent=document.createTextNode(nombreRepositorio);
            createElement.appendChild(textContent)
            container.appendChild(createElement);
        }
    }else{
        alert('nombre de organizacion No valido, intete de Nuevo');
    }
    
});
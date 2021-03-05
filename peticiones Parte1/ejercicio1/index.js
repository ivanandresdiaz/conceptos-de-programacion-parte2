fetch('https://api.rand.fun/number/integer')
    .then(function(response) {    
            return response.json();  
        }
    ).then(function(data) {     
            document.body.innerHTML = data.result;  
    }
);
console.log('INFO: la documentacion tiene un problema interno del Servidor');
var textoIngresado = document.querySelector('#caja-textoIngresado');
var textoEncriptado = document.querySelector('#caja-textoEncriptado');
var alerta = document.querySelector('#instrucciones');
var botonEncriptar = document.querySelector('#boton-encriptar');
var botonDesencriptar = document.querySelector('#boton-desencriptar');
var busqueda = document.querySelector('.contenedor-busqueda');
var leyenda = document.querySelector('.contenedor-leyenda');
var copiar = document.querySelector('#boton-copiar');
// copiar.style.visibility = 'hidden';

botonEncriptar.addEventListener('click', function(){
    if(textoIngresado.value != ''){
        var texto = Array.from(textoIngresado.value);
        for(var i=0; i<= texto.length; i++){

            switch(texto[i]){
                case 'e':
                    texto[i] = "enter";
                break;
                case 'i':
                    texto[i] = "imes";
                break;
                case 'a':
                    texto[i] = "ai";
                break;
                case 'o':
                    texto[i] = "ober";
                break;
                case 'u':
                    texto[i] = "ufat";
                break;
            }
        }
        busqueda.style.visibility = 'hidden';
        busqueda.style.transition = '0.3s';
        textoIngresado.value= '';
        var textFormateado = texto.toString();
        textoEncriptado.value = textFormateado.replace(/,/g,"");
      
        copiar.style.visibility = 'initial';
    }else{
        alerta.innerHTML = "<label style='color:red;'>¡ Campo vacio ! ingrese palabra a encriptar</label>";
        setTimeout(function(){

            alerta.innerHTML = "¡ Solo letras en minuscula y sin acento !"
        },5000);
    }
    
});

botonDesencriptar.addEventListener('click', function(){
    var textoCapturado = textoEncriptado.value;
    var textoFormateado = textoCapturado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    
    textoIngresado.value = textoFormateado;
});

textoEncriptado.addEventListener('focus', function(){
    busqueda.style.visibility = 'hidden';
    busqueda.style.transition = '0.5s';
});
textoEncriptado.addEventListener('blur', function(){
    if(textoEncriptado.value == ''){

        busqueda.style.visibility = 'initial';
        busqueda.style.transition = '0.5s';
    }
});

copiar.addEventListener('click', function(){
    if(textoEncriptado.value != ""){
        navigator.clipboard.writeText(textoEncriptado.value);
        if(textoEncriptado.value != "No se puede copiar, no hay texto."){

            alert("Texto "+ textoEncriptado.value +" copiado");
        }
        textoEncriptado.value = "";
        busqueda.style.visibility = 'initial';
        busqueda.style.transition = '0.5s';
    }else{
        textoEncriptado.value = "No se puede copiar, no hay texto.";
        setTimeout(function(){

            textoEncriptado.value = "";
        },3000);
    }
});
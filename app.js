let textoIngresado = document.querySelector(".area-input");
let mensajeResultado = document.querySelector(".area-resultado");
let btnCopiar = document.querySelector(".btn-copiar")

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar(){
    let contenido = textoIngresado.value;
    let textoEncriptado = contenido.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/, 'ufat');
    function minusculaNoAcentos(texto){
        let minusculas = texto === texto.toLowerCase();
        let sinAcentos = !/[áéíóúÁÉÍÓÚ]/.test(texto);
        return minusculas && sinAcentos;
    }
    if(minusculaNoAcentos(contenido)){
        mensajeResultado.value = textoEncriptado;
        textoIngresado.value = '';
        mensajeResultado.style.backgroundImage = 'none';
        btnCopiar.style.display = 'inline';
        Swal.fire(
            {
            title: "Texto encriptado correctamente",
            icon: 'success',
            iconColor:'var(--color-primario)',
            width: 'fit-content',
            background: 'var(--color-secundario)',
            color:'var(--color-primario)',
            timer:'3000',
            timerProgressBar:true,
            toast:true,
            position:'top-end',
            showConfirmButton:false,
            }
        )
    }else{
        Swal.fire(
            {
            title: "El texto no debe tener mayúsculas o acentos",
            icon: 'error',
            iconColor:'var(--color-primario)',
            width: 'fit-content',
            background: 'var(--color-secundario)',
            color:'var(--color-primario)',
            timer:'3000',
            timerProgressBar:true,
            toast:true,
            position:'top-end',
            showConfirmButton:false,
            }
        )

    }
}

function desencriptar(){
    let contenido = textoIngresado.value;
    textoDesencriptado = contenido.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/, 'u');
    mensajeResultado.value = textoDesencriptado;
    textoIngresado.value = '';
    Swal.fire(
        {

        title: "Texto desencriptado correctamente",
        icon: 'success',
        iconColor:'var(--color-primario)',
        width: '30%',
        background: 'var(--color-secundario)',
        color:'var(--color-primario)',
        timer:'2000',
        timerProgressBar:true,
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        }
    )
}
btnCopiar.addEventListener("click", () => {
    try{
        navigator.clipboard.writeText(mensajeResultado.value);
        Swal.fire(
            {
            title: "Texto copiado correctamente",
            icon: 'success',
            iconColor:'var(--color-primario)',
            width: 'fit-content',
            background: 'var(--color-secundario)',
            color:'var(--color-primario)',
            timer:'3000',
            timerProgressBar:true,
            toast:true,
            position:'top-end',
            showConfirmButton:false,
            }
        )
    }
    catch(error){   
        Swal.fire(
            {
            title: "No se ha podido copiar el texto",
            icon: 'errror',
            iconColor:'var(--color-primario',
            width: '30%',
            background: 'var(--color-secundario)',
            color:'var(--color-primario)',
            timer:'3000',
            timerProgressBar:true,
            toast:true,
            position:'top-end',
            showConfirmButton:false,
            }
        )
    }
    mensajeResultado.value='';
    btnCopiar.style.display = 'none';
}
)
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.color = "white"
    const encriptarImagen = document.createElement("img");
    encriptarImagen.src = "img/candado-encriptador-cerrado.jpg";

    const imagenEncriptada = document.querySelector('.mensaje');
    imagenEncriptada.style.backgroundImage = `url(${encriptarImagen.src})`;
    // mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada =
        stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.color = "white"
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = "img/candado-encriptador-abierto.jpg";

    const cambioDeImagen = document.querySelector('.mensaje');
    cambioDeImagen.style.backgroundImage = `url(${nuevaImagen.src})`;
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada =
        stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }
    return stringDesencriptada;
}

/*function btnCopiar() {
    let copiarTexto = document.querySelector('.mensaje'); 
    try {
        copiarTexto.select(); 
        **execCommand está deprecado pero funciona el código para copiar**
        document.execCommand('copy');
        mostrarMensaje('Texto copiado al portapapeles');
    } catch (error) {
        console.error('Error al copiar el texto:', error);
        mostrarMensaje('No se pudo copiar el texto. Intenta nuevamente.');
    }
}*/

function btnCopiar() {
    let copiarTexto = document.querySelector('.mensaje'); 
    try {
        navigator.clipboard.writeText(copiarTexto.value); 
        alert('Texto copiado al portapapeles');
    } catch (error) {
        alert('No se pudo copiar el texto. Intenta nuevamente.');
    }
}



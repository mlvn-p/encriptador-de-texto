function encryptText() {
    const inputText = document.getElementById('IngresarTexto').value;
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('SalidaTexto').value = encryptedText;
    updateUI(encryptedText);
}

function decryptText() {
    const inputText = document.getElementById('IngresarTexto').value;
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById('SalidaTexto').value = decryptedText;
    updateUI(decryptedText);
}

function updateUI(outputText) {
    const image = document.getElementById('outputImage');
    
    if (outputText.trim() === "") {
        image.src = 'assets/gato.png';
        document.querySelector('.txt__salida h2').style.display = 'block';
        document.querySelector('.txt__salida p').style.display = 'block';
    } else {
        image.src = 'assets/nueva-imagen.png'; // Cambia a la nueva imagen que desees mostrar
        document.querySelector('.txt__salida h2').style.display = 'none';
        document.querySelector('.txt__salida p').style.display = 'none';
    }
}

function copyText() {
    const outputText = document.getElementById('SalidaTexto');
    outputText.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
}

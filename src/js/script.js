const encriptar = (texto) => {
	return texto.replace(/e/g, 'enter')
				.replace(/i/g, 'imes')
				.replace(/a/g, 'ai')
				.replace(/o/g, 'ober')
				.replace(/u/g, 'ufat');
};

const desencriptar = (texto) => {
	return texto.replace(/enter/g, 'e')
				.replace(/imes/g, 'i')
				.replace(/ai/g, 'a')
				.replace(/ober/g, 'o')
				.replace(/ufat/g, 'u');
};

function contieneMayusculas (tx) {
	return /[A-ZÑ]/.test(tx);
};

function contieneAcentos (tx) {
	return /[áéíóúÁÉÍÓÚ]/.test(tx);
};

function checarTexto(tx) {
	return tx.length === 0 || contieneAcentos(tx) || contieneMayusculas(tx);
};

function mostrarResultado () {
	document.querySelector('.sin-resultado').style.display = 'none';
	document.querySelector('#resultado').style.display = 'block'
	document.querySelector('#copiar').style.display = 'block'
};

const botonEncriptar = document.querySelector('#encriptar');
const botonDesencriptar = document.querySelector('#desencriptar');
const copiar = document.querySelector('#copiar');
const areaTexto = document.querySelector('#texto');

areaTexto.addEventListener('input', () => {
	if (checarTexto(areaTexto.value)){
		document.querySelector('.alerta label').style.color = 'red';
		botonEncriptar.disabled = true;
		botonDesencriptar.disabled = true;
		
	}
	else {
		document.querySelector('.alerta label').style.color = '#495057';
		botonEncriptar.disabled = false;
		botonDesencriptar.disabled = false;
	}
})

botonEncriptar.addEventListener('click', () => {
	const texto = areaTexto.value;
	const resultado = encriptar(texto);
	document.querySelector('#resultado').value = resultado;
	mostrarResultado();
});

botonDesencriptar.addEventListener('click', () => {
	const texto = areaTexto.value;
	const resultado = desencriptar(texto);
	document.querySelector('#resultado').value = resultado;
	mostrarResultado();
});

copiar.addEventListener('click', () => {
	document.querySelector('#resultado').select();
	document.execCommand('copy');
	alert('¡Texto copiado!');
});

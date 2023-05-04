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

function mostrarResultado () {
	document.querySelector('.sin-resultado').style.display = 'none';
	document.querySelector('#resultado').style.display = 'block'
	document.querySelector('#copiar').style.display = 'block'
};

const botonEncriptar = document.querySelector('#encriptar');
const botonDesencriptar = document.querySelector('#desencriptar');
const copiar = document.querySelector('#copiar');

botonEncriptar.addEventListener('click', () => {
	const texto = document.querySelector('#texto').value;
	const resultado = encriptar(texto);
	document.querySelector('#resultado').value = resultado;
	mostrarResultado();
});

botonDesencriptar.addEventListener('click', () => {
	const texto = document.querySelector('#texto').value;
	const resultado = desencriptar(texto);
	document.querySelector('#resultado').value = resultado;
	mostrarResultado();
});

copiar.addEventListener('click', () => {
	document.querySelector('#resultado').select();
	document.execCommand('copy');
	alert('¡Texto copiado!');
});

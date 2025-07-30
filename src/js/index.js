const valorMin = document.querySelector('.input-min');
const valorMax = document.querySelector('.input-max');
const botao = document.querySelector('button');
const numeroSorteado = document.querySelector('p');

botao.addEventListener('click', () => {
    const min = Math.min(valorMin.value, valorMax.value);
    const max = Math.max(valorMin.value, valorMax.value);
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    numeroSorteado.innerHTML = `Número Sorteado é: ${numero}`;
});
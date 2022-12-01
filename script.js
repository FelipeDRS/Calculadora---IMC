const button = document.querySelector('button');
function handleButton() {
  const nome = document.querySelector('.nome').value,
    altura = +document.querySelector('.altura').value,
    peso = +document.querySelector('.peso').value,
    tela = document.querySelector('.tela');
  const imc = parseFloat(peso / (altura * altura)).toFixed(2);
  function exibirResultado() {
    if (nome == false || altura == false || tela == false) {
      tela.innerHTML = 'Preencha todos os campos!';
    } else if (imc <= 18.5) {
      tela.innerHTML = `${nome} seu IMC é de ${imc} e você está abaixo do peso. Essa falta de peso pode ser por conta do seu organismo, procure um médico para saber do seu caso.`;
    } else if (imc > 18.5 && imc < 24.9) {
      tela.innerHTML = `${nome} seu IMC é de ${imc} e você está com o peso normal, parabéns!`;
    } else if (imc > 24.9) {
      tela.innerHTML = `${nome} seu IMC é de ${imc} e atenção, você está acima do peso. Problemas de obesidade pode ser por conta do seu organismo, procure um médico para saber do seu caso.`;
    }
  }
  exibirResultado();
}
button.addEventListener('click', handleButton);

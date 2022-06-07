// meu jeito

// function exercico() {
//     const form = document.querySelector('.form');
//     const resultado = document.createElement('div');
//     const container = document.querySelector('.container');

//     resultado.classList.add('resultado');

//     function recebeEventForm() {
//         event.preventDefault();
//         container.appendChild(resultado);

//         const peso = document.querySelector('.peso');
//         const altura = document.querySelector('.altura');

//         const imc = peso.value / (altura.value * altura.value);

//         if(imc < 18.5) {
//             resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e você está abaixo do peso.`;
//         } else if(imc >= 18.5 && imc < 24.9) {
//             resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e você está no peso ideal.`;
//         } else if (imc >= 25 && imc < 29.9) {
//             resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e você está acima do peso.`;
//         } else if (imc >= 30 && imc < 34.9) {
//             resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e você está com obesidade grau 1.`;
//         } else if (imc >= 35 && imc < 39.9) {
//             resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e você está com obesidade grau 2.`;
//         } else if (imc >= 40) {
//             resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e você está com obesidade grau 3.`;
//         }
//     }

//     form.addEventListener('submit', recebeEventForm);

// }

// exercico();

// resposta
const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso');
    const peso = Number(inputPeso.value);
    const inputAltura = e.target.querySelector('.altura');
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é: ${imc} | Nível: ${nivelImc}`;
    setResultado(msg, true);

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Ideal', 'Acima do Peso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function createParagraph() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = createParagraph();

    if (isValid) {
        p.classList.add('valid');   // se for valido, adiciona a classe valid
    } else {
        p.classList.add('invalid'); // se for inválido, adiciona a classe invalid
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}


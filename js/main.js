const menor_valor = 1;
const maior_valor = 1000;

const numero_Secreto = Gerar_Numero_Aleatorio();

function Gerar_Numero_Aleatorio()
{
    const num = parseInt(Math.random() * maior_valor +1);

    return num;
}

const Elemento_de_Menor_valor = document.getElementById("menor-valor");
Elemento_de_Menor_valor.innerHTML = menor_valor;

const Elemento_de_Maior_valor = document.getElementById("maior-valor");
Elemento_de_Maior_valor.innerHTML = maior_valor;

console.log(numero_Secreto);


function verifica_valor_do_chute(chute)
{
    const numero = +chute;
    if(chute == "game over")
    {
        document.body.innerHTML = 
        `
            <h2 class="Game">FIM DO JOGO</h2>
            <button id="botao"> Jogar Novamente </button>   
        `;
    }
    else if(Chute_Invalido(numero))
    {
        elemento_Chute.innerHTML += "<div> Valor invalido. </div>";
        elemento_Chute.innerHTML += "<div> Por favor Fale um Numero. </div>";
        return;
    }

    if(numero_for_maior_ou_menor(numero))
    {
        elemento_Chute.innerHTML += `<div> Valor inválido: o numero secreto precisa estar entre ${menor_valor} e ${maior_valor} </div>`;
        return;
    }

    if(numero === numero_Secreto)
    {
        const New_Body = document.body.innerHTML = 
        `
            <h2> Parabéns Você Acertou o Numero Secreto!!!!</h2>
            <h3> O número secreto era ${numero_Secreto}</h3>
            <button id="botao"> Jogar Novamente </button>
        `

    }
    else if (numero > numero_Secreto)
    {
        elemento_Chute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>`
    }
    // else if( numero == "sim")
    // {
    //     
    // }
    else
    {
        elemento_Chute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>`;
    }
}

function Chute_Invalido(numero) 
{
    return Number.isNaN(numero);
}

function numero_for_maior_ou_menor(numero)
{
    return numero > maior_valor || numero < menor_valor
}


document.body.addEventListener("click", e => 
{
    if(e.target.id == "botao")
    {
        window.location.reload();
    }
})


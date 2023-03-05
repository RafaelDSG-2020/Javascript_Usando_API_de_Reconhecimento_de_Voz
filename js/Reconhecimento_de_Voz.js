

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const elemento_Chute = document.getElementById("chute");

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result",on_Speak);

function on_Speak(evento)
{
    chute = evento.results[0][0].transcript; 

    exibe_Chute_na_Tela(chute);
    verifica_valor_do_chute(chute);
    //console.log(evento.results[0][0].transcript);
    //alterando(evento.results[0][0].transcript)
}

function exibe_Chute_na_Tela(chute)
{
    elemento_Chute.innerHTML = 
    `
        <div>Você Disse: </div>
        <span class="box">${chute} </span> 
    `
}

recognition.addEventListener("end" , () => recognition.start());



// function alterando(valor)
// {
//     console.log(document.getElementsByClassName("box")[0].innerHTML = valor );
// }



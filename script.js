const drawButton = document.querySelector(".draw-button"); // armazena o botão de sorteio

// função para realizar o sorteio de números aleatórios
function drawNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const resultElement = document.getElementById("result-number");

    if (min >= max) {
        alert("O valor mínimo não pode ser maior ou igual ao valor máximo!")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        // classe result-hidden para ocultar o resultado
        resultElement.classList.add("result-hidden");
        setTimeout(() => {
            resultElement.style.opacity = 1;
            resultElement.innerHTML = result;
            // remove a classe result-hidden para exibir o resultado com a transição
            resultElement.classList.remove("result-hidden");
        }, 100);
    };
};

// função para tocar o arquivo de áudio ao clicar no botão
function playAudio() {
    const audio = document.getElementById("myAudio")
    audio.play()
}

// event listener para observar quando o botão for clicado
drawButton.addEventListener("click", drawNumber);
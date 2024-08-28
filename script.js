// Array de perguntas e imagens correspondentes
const questions = [
    {
        question: "JÁ EVITOU DELÍCIAS POR ESTAR DE DIETA?",
        image: "1.jpg"
    },
    {
        question: "JÁ PASSOU RAIVA POR SÓ PODER COMER COISAS SEM GRAÇA?",
        image: "2.jpg"
    },
    {
        question: "JÁ FINGIU PARA UM AMIGO(A)S QUE ESTÁ GOSTANDO DA DIETA?",
        image: "3.jpg"
    },
    {
        question: "VOCÊ SABIA QUE ENGORDA MAIS RÁPIDO QUANDO VOLTA A COMER DEPOIS DE UMA DIETA?",
        image: "4.jpg"
    },
    {
        question: "E SE EU TE DISSER QUE EXISTEM DELICIOSAS RECEITAS ZERO AÇUCAR E SEM GLÚTEN?",
        image: "5.jpg",
        isEndScreen: true // Identificador para saber que é a última tela
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const questionImageElement = document.getElementById('question-image');
    const buttons = document.querySelector('.buttons');
    const endScreenButton = document.getElementById('end-screen-button'); // Botão "EU QUERO"
    
    if (questions[currentQuestion].isEndScreen) {
        // Exibe a tela final
        questionElement.textContent = questions[currentQuestion].question;
        questionImageElement.src = questions[currentQuestion].image;
        buttons.style.display = 'none'; // Esconde os botões "SIM" e "NÃO"
        endScreenButton.style.display = 'block'; // Mostra o botão "EU QUERO"
    } else {
        // Atualiza a pergunta e a imagem
        questionElement.textContent = questions[currentQuestion].question;
        questionImageElement.src = questions[currentQuestion].image;
        buttons.style.display = 'flex'; // Mostra os botões "SIM" e "NÃO"
        endScreenButton.style.display = 'none'; // Esconde o botão "EU QUERO"
    }
}

// Função para passar para a próxima pergunta
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        alert('Você completou o quiz!');
    }
}

// Função para redirecionar ao clicar no botão "EU QUERO"
function redirectToSite() {
    window.location.href = 'https://go.hotmart.com/S95161375E'; // Substitua pelo URL desejado
}

// Event listeners para os botões
document.querySelector('.btn-sim').addEventListener('click', nextQuestion);
document.querySelector('.btn-nao').addEventListener('click', nextQuestion);
document.getElementById('end-screen-button').addEventListener('click', redirectToSite); // Adiciona o listener para o botão "EU QUERO"

// Carrega a primeira pergunta
loadQuestion();
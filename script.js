// 1. Validador do Quiz
const formQuiz = document.getElementById('form-quiz');
const resultadoQuiz = document.getElementById('resultado-quiz');

formQuiz.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const resposta = document.getElementById('pergunta1').value;
    
    if (resposta === "nao") {
        resultadoQuiz.textContent = "🎉 Correto! Hoje em dia as IA são altamente realistas, precisamos checar os fatos!";
        resultadoQuiz.style.color = "#00ff00"; // Verde
    } else {
        resultadoQuiz.textContent = "❌ Tente novamente! As ferramentas evoluíram e detalhes visuais nem sempre são visíveis.";
        resultadoQuiz.style.color = "#ff0000"; // Vermelho
    }
});

// 2. Botão de Acessibilidade (Modo Escuro/Claro)
const btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Obs: Lembre-se de criar a classe .dark-mode no seu CSS!
});

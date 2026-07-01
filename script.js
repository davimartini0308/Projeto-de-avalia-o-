// 1. Validador do Quiz
const formQuiz = document.getElementById('form-quiz');
const resultadoQuiz = document.getElementById('resultado-quiz');

if (formQuiz && resultadoQuiz) {
    formQuiz.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede a página de recarregar o navegador
        
        const resposta = document.getElementById('pergunta1').value;
        
        // CORREÇÃO: Agora checa o valor exato que veio do HTML ("correta")
        if (resposta === "correta") {
            resultadoQuiz.textContent = "🎉 Correto! Hoje em dia as IAs são altamente realistas, precisamos sempre checar os fatos em fontes confiáveis!";
            resultadoQuiz.style.color = "#00ff00"; // Verde para acerto
        } else if (resposta === "errada") {
            resultadoQuiz.textContent = "❌ Incorreto. As ferramentas evoluíram muito e detalhes visuais nem sempre são perceptíveis. Busque sempre agências de checagem!";
            resultadoQuiz.style.color = "#ff3333"; // Vermelho para erro
        } else {
            resultadoQuiz.textContent = "⚠️ Por favor, selecione uma das opções antes de enviar.";
            resultadoQuiz.style.color = "#ffcc00"; // Amarelo para aviso
        }
    });
}

// 2. Botão de Acessibilidade (Modo Escuro/Claro)
const btnTema = document.getElementById('btn-tema');

if (btnTema) {
    btnTema.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}

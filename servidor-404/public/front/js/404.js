document.addEventListener('DOMContentLoaded', function() {
    const dynamicContentDiv = document.getElementById('dynamic-content');
    const messages = [
        "Talvez você tenha digitado o endereço errado?",
        "Não se preocupe, acontece com os melhores!",
        "Estamos trabalhando para consertar as coisas."
    ];
    let messageIndex = 0;

    function changeMessage() {
        dynamicContentDiv.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }

    // Troca a mensagem a cada 3 segundos (opcional)
    setInterval(changeMessage, 3000);

    // Exibe uma mensagem inicial
    changeMessage();
});
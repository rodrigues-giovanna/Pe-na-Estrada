function realizarReserva(event, destino) {
    // Impede a página de recarregar ao enviar o formulário
    event.preventDefault();

    // 1. Capturar os elementos específicos do destino selecionado
    const elementoContador = document.getElementById(`vagas-num-${destino}`);
    const formulario = document.getElementById(`form-${destino}`);
    const caixaSucesso = document.getElementById(`sucesso-${destino}`);

    // 2. Pegar o número atual de vagas e diminuir 1 unidade
    let vagasAtuais = parseInt(elementoContador.innerText);
    
    if (vagasAtuais > 0) {
        vagasAtuais--;
        elementoContador.innerText = vagasAtuais; // Atualiza o contador na tela

        // Se as vagas zerarem, muda o estilo do número para destacar
        if (vagasAtuais === 0) {
            elementoContador.style.color = "#ef4444";
            elementoContador.parentElement.style.backgroundColor = "#fee2e2";
        }
    }

    // 3. Efeito Visual: Esconde o formulário e exibe a mensagem de sucesso
    formulario.style.display = "none";
    caixaSucesso.style.display = "block";
}
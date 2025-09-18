   function enviarMensagemWhatsApp() {
        const mensagem = document.getElementById("mensagem").value;
        const numero = "244956759178"; // Coloque seu número com DDI e DDD, sem espaços ou traços
        const texto = encodeURIComponent(mensagem);
        const link = `https://wa.me/${numero}?text=${texto}`;
        window.open(link, '_blank');
    }
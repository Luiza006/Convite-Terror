function shareInvite() {
    const url = window.location.href;
    const text = 'Venha para a nossa sessão de filmes de terror!';

    if (navigator.share) {
    navigator.share({
        title: 'Convite Uma Semana de Filmes de Terror',
        text: text,
        url: url,
    })
    .then(() => console.log('Convite compartilhado com sucesso!'))
    .catch((error) => console.log('Erro ao compartilhar:', error));
    } else {
    alert('Compartilhamento não suportado no seu navegador.');
    }
}

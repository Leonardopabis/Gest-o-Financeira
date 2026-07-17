const formularioNovaTransacao = document.querySelector('#new-transaction-form')

formularioNovaTransacao.addEventListener('submit', async (event) => {
    event.preventDefault()
    
    const descricaoHtml = document.querySelector('#description').value
    const valorHtml = document.querySelector('#value').value
    const categoriaHtml = document.querySelector('#categories').value
    const tipoSelecionado = document.querySelector('input[name="type"]:checked')
    const dataHtml = document.querySelector('#transaction-date').value
    
    const valor = Number(valorHtml.replace(/\./g, '').replace(',', '.'))
    
    if (!tipoSelecionado) {
        alert('Selecione Receita ou Despesa')
        return
    }

    const tipoHtml = tipoSelecionado.value;

    if (Number.isNaN(valor)){
        alert('Digite um valor válido')
        return
    }

    const dadosForm = {
        descricao: descricaoHtml,
        categoria: categoriaHtml,
        tipo: tipoHtml,
        valor: valorHtml,
        data: dataHtml
    }

    try {
        const resposta = await fetch('http://localhost:3000/api/add-new-transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosForm),
        })
        const resultado = await resposta.json()
        console.log('Resposta do servidor: ', resultado)
        console.log('dados enviados')
        carregarTransacoes()

    } catch (error) {
        console.log('Erro ao enviar: ', error)
    }

})
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

    if (!tipoSelecionado) {
        alert('Selecione Receita ou Despesa')
        return
    }

})
const listaDeCategorias = document.querySelector('#categories')
const listaDeCategoriasFiltros = document.querySelector('#filter-categories')

const opcoes = Array.from(listaDeCategorias.options)
opcoes.shift()

opcoes.forEach(opcao => {
    listaDeCategoriasFiltros.add(opcao.cloneNode(true))
});
const form = document.getElementById('form-contatos');
const nomeContato = [];
const numeroContato = [];
//const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';//
//const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';//

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('tel-contato');

    if (nomeContato.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        nomeContato.push(inputNomeContato.value);
        numeroContato.push(parseFloat(inputNumeroContato.value));
            
            let linha = '<tr>';
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputNumeroContato.value}</td>`;
            linha += '</tr>';

            linhas += linha;
    }
    
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

//function atualizaMediaFinal() {
//    const mediaFinal = calculaMediaFinal();

//    document.getElementById('media-final-valor').innerHTML = mediaFinal;
//    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
//}

//function calculaMediaFinal() {
//    let somaDasNotas = 0;

//    for (let i = 0; i < notas.length; i++) {
//        somaDasNotas += notas [i];
//    }
//    
//    return somaDasNotas / notas.length;
//}
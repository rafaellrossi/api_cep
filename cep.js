function verificar(){
    let cep = document.getElementById('cep').value
    let url = 'https://viacep.com.br/ws/'+cep+'/json/'
    fetch(url)
    .then((response) => response.json())
    .then(json => {
    console.log(json);
    document.getElementById('rua').value = json.logradouro
    document.getElementById('bairro').value = json.bairro
    document.getElementById('cidade').value = json.localidade
    document.getElementById('estado').value = json.uf
    });
}
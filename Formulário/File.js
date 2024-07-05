function Cadastrar(){

    let nomeUsuario = document.getElementById('Nome').value;
    let emailUsuario = document.getElementById('Email').value;
    let senhaUsuario = document.getElementById('Senha').value;
    let confereDados = document.querySelector("input[name='Dados']:checked").value;

    alert('Seu nome é: ' + nomeUsuario + '\n' 
    + 'Seu email é: ' + emailUsuario + '\n'
    + 'Sua senha é: ' + senhaUsuario + '\n'
    + 'Você confirmou os dados: ' + confereDados + '\n');

    

}
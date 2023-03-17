function Logar(){
    var usuario = 'Kauê';
    var senha = '2023';
 
    if(document.getElementById('nome_login').value == usuario && document.getElementById('senha_login').value == senha){
        console.log("Senha correta, entrando no sistema...")
        window.location.href = ""
    }else{
        console.log("Senha incorreta, tente novamente...")
    }
 }
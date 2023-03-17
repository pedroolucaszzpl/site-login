function Logar(){
    var usuario = 'Kauê';
    var senha = '2023';
 
    if(document.getElementById('nome_login').value == usuario && document.getElementById('senha_login').value == senha){
        alert("Senha correta, entrando no sistema...")
        window.location.href = "https://www.netflix.com/br/"
    }else{
        alert("Senha incorreta, tente novamente...")
    }
 }
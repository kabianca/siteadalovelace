document.getElementById("botaoEnviar").addEventListener("click",validaformulario)

function validaformulario(){
  if(document.getElementById("nome").value != "" && 
  document.getElementById("email").value != "" &&
  document.getElementById("tel").value != "") {
  alert("Prontinho! Você receberá todas as novidades por e-mail.")
  }else{
  alert("Por favor, preencha os campos de nome, e-mail e telefone!")
  }
}

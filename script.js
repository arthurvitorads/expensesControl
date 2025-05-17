let buttonLogin = document.querySelector(".bSolid")
let buttonRegister = document.querySelector(".bOutline")
let inputMail= document.querySelector("#mailUser")
let inputPassword= document.querySelector("#passwordUser")

buttonRegister.addEventListener("click", function(){
    showLoading()
})

buttonLogin.addEventListener("click", function(){
    showLoading()
    firebase.auth().signInWithEmailAndPassword(inputMail.value, inputPassword.value).then(response => {
        window.location.href = "pages/home/home.html"
    }).catch(error => {
        alert(messagesErros(error))
    }); 
})



function messagesErros(error){
    if (error.code == "auth/invalid-email"){
        return "Insira um email válido!"
    }else if(error.code == "auth/missing-password"){
        return "Insira uma senha válida!"
    }else if(error.code == "auth/invalid-credential"){
        return "Email ou senha incorreto!"
    }else if(error.code == ""){
    }else {
        return error.message
    }
}
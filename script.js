let bLogin = document.querySelector(".bSolid")
let bRegister = document.querySelector(".bOutline")
let iPassword = document.querySelector("#passwordUser")
let iEmail = document.querySelector("#mailUser")


bRegister.addEventListener("click", function(){
    window.location.href = "pages/register/register.html"
})

bLogin.addEventListener("click", function(){
    {
        if (iEmail.value == "admin" && iPassword.value == "admin"){
            window.location.href = "pages/home/home.html"
        }else{
            alert("Usuário ou senha incorreta!")
        }
        
    }
    
})



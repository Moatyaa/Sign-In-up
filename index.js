let SignInBtn = document.querySelector(".SignInBtn")
let SignUpBtn = document.querySelector(".SignUpBtn")
let SubSignUpBtn = document.querySelector(".sub-SignInBtn")
let SubSignInBtn = document.querySelector(".sub-SignUpBtn")
let SIBS = document.querySelector(".cover-section")
let signUp = document.querySelector(".sign-section")
let mainTitle = document.querySelector(".main-title")
let NameField = document.querySelector("#text")
let p = document.querySelector(".sub-p")

SignInBtn.onclick=function(){
    SIBS.style = "left:60%; animation: animate1 1s;"

    signUp.style = "right:40%; animation: animate2 1s;"

    mainTitle.innerHTML = "Sign in to CaseFair"

    p.innerHTML = "Or use your email account"

    NameField.style = "display: none;"

    SignInBtn.style = "display: none;"

    SignUpBtn.style = "display: block;"

    SubSignInBtn.style = "display: none;"

    SubSignUpBtn.style = "display: block;"
}

SignUpBtn.onclick=function(){
    SIBS.style = "left:0%; animation: animate3 1s; "

    signUp.style = "right:0%; animation: animate4 1s;"

    mainTitle.innerHTML = "Creat Account"

    p.innerHTML = "Or use your email for registration"

    NameField.style = "display: -webkit-inline-box;"

    SignInBtn.style = "display: block;"

    SignUpBtn.style = "display: none;"

    SubSignInBtn.style = "display: block;"
    
    SubSignUpBtn.style = "display: none;"
}



let submit = document.querySelector(".submit");
submit.addEventListener("click", valider);

function valider(event){
    event.preventDefault();

    let prenom = document.querySelector("#prenom").value;
    let nom = document.querySelector("#nom").value;
    let age = document.querySelector("#age").value;
    let sexe = document.querySelector("#sexe").value;
    let mail = document.querySelector("#mail").value;
    let adressePostale = document.querySelector("#adressePostale").value;
    let codePostale = document.querySelector("#codPostale").value;
    let ville = document.querySelector("#ville").value;
    let metier = document.querySelector("#metier").value;
    let nationalite = document.querySelector("#nationalité").value;
    let dateNaissance = document.querySelector("#dateNaissance").value;
    let pays = document.querySelector("#pays").value;
    let nss = document.querySelector("#nss").value;
    let passport = document.querySelector("#passport").value;
    let passportDeliv = document.querySelector("#passportDeliv").value;
    let passportValidite = document.querySelector("#passportValidité").value;
    let inputs = document.querySelectorAll("input");

    validatePrenom(prenom);
    validateNom(nom);
    validateEmail(mail);
    validateAge(age);
    validateAdressePostale(adressePostale);
    validateCodePostale(codePostale);
    validateVille(ville);
    validateDateNaissance(dateNaissance);
    validatePays(pays);
    validateNss(nss);
    validatePassport(passport);
    validateInput(inputs);
    validatePassportExpiration()
}

//prendre le type text puis pour chaque input de type text faire ceci: 

function validateInput(inputs){
    inputs.forEach(inputV => {
        if (inputV.type =="text" || inputV.type =="email" && inputV.value =="") {
            inputV.setAttribute("class", "inputVide");
            // let error = document.createElement("span");
            // error.innerText =" ERROR!!! "
            // document.body.appendChild(error);
            console.log("pas bon !!!!!!");
        }
    });
}

function validatePrenom(prenom){
    if(prenom !="" && prenom.length >= 2){
        console.log("ok");
    }else{
        const prenomSpan = document.querySelector("#prenomSpan");
        let error = document.createElement("p");
        error.innerText =" ERROR!!! ";
        prenomSpan.appendChild(error);
        console.log("pas ok");
    }
    }  

function validateNom(nom){
        
     if(nom !="" && nom.length >= 2){
        console.log("ok");
    }else{
        console.log("pas ok");
    }
}

function validateAge(age){
        
    if(age !=""){
       console.log("ok");
   }else{
    console.log("pas ok");
}
}

function validateEmail(mail){
    if(mail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        console.log("ok");
    }else{
        console.log("pas ok");
    }
}

function validateAdressePostale(adressePostale) {
    if(adressePostale !=""){
        console.log("ok");
    }else{
        console.log("pas ok");
    }
}
    
function validateCodePostale(codePostale) {
    if(codePostale.length == 5){
        console.log("ok");
    }else{
        console.log("pas ok");
    }
}

function validateVille(ville) {
    if (ville != "" && ville.length >= 2) {
        console.log("ok");
    }else{
        console.log("pas ok");
    }
}
   
function validateDateNaissance(dateNaissance) {
    if(dateNaissance !="" ){
        console.log("ok");
    }else{
        console.log("pas ok");
    }
}   

function validatePays(pays) {
    if(pays !=""){
        console.log("ok");
    }else{
        console.log("pas ok");
    }
}   

function validateNss(nss) {
    if(nss.length == 13){
        console.log("ok");
    }else{
        console.log("pas ok");
    }
}   
function validatePassport(passport) {
    if (passport.match(/[A-Z]{2}\d{6}/g)) {
        console.log("ok");
    }else{
        console.log("pas ok");
    }
}   
function validatePassportExpiration(){
    if (passportValidite >= new Date()) {
        console.log("tout est bon");
    }
}

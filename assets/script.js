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
    let passportExpiration = document.querySelector("#passportValidité").value;
    let inputs = document.querySelectorAll("input");
    // je récupere la nouvelle class des spans pour en suite pouvoir les effacer;
    let errors = document.querySelectorAll(".error"); 

    if (errors) {
        removeError(errors);
    }
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
    validatePassportDeliv(passportDeliv);
    validatePassportExpiration(passportExpiration);
    
}

//prendre le type text puis pour chaque input de type text faire ceci: 

function validateInput(inputs){
    inputs.forEach(inputV => {
        if (inputV.type =="text" || inputV.type =="email" && inputV.value =="") {
            inputV.setAttribute("class", "inputVide");
        }
    });
}

//function Remove pour effacer tous les error à chaque envoie:

function removeError(errors){
    errors.forEach(errorR => {
    errorR.remove(); 
    // error = document.querySelectorAll("span"); 
    });
}

// functions 

function validatePrenom(prenom){
    if(prenom !="" && prenom.length >= 2){
        console.log("ok");
    }else{
        
        const prenomError = document.querySelector("#prenomError");
        let error = document.createElement("span");
        //creation d'une class pour tous les erreurs ;
        error.classList.add("error");
        error.innerText =" Renseigner le prénom ;";
        prenomError.appendChild(error);
    }
}  

function validateNom(nom){
        
     if(nom !="" && nom.length >= 2){
        console.log("ok");
    }else{
        const nomError = document.querySelector("#nomError");
        let error = document.createElement("span");
        error.classList.add("error");
        error.innerText =" Renseigner le nom ;";
        nomError.appendChild(error);
    }
}

function validateAge(age){
        
    if(age !="" && age > 0){
       console.log("ok");
   }else{
    const ageError = document.querySelector("#ageError");
    let error = document.createElement("span");
    error.classList.add("error");
    error.innerText =" L'age n'est pas valide ;";
    ageError.appendChild(error);
}
}

function validateEmail(mail){
    if(mail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        console.log("ok");
    }else{
        const mailError = document.querySelector("#mailError");
        let error = document.createElement("span");
        error.classList.add("error");
        error.innerText =" L'adresse mail n'est pas valide ;";
        mailError.appendChild(error);
    }
}

function validateAdressePostale(adressePostale) {
    if(adressePostale !=""){
        console.log("ok");
    }else{
        const adressePostaleError = document.querySelector("#adressePostalError");
        let error = document.createElement("span");
        error.classList.add("error");
        error.innerText =" L'adresse postale n'est pas valide ;";
        adressePostaleError.appendChild(error);
    }
}
    
function validateCodePostale(codePostale) {
    if(codePostale.length == 5){
        console.log("ok");
    }else{
        const codePostaleError = document.querySelector("#codePostaleError");
        let error = document.createElement("span");
        error.classList.add("error");
        error.innerText =" Le code postale n'est pas valide ;";
        codePostaleError.appendChild(error);
    }
}

function validateVille(ville) {
    if (ville != "" && ville.length >= 2) {
        console.log("ok");
    }else{
        const villeError = document.querySelector("#villeError");
        let error = document.createElement("span");
        error.classList.add("error");
        error.innerText =" Renseigner le champ ;";
        villeError.appendChild(error);
    }
}
   
function validateDateNaissance(dateNaissance) {
    if(dateNaissance !="" ){
        console.log("ok");
    }else{
        const dateNaissanceError = document.querySelector("#dateNaissanceError");
        let error = document.createElement("span");
        error.classList.add("error");
        error.innerText =" Renseigner la date de naissance ;";
        dateNaissanceError.appendChild(error);
    }
}   

function validatePays(pays) {
    if(pays !=""){
        console.log("ok");
    }else{
        const paysError = document.querySelector("#paysError");
        let error = document.createElement("span");
        error.classList.add("error");
        error.innerText =" Renseigner le champ ;";
        paysError.appendChild(error);
    }
}   

function validateNss(nss) {
    if(nss.length == 13){
        console.log("ok");
    }else{
        const nssError = document.querySelector("#nssError");
        let error = document.createElement("span");
        error.classList.add("error");
        error.innerText =" Le numero de securité sociale n'est pas valide ;";
        nssError.appendChild(error);
    }
}   

function validatePassport(passport) {
    if (passport.match(/[A-Z]{2}\d{7}/g)) {
        console.log("ok");
    }else{
        const nPassportError = document.querySelector("#nPassportError");
        let error = document.createElement("span");
        error.classList.add("error");
        error.innerText =" Le numero de passport n'est pas valide ;";
        nPassportError.appendChild(error);
    }
}   

function validatePassportDeliv(params) {
    if (params != "") {
        
    }else{
        const passportDelivError = document.querySelector("#passportDelivError");
        let error = document.createElement("span");
        error.classList.add("error");
        error.innerText =" Renseigner le champ ;";
        passportDelivError.appendChild(error);
    }
}

function validatePassportExpiration(passportExpiration){
    if (passportExpiration !="") {
        console.log("ok");
    }else{
        const passportExpirationError = document.querySelector("#passportExpirationError");
        let error = document.createElement("span");
        error.classList.add("error");
        error.innerText =" Renseigner le champ ;";
        passportExpirationError.appendChild(error);
    }
}

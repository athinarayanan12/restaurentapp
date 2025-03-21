function signup(){
    const name =document.getElementById("name");
    const email =document.getElementById("email");
    const mobile =document.getElementById("mobile");

    sessionStorage.setItem("name",name.value);
    sessionStorage.setItem("email",email.value);
    sessionStorage.setItem("mobile",mobile.value);
    window.location.assign("signin.html");
}
const mobile =document.getElementById("mobile");
const signinbtn =document.getElementById("signin-btn");

function signin(){
    const mob = sessionStorage.getItem("mobile");
    const signinSucces = document.querySelector(".signin-success");
    if(mobile.value === mob){
        signinSucces.classList.remove("hide");
        signinSucces.textContent="Successfully logedin";
        console.log("Successfully logedin")
    }else{
        signinSucces.textContent="Authentication Failed";
    }

}


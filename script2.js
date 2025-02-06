function create(){
        let ak = document.getElementById("lastdiv")
        let newdiv = document.createElement("div")
        newdiv.id = "dynamicDiv"
        newdiv.innerHTML = "The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google)."
        ak.insertAdjacentElement("beforeend",newdiv)
        document.getElementById("learn").remove()
}

let lm = document.getElementById("learn")
lm.addEventListener("click",create)


function translateLanguage() {
        let language = document.getElementById("languageSelector").value;
        let select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = language; // Set selected language
            select.dispatchEvent(new Event("change")); // Trigger translation
        }
    }
function focusTextbox() {
    document.getElementById("gmail").focus();
}
let a = document.getElementById("but")
a.addEventListener("click", focusTextbox)

function detail() {
    let aa = document.getElementById("dynamicbox2")
    if (aa) {
        aa.remove()
    }
    let bb = document.getElementById("dynamicbox3")
    if (bb) {
        bb.remove()
    }
    let cc = document.getElementById("dynamicbox4")
    if (cc) {
        cc.remove()
    }

    let ak = document.getElementById("dynamicbox1")
    if (ak) {
        ak.remove()
        let plus = document.getElementById("plus1")
        plus.style.transition = "transform 0.5s ease-in-out"
        plus.style.transform = "rotate(0deg)"
    }
    else {
        let a = document.getElementById("faqbox1")
        a.style.marginBottom = "1px"
        let b = `<div id="dynamicbox1" class="extra">
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,
        documentaries and more – on thousands of internet-connected devices.
        <p></p>
        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.
        There's always something new to discover, and new TV shows and movies are added every week!
        </div>`
        a.insertAdjacentHTML("afterend", b)

        // plus symbol :
        let plus = document.getElementById("plus1")
        plus.style.transition = "transform 0.5s ease-in-out"
        plus.style.transform = "rotate(45deg)"
    }
}
let b = document.getElementById("faqbox1")
b.addEventListener("click", detail)

function detail2() {
    let aa = document.getElementById("dynamicbox1")
    if (aa) {
        aa.remove()
    }
    let bb = document.getElementById("dynamicbox3")
    if (bb) {
        bb.remove()
    }
    let cc = document.getElementById("dynamicbox4")
    if (cc) {
        cc.remove()
    }

    let ak = document.getElementById("dynamicbox2")
    if (ak) {
        ak.remove()
        let plus = document.getElementById("plus4")
        plus.style.transition = "transform 0.5s ease-in-out"
        plus.style.transform = "rotate(0deg)"
    }
    else {
        let a = document.getElementById("faqbox2")
        a.style.marginBottom = "1px"
        let b = `<div id="dynamicbox2" class="extra">
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
        </div>`
        a.insertAdjacentHTML("afterend", b)

        let plus = document.getElementById("plus4")
        plus.style.transition = "transform 0.5s ease-in-out"
        plus.style.transform = "rotate(45deg)"
    }
}
let c = document.getElementById("faqbox2")
c.addEventListener("click", detail2)

function detail3() {
    let aa = document.getElementById("dynamicbox1")
    if (aa) {
        aa.remove()
    }
    let bb = document.getElementById("dynamicbox2")
    if (bb) {
        bb.remove()
    }
    let cc = document.getElementById("dynamicbox4")
    if (cc) {
        cc.remove()
    }

    let ak = document.getElementById("dynamicbox3")
    if (ak) {
        ak.remove()
        let plus = document.getElementById("plus3")
        plus.style.transition = "transform 0.5s ease-in-out"
        plus.style.transform = "rotate(0deg)"
    }
    else {
        let a = document.getElementById("faqbox3")
        a.style.marginBottom = "1px"
        let b = `<div id="dynamicbox3" class="extra">
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
        </div>`
        a.insertAdjacentHTML("afterend", b)

        let plus = document.getElementById("plus3")
        plus.style.transition = "transform 0.5s ease-in-out"
        plus.style.transform = "rotate(45deg)"
    }
}
let d = document.getElementById("faqbox3")
d.addEventListener("click", detail3)

function detail4() {
    let aa = document.getElementById("dynamicbox1")
    if (aa) {
        aa.remove()
    }
    let bb = document.getElementById("dynamicbox2")
    if (bb) {
        bb.remove()
    }
    let cc = document.getElementById("dynamicbox3")
    if (cc) {
        cc.remove()
    }

    let ak = document.getElementById("dynamicbox4")
    if (ak) {
        ak.remove()
        let plus = document.getElementById("plus2")
        plus.style.transition = "transform 0.5s ease-in-out"
        plus.style.transform = "rotate(0deg)"
    }
    else {
        let a = document.getElementById("faqbox4")
        a.style.marginBottom = "1px"
        let b = `<div id="dynamicbox4" class="extra">
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
        <p></p>
You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
        </div>`
        a.insertAdjacentHTML("afterend", b)

        let plus = document.getElementById("plus2")
        plus.style.transition = "transform 0.5s ease-in-out"
        plus.style.transform = "rotate(45deg)"
    }
}
let e = document.getElementById("faqbox4")
e.addEventListener("click", detail4)

function translateLanguage() {
    let language = document.getElementById("languageSelector").value;
    let select = document.querySelector(".goog-te-combo");
    if (select) {
        select.value = language; // Set selected language
        select.dispatchEvent(new Event("change")); // Trigger translation
    }
}


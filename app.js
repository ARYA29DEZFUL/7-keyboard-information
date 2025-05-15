const $ = document

const Body = $.getElementById("body")
const mainInformation = $.getElementById("mainInformation")

const key = $.getElementById("key")
const Location = $.getElementById("location")
const which = $.getElementById("which")
const code = $.getElementById("code")

let flag = ""

key.addEventListener("click", () => {
    flag = "key"
    mainInformation.textContent = key.textContent
})

Location.addEventListener("click", () => {
    flag = "Location"
    mainInformation.textContent = Location.textContent
})

which.addEventListener("click", () => {
    flag = "which"
    mainInformation.textContent = which.textContent
})

code.addEventListener("click", () => {
    flag = "code"
    mainInformation.textContent = code.textContent
})

Body.addEventListener("keydown", (event) => {

    if (!flag) {
        flag = "key"
    }

    switch (flag) {
        case "key": mainInformation.textContent = event.key; break;
        case "Location": mainInformation.textContent = event.location; break;
        case "which": mainInformation.textContent = event.which; break;
        case "code": mainInformation.textContent = event.code; break;
    }
    key.textContent = event.key
    Location.textContent = event.location
    which.textContent = event.which
    code.textContent = event.code
})


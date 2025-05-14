const $ = document

const Body = $.getElementById("body")
const mainInformation = $.getElementById("mainInformation")

const key = $.getElementById("key")
const Location = $.getElementById("location")
const which = $.getElementById("which")
const code = $.getElementById("code")

console.log(code)

Body.addEventListener("keydown", (event) => {
    mainInformation.textContent = event.key
    key.textContent = event.key
    Location.textContent = event.location
    which.textContent = event.which
    code.textContent = event.code
})


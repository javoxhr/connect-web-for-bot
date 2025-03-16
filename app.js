let tg = window.Telegram.WebApp


tg.expand()

const main = document.querySelector("#main")
const mainForm = document.querySelector("#main-form")
const pushDataBtn = document.querySelector("#push-data-btn")

pushDataBtn.addEventListener("click", ()=> {
    mainForm.classList.add("active-main-form")
    main.classList.add("off-main")
})

const form = document.querySelector("#form")
const getName = document.querySelector("#name").value
const getUserName = document.querySelector("#username").value
const getPassword = document.querySelector("#password").value

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    let data = {
        name: getName,
        username: getUserName,
        password: getPassword
    }

    tg.sendData(JSON.stringify(data))
})
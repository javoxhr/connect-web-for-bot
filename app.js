let tg = window.Telegram.WebApp


const main = document.querySelector("#main")
const mainForm = document.querySelector("#main-form")
const pushDataBtn = document.querySelector("#push-data-btn")

pushDataBtn.addEventListener("click", ()=> {
    mainForm.classList.add("active-main-form")
    main.classList.add("off-main")
})
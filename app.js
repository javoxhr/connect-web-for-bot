let tg = window.Telegram.WebApp


tg.expand()

const main = document.querySelector("#main")
const mainForm = document.querySelector("#main-form")
const pushDataBtn = document.querySelector("#push-data-btn")

pushDataBtn.addEventListener("click", () => {
    mainForm.classList.add("active-main-form")
    main.classList.add("off-main")
})

const form = document.querySelector("#form")

const dataInBot = document.querySelector("#data-in-bot")

tg.onEvent('webAppData', function (data) {
    dataInBot.textContent = JSON.stringify(data, null, 2)
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const getName = document.querySelector("#name").value
    const getUserName = document.querySelector("#username").value
    const getStars = document.querySelector("#stars").value
    const getCategory = document.querySelector("#category").value
    let data = {
        title: getName,
        desc: getUserName,
        stars: getStars,
        category: getCategory
    }

    tg.sendData(JSON.stringify(data))
})
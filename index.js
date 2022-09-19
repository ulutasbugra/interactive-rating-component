document.querySelector(".contain1").classList.remove("contain1display")

function myFunction() {
    document.querySelector(".contain2").classList.remove("contain2display")
    document.querySelector(".contain1").classList.add("contain1display")
    }

const rating = document.querySelector(".selectedRate")
const rates = document.querySelectorAll(".rate")

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})
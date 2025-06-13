const startBtn = document.querySelector("#startBtn");
const endBtn = document.querySelector("#endBtn");
const prevNext = document.querySelectorAll(".prevNext");
const numbers = document.querySelectorAll(".link");


let currentStep = 0;

// 링크를 클릭했을 때 링크에 활성화
numbers.forEach((number, numIndex) => {
    number.addEventListener("click", () => {
        currentStep = numIndex;
        document.querySelector(".active").classList.remove("active");
        number.classList.add("active");
    })
})


prevNext.forEach(button => {
    button.addEventListener("click", (e) => {
        currentStep += e.target.id === "next" ? 1 : -1;
        console.log(currentStep);

    })
})
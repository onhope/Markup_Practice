const inputField = document.querySelector(".input-field textarea"),
    todoLists = document.querySelector(".todolists"),
    pendingNum = document.querySelector(".pending-num"),
    clearButton = document.querySelector(".clear-button");

inputField.addEventListener("click", (e) => {

    let inputVal = inputField.value;
    console.log(inputVal);

    if (e.key === "Enter") {
        console.log("this is enter key");
    }
})


// 변수 선언 
const gameContaienr = document.querySelector(".container"),
    userReult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    resutl = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

// 각 옵션의 이미지 요소를 반복
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userReult.src = cpuResult.src = "images/rock.png";
        resutl.textContent = "Wait..."

        // 각 옵션의 이미지 요소를 다시 반복
        optionImages.forEach((image2, index2) => {
            // 만약에 현재 인덱스가 클릭한 인덱스와 일치하지 않으면 
            // active 클래스를 다른 옵션의 이미지에서 제거 
            index !== index2 && image2.classList.remove("active");
        });

        gameContaienr.classList.add("start");

        // 곃과 계산에 시간 지연 설정
        let time = setTimeout(() => {
            gameContaienr.classList.remove("start");
            // 클릭한 옵션 이미지의 소스를 얻기 
            let imageSrc = e.target.querySelector("img").src;
            // 클릭한 옵션의 이미지를 사용자 이미지에 설정
            userReult.src = imageSrc;

            // 0과 2사이에서 랜덤 숫자를 발생
            let randomNumber = Math.floor(Math.random() * 3);
            // CPU의 이미지 옵션을 배열로 생성 
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            cpuResult.src = cpuImages[randomNumber];

            // cpu 옵션의 값에 문자를 할당 (R은 rock, p는 paper, S는 scissors)
            let cpuValue = ["R", "P", "S"][randomNumber];
            // 클릭한 옵션의 값에 문자를 할당 (인덱스를 기반으로)
            let userValue = ["R", "P", "S"][index];

            // 모든 가능한 결과를 객체에 생성 
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "USer",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            // 사용자와 cpu 의 옵션을 바탕으로 결과값을 보기
            let outComeValue = outcomes[userValue + cpuValue];

            // 결과 표시 
            resutl.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!`;

        }, 2500)
    });
});
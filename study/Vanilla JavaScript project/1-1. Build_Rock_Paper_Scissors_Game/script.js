// 변수 선언 
const gameContaienr = document.querySelector(".container"),
  userReult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  resutl = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// 각 옵션의 이미지 요소를 반복
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    // 옵션 이미지 클릭시 active 클래스 추가 
    image.classList.add("active");

    // user와 cpu의 기본 이미지는 rock, 문구는 wait을 설정
    userReult.src = cpuResult.src = "images/rock.png";
    resutl.textContent = "Wait..."

    // 각 옵션의 이미지 요소를 다시 반복
    optionImages.forEach((image2, index2) => {
      // index와 index2가 다를 때 image2 요소에서 "active" 클래스를 제거
      index !== index2 && image2.classList.remove("active");
    });

    gameContaienr.classList.add("start");

    //  setTimeout은 지정한 시간(밀리초)이 지난 후에 특정 함수를 한 번 실행하는 데 사용되는 메서드
    let time = setTimeout(() => {
      gameContaienr.classList.remove("start");
      // 클릭한 옵션 이미지의 소스를 얻기 
      let imageSrc = e.target.querySelector("img").src;
      // 클릭한 옵션의 이미지를 사용자 이미지에 설정
      userReult.src = imageSrc;

      // 0과 2사이에서 랜덤 숫자를 발생
      let randomNumber = Math.floor(Math.random() * 3);
      // CPU의 이미지 src를 배열에 저장 
      let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
      cpuResult.src = cpuImages[randomNumber];

      // 배열을 사용하여 특정 인덱스에 해당하는 값을 가져오기 
      // [배열][배열의 인덱스로 사용하는 변수]로 예를 들어 randomNumber가 0이면 R, 1이면 P, 2면 S
      let cpuValue = ["R", "P", "S"][randomNumber];
      // 예를 들어 Index가 0이면 R, 1이면 P, 2면 S
      let userValue = ["R", "P", "S"][index];

      // 모든 가능한 결과를 객체에 생성
      // userValue + cpuValue : Draw, User, Cpu 
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      // 사용자와 cpu 의 옵션을 바탕으로 결과값을 보기
      let outComeValue = outcomes[userValue + cpuValue];

      // 결과 표시
      // user의 값과 cpu 값이 같으면 Match Draw, 다르면 OOO Won! 
      resutl.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!`;

      // 2500ms = 2.5s
    }, 2500)
  });
});
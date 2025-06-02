const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll(".button");

let imageIndex = 1,
    intervalId;

// 슬라이드 이미지를 자동으로 시작하는 함수
const autoSlide = () => {
    // 2초에 slideImage() 함수를 호출하여 슬라이드 쇼 시작 
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
}
// 슬라이드 페이지를 로드하는 autoSlide 함수를 호출 
autoSlide();

// 슬라이드 이미지를 표시하는  carouse를 업데이트 하는 함수
const slideImage = () => {
    // 이미지 인덱스를 계산하여 업데이트 
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    // 특정 이미지를 보여주기 위해 carousel 표시를 업데이트
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};
// 다음 혹은 이전의 이미지를 보여지게 하기위해서 carosel을 업데이트 하는 함수
const updateClick = (e) => {
    // 자동 슬라이드 쇼 멈추기 
    clearInterval(intervalId);
    // 이미지 인덱스를 기반으로 한 버튼을 클릭하면 계산하여 업데이트 
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    autoSlide();

}

// button에 이벤트 리스너 추가 
buttons.forEach(button => button.addEventListener("click", updateClick));

// 자동 슬라이딩을 멈추기 위해 wrapper 요소에 마우스오버 이벤트 추가
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// 다시 자동 슬라이딩을 시작하기 위해서 wrapper 요소에 마우스리브 이벤트 추가 
wrapper.addEventListener("mouseleave", autoSlide);
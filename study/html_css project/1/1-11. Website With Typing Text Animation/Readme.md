# 1-11. Website With Typing Text Animation

## 출처

https://youtu.be/Ca2Goj7Aoc4?si=me9EpypXrrcG27iL

## Result

<img src="img/result.png">

## Study

### 1. input으로 버튼 만들기 vs button으로 버튼 만들기

- **input으로 버튼 만들기**  
  : 단순한 버튼을 생성하며, 텍스트나 이미지로 버튼 내용을 설정  
  : value 속성을 사용하여 버튼에 표시될 텍스트를 설정  
  : 스타일링이 상대적으로 제한적이며, 브라우저에 따라 기본 스타일이 다를 수 있음
- **button으로 버튼 만들기**  
  : 더 많은 유연성을 제공, 버튼 내부에 다양한 HTML 요소를 넣을 수 있어 복잡한 디자인이 가능  
  : 기본적으로 type 속성을 사용하여, submit, reset, button 등으로 설정할 수 있음  
  : CSS를 통해 더 많은 스타일링 옵션을 제공하며, 사용자 정의 스타일을 적용하기 용이

### 2. 배경의 이미지를 넣을 때 html에서 넣기도 하고 css에서 넣기도 하는데 그렇게 나누는 이유가 뭘까.

=> HTML과 CSS에서 배경 이미지를 넣는 방법은 각각의 목적과 특성에 따라 다름

- **HTML**  
  : 웹 페이지의 구조와 내용을 정의. 배경 이미지를 HTML에서 설정하면, 해당 이미지가 페이지의 시맨틱한 요소에 직접적으로 연결됨. 예를 들어 `<div>`태그에 이미지를 넣으면 그 요소의 내용과 관련이 있을 때 유용
- **CSS**  
  : 스타일과 레이아웃을 담당. 배경이미지를 CSS에서 설정하면, 스타일을 분리하여 관리할 수 있어 유지보수와 수정이 용이. 또한 CSS를 사용하면 여러가지 효과를 쉽게 적용 가능  
  : 재사용성이 높다.  
  : 미디어 쿼리를 사용하여 다양한 화면 크기에 맞춰 배경 이미지를 조정할 수 있음.

### 3. object-fit과 background-size

- **object-fit**  
  : `<img>, <video>, <canvas>`와 같은 replaced 요소에 적용됨  
  : 요소의 콘텐츠가 주어진 공간 내에서 어떻게 맞춰질지를 결정  
  : 값으로는 fill / contain / cover / none / scale-down  
  : 콘텐츠에 사용

- **background-size**  
  : 배경 이미지에 적용됩니다. 주로 backgound-image 속성과 함께 사용  
  : 배경 이미지의 크기와 배치 방식을 조정  
  : 값으로는 auto / contain / cover / 특정 크기  
  : 배경이미지에 사용

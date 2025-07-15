# 1-29. Gradient Text Effect

## Result

<img src="result.gif">

## 출처

https://youtu.be/4vgD6yhnNOI?si=n2wegt68ES-6yFWt

## Study

**1. html 태그에 contenteditable 속성**

- HTML 요소들을 사용자가 웹페이지에서 직접 편집 가능하도록 함
- 웹 페이지에 워드나 메모장처럼 텍스트를 바로 수정할 수 있는 공간을 만들때 사용
- 사용시 주의 사항  
  : 보안 문제 (XSS)  
  : 브라우저 호환성 및 모바일 제약  
  : 커서 문제  
  : input이나 textarea에는 안 씀

**2. 벤더 프리픽스 -webkit-**

- 웹 표준이 확립되기 전에 웹킷(WebKit) 기반 브라우저(사파리, 예전 크롬 등)에서 먼저 특정 기능을 지원할 때 붙이던 것
- 지금은 대부분 표준 속성으로 통합돼서 잘 안 쓰지만, 아직 호환성을 위해 붙이기도 함

  ```
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  ```

  - **background-clip**  
    : 요소의 배경(색상, 이미지, 그라데이션 등)이 어디까지 적용될지 범위를 지정하는 것  
    : order-box (테두리까지), padding-box (패딩까지), content-box (콘텐츠 영역만)을 사용  
    : 여기서 text는 배경이 텍스트의 모양대로만 잘려서 보여지게 함으로써, 배경이 텍스트 영역을 벗어나지 않고, 텍스트의 글자 모양 안에만 딱 들어맞게 됨

  - **text-fill-color**  
    : 텍스트의 '채우기 색상', 즉 글자 자체의 색깔을 지정  
    : transparent (투명) 값을 주면, 글자 색깔이 완전히 투명해져서 글자가 보이지 않게 돼.

  - 이 둘을 합쳐서 사용하면 **글자에 이미지나 그라데이션을 채워 넣는 듯한 효과**를 만듬

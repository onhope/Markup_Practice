# 1-2. Responsive Image Slider

## 출처

https://www.youtube.com/watch?v=Na_-33eKHek&list=PLImJ3umGjxdAuARwziklrT2QEELizOMtr&index=2

## Goal

## Study

**1. swiper**  
https://swiperjs.com/demos

- CDN 사용

```
  <link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

- HTML Layout

```
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
```

- Initialize Swiper

```
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
```

**2. 구글 폰트**

- 아이콘 키워드 : left-alt, right-right
- 폰트 키워드 : Montserrat

**3. 가상 요소 before**

- css에서 사용되는 가상 요소로, 특정 HTML 요소의 내용 앞에 추가적인 콘텐츠를 삽입할 때 사용
- 여기서는 slide 이미지를 가상 요소를 사용하여 삽입하였음
- ::before를 사용하기 위해서는 content 속성을 반드시 지정해야 하며, 그렇지 않으면 가상 요소가 생성 되지 않음.
- 블록 요소와 인라인 요소 모두에 사용할 수 있지만, 주로 인라인 요소에 사용되는 경우가 많음.

**4. offsetLeft 속성**

- 자바스크립트에서 DOM 요소의 위치를 측정하는 데 사용되는 속성으로, 특정 요소의 왼쪽 가장 자리와 그 요소의 가장 가까운 위치 조정된 조상 요소의 왼쪽 가방 자리 사이의 거리를 픽셀 단위로 반환

```
sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
```

- 여기서는 표시바가 이동될 때 표시할 때 offsetLeft를 사용
- 특징  
  : 읽기 전용 속성이므로, 값을 직접 수정할 수 없음. 대신, 요소의 위치를 변경하려면 css 스타일을 수정해야 함.  
  : 요소가 문서 내에서 어떻게 배치되는지를 기준으로 하므로, 요소가 포함된 다른 요소의 위치에 따라 값이 달라질 수 있음.

**5. getBoundingClientRect( )**  
: DOM 요소의 크기와 뷰포트에 대한 위치 정보를 제공하는 메서드  
: 요소의 경계 사각형을 나타내는 DOMRect 객체를 반환합니다. 반환되는 DOMRect 객체는 다음과 같은 속성을 포함

- top : 요소의 상단 경계와 뷰포트 상단 사이의 거리
- right : 요소의 오른쪽 경계와 뷰포트 왼쪽 사이의 거리
- bottom : 요소의 하단 경계와 뷰포트 상단 사이의 거리
- left : 요소의 왼쪽 경계와 뷰포트 왼쪽 사이의 거리
- width : 요소의 너비
- height : 요소의 높이

**6. 배열 전개 구문**  
: 자바스크립트에서 배열이나 객체의 요소를 쉽게 펼치거나 복사할 수 있는 문법  
: 세 개의 점 (...)을 사용하여 구현  
: 주로 배열을 다른 배열에 추가하거나, 함수의 인수로 배열을 전달할 때 유용

- 사용예시

  - 배열 복사

    ```
    const originalArray = [1, 2, 3];
    const copiedArray = [...originalArray];

    console.log(copiedArray); // [1, 2, 3]
    ```

  - 배열 결합

        ```
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const combinedArray = [...array1, ...array2];

        console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
        ```

  - 함수 인수로 사용

    ```
    function sum(x, y, z) {
        return x + y + z;
    }

    const numbers = [1, 2, 3];
    const result = sum(...numbers);

    console.log(result); // 6

    ```

  - 객체와 함께 사용

    ```
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const mergedObj = { ...obj1, ...obj2 };
    console.log(mergedObj); // { a: 1, b: 3, c: 4 }
    ```

**7. where() 의사 클래스**  
: 선택자 목록을 받아 해당 선택자 중 하나에 해당하는 모든 요소에 스타일을 적용  
: where()는 선택자 목록을 괄호 안에 나열하여 사용

```
:where(h1, h2, h3) {
    color: blue;
    font-weight: bold;
}

```

: h1, h2, h3 요소에 대해 모두 파란 글씨와 굵은 글씨를 적용

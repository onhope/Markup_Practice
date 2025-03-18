# Sidebar

## 출처

https://www.youtube.com/watch?v=5EVKDhGvxB4&list=PLImJ3umGjxdD3ov2lwg0SM5rxz5v9FjOf&index=4

## goal

<img src="images/bg.jpg">

## Study

**1. fontawesome에서 아이콘 가져오기**  
https://fontawesome.com/

**2. input과 label**  
: 사용자와 상호작용하기 위해 사용되는 요소

- input
  : id를 사용하여, label 과 연결
- label
  : for를 사용하여, input의 id와 연결
  : 이를 통해 레이블을 클릭하면 해당 입력 필드로 포커스가 이동

**3. display : none과 opacity : 0의 차이**

<span style="background:yellow; font-weight: bold">display : none</span>

- 요소를 문서에서 완전히 제거하므로, 요소가 차지하는 공간도 사라짐.
- 그 결과 해당 요소는 화면에 보이지 않으며, 레이아웃에 영향을 주지 않음. 다른 요소들이 이 공간을 차지하게 됨.

<span style="background:yellow; font-weight: bold">opacity : 0</span>

- 요소의 투명도를 0으로 설정하여 보이지 않게 만듬. 그러나 요소는 여전히 문서에 존재하며, 차지하는 공간도 유지
- 그 결과 요소는 화면에 보이지 않지만, 다른 요소들이 여전히 그 공간을 차지하며, 마우스 이벤트 등도 여전히 작동

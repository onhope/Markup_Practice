# 1-10. Vertical Tab Design

## 출처

https://www.youtube.com/watch?v=DTtPuBcuYF8&list=PLImJ3umGjxdD3ov2lwg0SM5rxz5v9FjOf&index=11

## Result

<image src="img/result.png">

## Study

### 1. line-height와 height를 이용한 텍스트 수직 중앙 정렬

![alt text](image.png)

### 2. input과 label 연결해서 탭 이동하는 효과

```
<input type="radio" name="indicator" checked id="home">

<label for="home" class="home">
    <i class="fas fa-home"></i>
    <span class="topic">Home</span>
</label>

```

label의 for="home" 속성은 이 레이블이 id가 home인 입력 요소와 연결되어 있음을 나타냅니다. 사용자가 이 레이블을 클릭하면 해당 라디오 버튼이 선택됩니다.

### 3. #home:checked ~ .list .home 의미

- <span style="background: Yellow; font-weight: bold">#home:checked</span>
  : ID가 home인 체크박스가 체크된 상태를 의미합니다.
- <span style="background: Yellow; font-weight: bold">~</span>
  : 형제 선택자. #home 체크박스와 같은 부모 요소를 가진 모든 형제 요소 중에서 선택합니다.
- <span style="background: Yellow; font-weight: bold">.list .home</span>
  : 클래스가 list인 요소 안에 있는 모든 <label> 요소를 선택합니다.
  : ID가 home인 체크박스가 체크된 상태일 때, 같은 부모 요소를 가진 모든 형제 요소 list 클래스를 가진 요소 안에 있는 .home 요소에 스타일을 적용한다는 의미

### 4. max-width, min-width를 사용하는 이유가 반응형 떄문인건 알겠는데 그래도 잘 모르는 거 같음.

- **max-width**  
  : 요소가 특정 너비를 넘지 않도록 제한할 때 사용합니다.

  - 사용 상황  
    : <u>요소가 너무 넓어지는 것을 방지</u>하고 싶을 때 사용합니다.  
    : 반응형 디자인에서 콘텐츠가 너무 넓어져 가독성이 떨어지는 것을 방지할 때 유용합니다.  
    : 예를 들어, 이미지나 텍스트 블록이 특정 너비 이상으로 늘어나지 않도록 하고 싶을 때 사용합니다.

- **min-width**  
  : 요소가 특정 너비 이하로 줄어들지 않도록 보장할 때 사용합니다.
  - 사용 상황  
    : <u>요소가 너무 좁아져서 내용이 잘리거나 가독성이 떨어지는 것을 방지</u>하고 싶을 때 사용합니다.  
    : 반응형 디자인에서 특정 콘텐츠가 항상 보여야 하거나, 특정 레이아웃이 유지되어야 할 때 유용합니다.

## 발전시킬 부분

1. 반응형으로 만들기

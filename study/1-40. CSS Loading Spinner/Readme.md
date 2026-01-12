![alt text](image.png)

<h2>HTML</h2>
.container > .spinner

<h2>CSS</h2>
.container 중앙 정렬 / bg : #4285f4

.spinner 80\*80

애니메이션 spinner 0.7s linear infinite

- 키프레임 from to 구문 사용

<h2>궁금한점</h2>

<h3>1. from to 어떻게 쓰는 코드인지 확인하기, 저번에 어떻게 쎃냐면 30%, 60% 이런식으로 썼었는데, 이거를 from to로 바꿔쓸 수도 있겠네. 한번 바꾸보자. 그리고 이게 최신 코드인건가. 아니면 둘다 쓰는 추세인건가</h3>

**@keyframes의 from / to 구문**

- 애니메이션의 시작 상태와 끝 상태”를 정의하는 가장 기본적인 문법

```
@keyframes move {
from { // 0%
transform: translateX(0);
}
to { // 100%
transform: translateX(100px);
}
}

// 이 코드와 동일한 코드
@keyframes move {
0% {
transform: translateX(0);
}
100% {
transform: translateX(100px);
}
}
```

- from ~ to 구문은 상태가 딱 2개일때 사용하는게 좋고, %는 중간단계가 필요할 때 사용하면 된다.

<h3>2. 정사각형의 윗면을 border-top: none으로 지우고, border-radius: 50%를 하니까 선이 균일하지 않은 문제가 발생했다. 이게 none으로 선을 없애는게 아니라, 윗면의 선색을 투명하게 처리를 하면은 선이 균일하게 나오네</h3>

**왜 border-top: none은 깨지고 border-top-color: transparent는 균일할까?**

`border-top: none`

- 위쪽 border가 아예 제거가 되고, 요소의 border box가 위쪽만 비대칭 구조

- border-radius 계산 시

      - 좌/우/아래는 border 있음
      - 위는 border 없음
      - => 곡선 두께 계산이 달라져서 선이 울퉁불퉁해 보임

`border-top-color: transparent`

- border 두께와 구조는 그대로 유지

- 단지 색만 안보이게 처리된 상태

- 브라우저는 여전히 -

  - 사방 동일한 border-width
  - 동일한 radius 기준
  - => 완벽하게 균일한 원형/곡선

- 렌더링 기준이 유지됨
- 픽셀 계산 안정적

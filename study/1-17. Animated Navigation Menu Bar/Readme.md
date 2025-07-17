# 1-17 Animated Navigation Menu Bar

## 출처

https://youtu.be/ewsXz0Du9iA?si=7rhnrAufXlzjgHtk

## Result

## Study

<img src="img/goal.png">

### 1. box-shadow

```
box-shadow: offset-x offset-y blur-radius spread-radius color;
```

- offset-x: 가로 방향 그림자 위치. 양수면 오른쪽, 음수면 왼쪽으로 이동. (필수) [1]
- offset-y: 세로 방향 그림자 위치. 양수면 아래쪽, 음수면 위쪽으로 이동. (필수) [1]
- blur-radius: 그림자 흐림 정도. 값이 클수록 그림자가 더 흐려짐. 기본값은 0 (안 흐림). (선택) [1]
- spread-radius: 그림자 크기 확장/축소. 양수면 그림자가 커지고, 음수면 작아짐. 기본값은 0. (선택) [1]
- color: 그림자 색깔. hex, rgb, rgba 등으로 지정 가능. (선택이지만 보통 넣지) [1]
- 그리고 inset 키워드를 앞에 붙이면 그림자가 요소 안쪽에 생기게 할 수도 있어 [4], [9].

### 2. cubic-bezier

:애니메이션이나 트랜지션 속도감 디테일하게 조절할 때 사용

```
transition-timing-function: cubic-bezier(x1, y1, x2, y2);
/* 또는 animation-timing-function에도 사용 */
```

- x1, y1, x2, y2 이 네 개의 숫자가 핵심인데, 이게 베지어 곡선의 제어점 두 개의 좌표를 나타냄
- x1, x2: 이 값들은 0에서 1 사이어야 해. (시간 축이라고 생각하면 편함)
- y1, y2: 이 값들은 보통 0에서 1 사이지만, 0보다 작거나 1보다 커도 상관없어. (이동 거리나 속도 축이라고 생각하면 되는데, 튕기는 효과 같은 거 만들 때 1보다 크게 쓰기도 함)

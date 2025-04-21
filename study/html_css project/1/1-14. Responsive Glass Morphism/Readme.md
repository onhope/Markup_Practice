# Responsive Glass Morphism

## 출처

https://youtu.be/alW1J24GHK4?si=BHEYnwreKa0axBxo

## goal

<img src="img/goal.png">

## study

**1. css-gridient**
(1) 선형 그라디언트 linear-grident

- 두가지 색상을 특정

```
.simple-linear {
  background: linear-gradient(blue, pink);
}

```

- 방향 변경

```
.horizontal-gradient {
  background: linear-gradient(to right, blue, pink);
}

```

- 대각선 그라디언트

```
.diagonal-gradient {
  background: linear-gradient(to bottom right, blue, pink);
}

```

- 각도 이용

```

.angled-gradient {
  background: linear-gradient(70deg, blue, pink);
}
```

- 두가지 이상의 색 사용하기

```
.auto-spaced-linear-gradient {
background: linear-gradient(red, yellow, blue, orange);
}

```

- 색상 정지 지점 위치 설정

```
.multicolor-linear {
background: linear-gradient(to left, lime 28px, red 77%, cyan);
}
```

- 명확한 선 색 설정

```
  .striped {
  background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
  }

```

(2) 방사형 그라디언트

- 기본 그라디언트

```
.simple-radial {
  background: radial-gradient(red, blue);
}

```

- 색상 정지 지점 위치 설정

```
.radial-gradient {
  background: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
}

```

- 그라디언트 중삼 위치 설정

```
.radial-gradient {
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
}

```

(3) 원뿔형 그라디언트

- 기본

```
.simple-conic {
  background: conic-gradient(red, blue);
}

```

**2. clip-path**  
: 기본 모양이나 SVG 소스에 맞춰서 잘라낼 수 있음  
: 클리핑 범위를 지정  
: 클리핑 범위의 안쪽은 보여지고, 바깥쪽은 숨겨짐

```
/* 키워드 값 */
clip-path: none;

/* <clip-source> 값 */
clip-path: url(resources.svg#c1);

/* <geometry-box> 값 */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* <basic-shape> 값 */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path(
  "M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z"
);

/* 박스와 도형 값 조합 */
clip-path: padding-box circle(50px at 0 100px);

/* 전역 값 */
clip-path: inherit;
clip-path: initial;
clip-path: unset;

```

**3. backdrop-filter**  
: 요소 뒤 영역에 흐림이나 색상 시프트 등 그래픽 효과를 적용할 수 있는 속성

```
/* 키워드 값 */
backdrop-filter: none;

/* SVG 필터를 가리키는 URL */
backdrop-filter: url(commonfilters.svg#filter);

/* <filter-function> 값 */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* 다중 필터 */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* 전역 값 */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: unset;

```

**4. box-shadow**
: 요소에 하나 이상의 그림자를 붙이기

```
box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;
```

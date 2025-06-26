# 1-24 Navigation Menu Bar

## 출처

https://youtu.be/ps575maf37Y?si=qHccik6s20bO59aF

## Result

**전체화면**

<img src="img/result1.png">

<br>

**반응형 (max-width : 960px)**

<img src="img/result2.png">

<br>

**메뉴바 클릭시**
<img src="img/result3.png">

## Study

**(1) nav 태그 안에 menu 클래스를 쓰는 이유**

: nav는 전체 내비게이션 바의 껍데기 역할을 하고, menu 클래스는 그 껍데기 안에 들어가는 내용물의 레이아웃을 잡는 역할을 분리하기 위한 것

| 요소     | 역할                                                        | 주요 CSS 속성                                         |
| -------- | ----------------------------------------------------------- | ----------------------------------------------------- |
| nav      | 내비게이션 바의 전체적인 외형                               | width: 100%, background, box-shadow, padding(수직)    |
| nav.menu | 내비게이션 바 내용물의 레이아웃(가운데 정렬, 내부요소 배치) | max-width, margin: auto, padding(수평), display: flex |

: 이렇게 역할을 분리해두면 나중에 디자인이 바뀌거나 반응형 웹을 만들 때 훨씬 유연하게 대처할 수 있다.

**(2) box-shadow로 요소에 입체감 주기**

```
box-shadow: [가로 오프셋] [세로 오프셋] [블러 반경] [스프레드 반경] [색상] [inset];
```

- [가로 오프셋] : 음수는 왼쪽, 양수는 오른쪽
- [세로 오프셋] : 음수는 위쪽, 양수는 아래쪽

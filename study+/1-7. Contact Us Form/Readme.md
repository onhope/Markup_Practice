# 1-7. Contact Us Form

## Goal

<img src="img/goal.jpg">

## Result

<img src="img/result.png">

## Study

**1. width : 100%와 auto의 차이**

<span style="background:black; color:white; font-weight: bold">width: 100%</span>

<u>요소의 너비를 부모 요소의 너비에 맞추어 100%로 설정합니다.</u>
즉, 부모 요소의 전체 너비를 차지하게 됩니다.
예를 들어, 부모 요소가 500px 너비라면, 자식 요소의 너비도 500px가 됩니다.

<span style="background:black; color:white; font-weight: bold">width: auto</span>

<u>요소의 너비를 자동으로 결정합니다.</u> 이 값은 기본값으로, 요소의 내용이나 자식 요소의 크기에 따라 너비가 조정됩니다.
만약 부모 요소의 너비가 제한되어 있지 않다면, 요소는 내용의 크기에 맞춰 너비를 설정하게 됩니다.

<span style="background:black; color:white; font-weight: bold">요약</span>

width: 100%: 부모 요소의 너비에 맞춰서 100%로 설정.
width: auto: 내용에 따라 자동으로 너비 결정.

**2. css의 flex 상속 여부**

<u>상속 안됨</u>  
그러므로, 각 요소에 대해 개별적으로 flex 속성을 설정해야 함

* CSS <br/>
특정 요소를 중앙 정렬하고 싶을 때, <br/>
parent-child 구조로 놓고 <br/>
child 요소 CSS에 margin: 0 auto;를 추가하면 됨 <br/>
 <br/>
예시) <br/>
-html <br/>
div class="parent" <br/>
  div class="child" <br/>
  ... <br/>
 <br/>
-css <br/>
.child { <br/>
   margin: 0 auto; <br/>
 } <br/>

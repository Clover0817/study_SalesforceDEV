css파일에 주석 추가 /**/ <br/>
css 만들 때 <br/>
.THIS 뒤에 띄어쓰기 한 칸 넣어줘야 제대로 적용됨 <br/>
 <br/>
1. 버튼 디자인 1번째 <br/>

<button class="button1" onCLick="{c.handleClick}">CLICK!</button>

/*버튼 디자인*/
@import url('https://fonts.googleapis.com/css?family=Rubik:700&display=swap');

.THIS * {
  box-sizing: border-box;
}

.THIS body {
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  background: #fff;
}

.THIS button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
}

.THIS button.button1 {
  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
}

.THIS button.button1::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f9c4d2;
  border-radius: inherit;
  box-shadow: 0 0 0 2px #b18597 0 0.625em 0 0 #ffe3e2;
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}

.THIS button.button1:hover {
  background: #ffe9e9;
  transform: translate(0, 0.25em);
}

.THIS button.button1:hover::before {
  box-shadow: 0 0 0 2px #b18597 0 0.5em 0 0 #ffe3e2;
  transform: translate3d(0, 0.5em, -1em);
}

.THIS button.button1:active {
  background: #ffe9e9;
  transform: translate(0em, 0.75em);
}

.THIS button.button1:active::before {
  box-shadow: 0 0 0 2px #b18597 0 0 #ffe3e2;
  transform: translate3d(0, 0, -1em);
}


 <br/>

/*텍스트 디자인*/ <br/>
.THIS .main{
  width: 90vw;
  margin: 0 auto;
  text-align: center;
}

.THIS .animation span{
  position: relative;
  font-size: 30px;
  font-weight: 600;
  color: white;
}

.THIS .animation .memberText{
  color: blue;
}

.THIS .memberText:before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  border-left: 2px solid #AB3A2C;
  animation: animate 3s steps(5);
}

@keyframes animate{
  40%, 60%{
      left: calc(100% + 1px);
  }

  100%{
      left: 100%;
  }
}

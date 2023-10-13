SOC: Seperation Of Concerns <br/>
<br/>
...<br/>
<br/>
onChange={handleCityChange} is not valid attribute for lightning-input. All attributes name should be all lowercase.: Source<br/>
->대문자 작성시 오류.. onchange<br/>
<br/>
Compilation Failure weatherApp.html:10,42 : LWC1055: onClick={getWeather} is not valid attribute for lightning-button. All attributes name should be all lowercase.: Source<br/>
<br/>
...<br/>
<br/>
lightning Web Component-Decorators<br/>
@api: 변수나 기능을 공개적으로 노출시키고 속성을 반응시키는 데 사용<br/>
@track: 변수를 비공개로 만들 때 사용하지만 반응적, 구성요소가 변경되면 다시 렌더링. 추적된 속성은 비공개 반응 속성이라고 하며 변경사항이 구성요소에만 반영<br/>
@wire: Salesforce 데이터를 읽기 위해 사용, wire 서비스가 데이터를 제공하면 다시 렌더링. 구성요소는 js 클래스에서 와이어 어댑터 또는 Apex 메서드 지정<br/>
<br/>

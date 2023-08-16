<h3>problem & solution</h3>
1. Combobox list에 글자 출력이 안됨
options = Class__c 레코드의 목록 (List<Class__c>)
Name 필드를 사용하여 해당 레코드의 이름을 콤보 박스 리스트에 출력해야 함
->options 리스트를 Name 필드 값을 가진 객체로 변환하고 변환된 객체 목록을 콤보 박스에 바인딩

var options = returnValue.map(function(item) {
                    return { label: item.Name, value: item.Id };
                });

getInitData 함수에서 returnValue 리스트를 반복하면서 각 Class__c 레코드의 Name 값을 추출하여 options 객체 배열에 추가하고, 이 배열을 컴포넌트의 v.options 속성에 설정

2. Close Button 생성
handleCancel: function(component, event, helper) {
       $A.get("e.force:closeQuickAction").fire();
    }

작동되는지 확인 필요

3. 창이 무한로딩되는 경우

JavaScript 오류: JavaScript 코드에서 오류가 발생하면 컴포넌트가 제대로 작동하지 않을 수 있습니다. 브라우저 개발자 도구를 열어 오류 메시지를 확인해보세요. 오류 메시지는 어떤 부분에서 발생하는지 파악하는 데 도움을 줄 수 있습니다.

Apex 컨트롤러에서의 무한 루프: Apex 컨트롤러나 서버 측 코드에서 무한 루프가 발생하는 경우 페이지나 컴포넌트가 무한으로 로딩될 수 있습니다. Apex 코드를 검토하여 무한 루프가 있는지 확인하세요.

서버 요청 문제: 서버에서 데이터를 가져오는 과정에서 문제가 발생할 수 있습니다. @AuraEnabled 메서드 내에서 무한루프에 빠지지 않도록 확인하고, 서버 응답을 기다리는 동안 컴포넌트가 화면에 표시되도록 구성되었는지 확인하세요.

캐시 또는 데이터 문제: 브라우저의 캐시나 데이터 문제가 로딩 문제를 일으킬 수 있습니다. 캐시를 지우고 페이지를 새로고침하거나 다른 브라우저를 사용하여 확인해보세요.

조건문 또는 제어 로직의 문제: 컴포넌트의 조건문이나 제어 로직에 문제가 있을 수 있습니다. 무한 루프가 발생하지 않도록 컴포넌트의 흐름을 신중하게 검토하세요.

컴포넌트 자체 문제: 컴포넌트 자체의 버그나 이슈가 로딩 문제를 일으킬 수 있습니다. 컴포넌트의 구조와 로직을 검토하여 문제를 찾아보세요.

네트워크 문제: 가끔은 네트워크 문제로 인해 서버와의 통신이 불안정할 수 있습니다. 네트워크 연결을 확인하고 다른 네트워크에서도 문제가 발생하는지 확인해보세요.

4. lightningComponent - ChangeClassController Error
Error while creating component for lightning component quick action [Action failed: c:ChangeClass$controller$getInitData [helper.getInitData is not a function]]


var editedValue = event.detail.value;

var editedValue = event.getSource().get("v.value");

var editedValue = event.target.checked;

->Lightning 컴포넌트의 onchange 이벤트 처리:
Lightning 컴포넌트에서 onchange 이벤트에서 v.value 대신 event.target.checked를 사용
test해본 결과 true값 반환 정상적



updateCheck: function(rowData, value) {
        rowData.IsChecked__c = value;
    }


->helper.js에서 JavaScript 코드를 사용하여 해당 객체 필드를 직접 업데이트하는 것은 클라이언트 측에서만 변경을 수행하며, 실제 Salesforce 레코드에는 반영되지 않음. 레코드를 업데이트하려면 서버 측에서 Apex 메서드를 호출하여 업데이트를 수행해야

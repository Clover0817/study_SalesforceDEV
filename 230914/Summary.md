*ApexSpecialist Superbadge Challenge5<br/>
Test Case 통과 안된 파트<br/>
<br/>
if (maintenanceCycles.containsKey(closedCase.Id)) {  //closedCase.Id를 key로 하는 maintenanceCycles 맵에 해당 유지보수 요청이 이미 존재하는지 확인. 있는 경우, 해당 유지보수 요청의 주기를 가져와서 현재 날짜에 일정 일수 추가<br/>
                    newCase.Date_Due__c = Date.today().addDays((Integer) maintenanceCycles.get(closedCase.Id)); //유지보수 요청에 따라 유지보수 요청의 마감일을 설정<br/>
}else { //maintenanceCycles 맵에 해당 유지보수 요청 정보가 없는 경우,<br/>
    newCase.Date_Due__c = Date.today().addDays((Integer) closedCase.Product.maintenance_Cycle__c); // closedCase.Product.maintenance_Cycle__c를 가져와서 현재 날짜에 일정 일수를 추가해 유지보수 요청의 마감일을 설정<br/>
}<br/>
<br/>
->해당 코드 블록은 "유지보수 주기"를 계산하여 newCase.Date_Due__c 필드에 할당하는 데 사용. 이 코드는 유지보수 요청(Case)를 생성할 때 해당 요청이 언제 마감되어야 하는지를 결정 <br/>

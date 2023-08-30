*Apex Specialist Super Badge Introduction<br/>
<br/>
travel in Recreational Vehicle|X<br/>
HowWeRoll -> RV Rental Company<br/>
<br/>
using Salesforce Platform to automate/scale Company's reach|integrate back-office System(warehouse inventory)<br/>
<br/><br/>

Case-> Maintenance Request: repair service requests<br/>
Product-> Equipment: parts/items for fixing<br/>
<br/>
+Vehicle<br/>
+Equipment Maintenance Item <br/>
<br/>
automation<br/>
-schedules regular checkup|based on the date that the equipment was installed<br/>
-if original Routine Maintenance request's expired -> create new requests tied to the same records<br/>
-calculate due dates by using maintenance cycle(if multiple -> apply the shortest one)<br/>
<br/>
HQ-Salesforce|Warehouse-Seperate legacy System-> need Data Synchronization<br/>
<br/>
REST callout to get a list of equipments to be updated from warehouse system by using external ID<br/>
<br/><br/>

update data at 1AM daily<br/>
<br/>
Test the code: trigger-both positive, negative parts|need assertions<br/>
+include positive use case that handle at least 300 records at once<br/>
+assert scheduled asynchronous job's in the queue<br/>
->100% code coverage<br/>
 <br/><br/>

*Apex Specialist Challenge2: Code Logic<br/>
1. MaintenanceRequestHelper.apxc<br/>
-updateWorkOrders(): 주어진 caseList를 기반으로 work order 업데이트 작업 처리<br/>
-getDueDate(): Maintenance_Request__c의 Id를 기반으로 work order 완료 날짜를 계산하는 데 사용, 각 Maintenance_Request__c의 최소 Maintenance_Cycle__c 값을 계산하여 그 값을 Map으로 반환<br/>
주어진 Case 목록을 순회하면서 특정 조건을 만족하는 경우, 새로운 작업 오더 Case를 생성 <br/>
'closed' 상태의 Case 중에서 'Repair' 또는 'Routine Maintenance' 유형의 경우에만 처리 <br/>
새로운 Case 레코드를 생성하고 필요한 필드 값을 설정한 후, 이를 newCases 리스트에 추가 <br/>
마지막으로, insert newCases를 통해 새로운 Case 레코드를 데이터베이스에 추가<br/>
<br/>
<br/>
*해결해야 할 문제<br/>
Challenge Not yet complete... here's what's wrong:<br/>
Closing a Maintenance Request of type 'Routine Maintenance' or 'Repair' did not join the new Maintenance Request with the correct equipment. The challenge is expecting the new Maintenance Request to be joined to the same Equipment as the closed Maintenance Request.<br/>
<br/>
참고)Steps to search IntelliJ search all files<br/>
<br/>
Ctrl+N : finds a class by name.<br/>
Ctrl+Shift+N : finds any file or directory by name (supports CamelCase and snake_case). note. ...<br/>
Ctrl+Alt+Shift+N : finds a symbol. In IntelliJ IDEA, a symbol is any code element such as method, field, class, constant, and so on.<br/>
Ctrl+Shift+A : finds an action by name. <br/>


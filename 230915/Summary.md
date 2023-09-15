*ApexSpecialist SuperBadge Challenge5 Test Automation Logic <br/>
Code Coverage 96%로 마무리(단계 통과를 하려면 100%여야 해서, 일단 처리 안된 else문 주석 달고 Code Coverage 100% 만듦) <br/>
추후 보완 예정 <br/>
<br/>
@TestClass 작성시 <br/>
메소드당 test.startTest()는 한번만<br/>
<br/>
test.startTest() <br/>
... <br/>
test.stopTest() <br/>
... <br/>
test.startTest() <br/>
... <br/>
test.stopTest() <br/>
->Failed:Error-System.FinalException: Testing already started <br/>
<br/>
<br/>
maintenanceCycles.containsKey(closedCase.Id) 조건이 false가 되는 상황을 시뮬레이션하기 위해서는, closedCase.Id와 관련된 어떠한 Equipment_Maintenance_Item__c 레코드도 생성하지 않아야 <br/>
<br/>
*Mocking Apex Test<br/>
Apex Mock 클래스는 테스트에서 외부 의존성을 가진 클래스나 객체를 대체하여, 특정 동작이나 값을 시뮬레이션하기 위해 사용됨<br/>
외부 서비스 호출: 웹 서비스 호출, API 호출 등 외부 서비스와의 통신 대체<br/>
데이터베이스 연동: 데이터베이스 작업을 대체하거나, 특정 쿼리 결과 조작<br/>
난수 생성: 예측 가능한 값을 반환하여 특정 시나리오 테스트<br/>
날짜 및 시간 조작: 현재 시각을 조작하여 시간에 따라 다르게 동작하는 코드 테스트 가능<br/>
<br/>
*ApexSpecialist SuperBadge Challenge6<br/>
Code Coverage: 92% <br/>
<br/>
coverage 안 찬 부분<br/>
 public static void execute(QueueableContext context) {<br/>
        runWarehouseEquipmentSync();<br/>
    } <br/>
<br/>
execute 메서드는 Queueable 인터페이스를 구현한 것->실제로는 백그라운드에서 비동기로 호출됨<br/>
이를 태우기 위해선 Test.startTest() 및 Test.stopTest() 사이에 Queueable 작업을 실행시키기 위해 System.enqueueJob(new WarehouseCalloutService())를 사용-> execute 메서드가 호출됨<br/>
<br/>
Test.startTest();<br/>
        <br/>
// Set up a mock callout response<br/>
Test.setMock(HTTPCalloutMock.class, new WarehouseCalloutServiceMock());<br/>
        <br/>
// Enqueue the queueable job<br/>
ID jobID = System.enqueueJob(new WarehouseCalloutService());<br/>
        <br/>
// Finish the test context<br/>
Test.stopTest(); <br/>



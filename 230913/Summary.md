*Apex Specialist Challenge3 <br/>
이 문제는 외부 웨어하우스 시스템에서 장비 목록을 가져와 Salesforce에 업데이트하는 작업을 하는 Apex 클래스인 WarehouseCalloutService를 구현.<br/>
제공된 코드를 사용하여 장비 동기화를 수행하려면,<br/>
1. REST Endpoint 확인: 코드 내에서 사용하는 WAREHOUSE_URL 값이 실제 외부 웨어하우스 시스템의 올바른 엔드포인트를 가리키는지 확인<br/>
2. @future 어노테이션: runWarehouseEquipmentSync 메서드에 붙은 @future(callout=true) 어노테이션은 비동기로 실행됨. 즉, 즉시 실행되지 않고 특정 조건에서 실행되므로 동작이 완료될 때까지 기다려야 할 수 있음.<br/>
3. 데이터 존재 확인: 제공된 코드는 외부 시스템에서 가져온 장비 목록을 Salesforce의 Product2 객체로 변환하고 upsert. 코드에서 가져오는 데이터와 Salesforce 레코드 간의 일치를 확인해야. 외부 시스템에서 가져온 SKU 값을 기준으로 Salesforce 레코드를 식별하는 것이 중요.<br/>
4. 오류 처리: 코드는 HTTP 응답 코드를 확인하여 작업의 성공 또는 실패를 처리. 디버그 로그에서 HTTP 응답 코드 및 본문을 확인하여 오류 메시지를 식별.<br/>
5. 작업 실행: Challenge에서 언급한 대로 이 클래스가 제대로 실행되었는지 확인. 코드를 실행하고 외부 시스템에서 가져온 장비 목록을 Salesforce에 업데이트해야.<br/>
<br/>
*Challenge3 오류<br/>
Challenge Not yet complete... here's what's wrong:<br/>
The WarehouseCalloutService class does not appear to have run successfully as the equipment records are not found in the database. <br/>
The REST endpoint returns 22 records so your org should have at least 22 records in the Product2 table. <br/>
Make sure that you successfully run this class at least once before attempting this challenge. <br/>
Since this class is implementing the queueable interface, you may want to wait to ensure that it has processed successfully.<br/>
<br/>
->"WarehouseCalloutService" 클래스가 성공적으로 실행되지 않았음. <br/>
데이터베이스에서 장비 레코드를 찾을 수 없음.<br/>
REST 엔드포인트는 22개의 레코드를 반환했으므로 Salesforce의 "Product2" 테이블에는 적어도 22개의 레코드가 있어야 한다는 메시지.<br/>
<br/>
문제 해결 과정<br/>
1. 실행 확인: "WarehouseCalloutService" 클래스를 실행하여 외부 시스템에서 장비 목록을 가져와 Salesforce에 업데이트했는지 확인.<br/>
2. 데이터 확인: Salesforce 조직에서 "Product2" 테이블에 적어도 22개의 레코드가 있는지 확인.<br/>
3. 디버그 로그 확인: 코드에서 System.debug를 사용하여 디버그 로그에 정보를 기록합니다. 코드 실행 후 디버그 로그를 확인하여 어떤 작업이 수행되었는지 확인. 특히 HTTP 응답 코드와 본문을 확인하여 오류 메시지를 찾을 수 있음.<br/>
4. 대기 시간: 이 클래스는 Queueable 인터페이스를 구현하므로 비동기로 실행->실행이 완료될 때까지 기다려야 할 수 있음. 실행 후에도 데이터가 업데이트되지 않는 경우 일정 시간을 기다린 후 다시 시도해야.<br/>
<br/>
=> 해결:WarehouseCalloutService 클래스의 private static final String WAREHOUSE_URL = 'https://th-superbadge-apex.herokuapp.com/equipment' URL을 Setting->Security->Remote Site Settings에 등록<br/>
<br/>
*Apex Specialist Challenge4<br/>
에러 해결: System.StringException: Invalid id: Vehicle123<br/>
ProductId도 Salesforce ID와 같이 알파벳, 숫자 조합 15/18자?<br/>
먼저 Vehicle object를 생성하고 해당 object에 부여된 ID 값 사용하도록<br/>
<br/>
[About clone method]<br/>
public SObject clone(Boolean preserveId, Boolean isDeepClone, Boolean preserveReadonlyTimestamps, Boolean preserveAutonumber)<br/>
-preserveId(optional)- If set to true, the ID is copied to the duplicate, Default is false, the ID is cleared.<br/>
-isDeepClone(optional)- determines whether the method creates a full copy of the SObject field or just a reference.<br/>
-참고: https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_clone<br/>
<br/>

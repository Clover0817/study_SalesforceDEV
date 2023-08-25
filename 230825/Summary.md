Test Class

* Test Class
    * Coverage가 75% 이상이어야 함
    * Test를 필요로 하는 파일이 아닌 별도로 생성한 파일에 Test Code를 작성해야 함
    * Test Code 실행 중 Error 발생 시 Org에서 진행하는 모든 배포는 차단됨
    * Visuaforce는 Test Code가 필요 없음 (단, Controller로 연결된 Apex Class는 필요함)
    * Test Code의 레코드는 Org에 실제로 저장되지 않고 실제로 존재하는 레코드를 Query해서 Test Class에서 사용할 수 있음
    * @isTest 라는 Annotation을 표기한 Test Method를 통해 작성함


Test Class 작성시 주의 사항
null 객체 검사 시 
Contact student = null;
insert student;
log Status: ttempt to de-reference a null object
이때, 직접 null을 주지 말고 유효하지 않은 값을 집어넣기
Boolean result2 = ChangeClassController.confirmChangeClass('InvalidId', 'InvalidId');

그래도 여전히 test 통과 안됨
log Status: List has no rows for assignment to SObject 
->list가 비어있을 때 오류나게 됨.
try-catch문으로 처리하거나, List 객체로 선언할 것.

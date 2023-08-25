js에서는 sql문 사용 불가-> apex 클래스에서 처리해야

js에서 디버깅
console.log('student.Class__r.Grade__c :: ' + student.Class__r.Grade__c);
console.log('selectedClass.Grade__c :: ' + selectedClass.Grade__c);

apex class에서 디버깅
System.debug('CheckClass called');
System.debug('selectedClass:: ' + selectedClass.Id);

Apex 컨트롤러에서 checkClass 메서드의 반환값이 true로 하드코딩되어 있다면, JavaScript에서 response.getReturnValue() 값이 undefined로 나오는 것은 정상

*VisualForcePage -> PrintStudentList2<br/>
기존<br/>
<img width="190" alt="PrintStudentList" src="https://github.com/Clover0817/study_SalesforceDev/assets/77714668/ef0c2c6d-0e6c-4089-aa22-fcb5785060e9">

이후<br/>
<img width="266" alt="PrintStudentList2" src="https://github.com/Clover0817/study_SalesforceDev/assets/77714668/e5843536-a3c8-428e-acb5-d8bb8612fff7">

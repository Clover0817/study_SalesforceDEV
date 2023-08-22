1. Error:Illegal assignment from Decimal to Integer 
Integer.valueOf()/Decimal.intValue()

Grade(Which is Integer) = student.Class__r.Grade__c;(Which is Decimal) -> error
해결-> Grade = Integer.valueOf(student.Class__r.Grade__c);

2. ===
자바스크립트에서 사용되는 비교 연산자 중 하나로, '일치'를 비교하는 연산자. 이 연산자는 값과 데이터 타입까지 비교하며, 값과 데이터 타입이 모두 동일한 경우에만 true를 반환

3. type:url
lightning datatable에서 type:url로 주면 https://가 자동으로 붙음
-> typeAttributes로 보여지는 필드 설정 가능
{label: '학생 정보', fieldName: 'Id', type: 'url', typeAttributes: { label: {fieldName: 'Id'}}}


*ChangeClass 문제
1. 같은 학년인데 타 학년 에러 출력
2. Confirm 눌러도 동작x

*SearchStudent 문제
1. url 이동

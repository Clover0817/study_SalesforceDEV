bingoMember 25명 -> 25명 이상으로 늘리니 호명된 이름 중복 문제 발생 <br/>
 <br/>
isChecked = True로 업데이트 해주는 Controller 메서드에 에러가 생긴 것인데 <br/>
System.QueryException: List has no rows for assignment to SObject <br/>
 <br/>
쿼리문 obj 변수로 받아올 때 null이면 에러가 남 <br/>
List로 선언할 것!!!! 명심 <br/>
!!!!!!!!!!!!!!!!!!!!!!명심할 것 <br/>
 <br/>
+log 잘 확인하기!!!!!!! <br/>
 <br/>
System.debug/Console.log/Salesforce Inspector 잘 활용할 것 <br/>

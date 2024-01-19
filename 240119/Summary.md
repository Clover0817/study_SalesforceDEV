lightning Component Controller js 코드에서 <br/>
apex Controller로 보낼 때 파라미터 값 설정시<br/>
변수명을 같게 줘야 함!<br/>
<br/>
action.setParams({<br/>
  studentId: studentId,<br/>
  selectedClassId: selectedClassId<br/>
})<br/>
<br/>
@AuraEnabled<br/>
public static Boolean confirmChangeClass(String studentId, String selectedClassId) {<br/>
    ...<br/>
}<br/>

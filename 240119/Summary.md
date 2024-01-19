lightning Component Controller js 코드에서
apex Controller로 보낼 때 파라미터 값 설정시
변수명을 같게 줘야 함!

action.setParams({
  studentId: studentId,
  selectedClassId: selectedClassId
})

@AuraEnabled
public static Boolean confirmChangeClass(String studentId, String selectedClassId) {
  ...
}

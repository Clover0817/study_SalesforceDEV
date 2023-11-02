1) OutlookSync job->5분마다 outlook에 있는 캘린더 일정들을 업뎃해주고 있음<br/>
근데 outlook 기준으로 업데이트를 반복하다보니, salesforce org 내에서 수정한 내용이 반영되지 않고 자꾸 outlook에 등록된 정보로 되돌아감<br/>
<br/>
assignedTo API Name->ownerId<br/>
<br/>
<br/>
첫번째 수정 코드인데<br/>
if (sfEvent.OwnerId == null) {<br/>
                    sfEvent.OwnerId = ownerId;<br/>
}<br/>
이렇게 되면 sfEvent가 new Event()로 생성된 변수이기 때문에 ownerId가 무조건 null일 것<br/>
그러면 현 문제점을 전혀 해결해주지 못함<br/>
<br/>
두번째 수정 코드<br/>
if (!sfEventByOutlookId.containsKey(sfEvent.OutlookId__c)) {<br/>
                        sfEvent.OwnerId = ownerId;<br/>
}<br/>
이렇게 작성한 의도는, 새로 insert되는 경우에는 ownerId 초기화가 필요하니까 update되는 경우에만 ownerId가 초기화되지 않도록.. test 필요<br/>
<br/>
<br/>
일단은 assigned To 변경되는 부분만 수정을 하고 있는데 다른 부분들도 아마 초기화 될 건데..<br/>
<br/>
2) refreshed Dev Sandbox 문제<br/>
refresh를 하면서 org가 좀 이상해졌음<br/>
Production으로부터 Sandbox를 refresh 하게 되면, Production 데이터로 덮어쓰기? 가 되는데<br/>
그러면 Sandbox에서 작업하던 것들이 사라짐<br/>
<br/>
일단 username이 production name으로 자동 변경이 되고 비밀번호도 production 비밀번호로 변경됨<br/>
그리고 지금 run test를 하면 에러가 나는 상황<br/>
<br/>
Testing started at 오전 10:59 ...<br/>
<br/>
Using connection 'VatechDevelop'.<br/>
Error 403/Forbidden - INVALID_INPUT: This class name's value is invalid: LightningForgotPasswordControllerTest. Provide the name of an Apex class that has test methods.<br/>
<br/>
Test ignored.<br/>
<br/>
Test method AccountSRM_tr_test.doTest was never reported as completed.<br/>
Perhaps it doesn't exist on the server?<br/>
<br/>
<gpt에서 확인해보라고 한 부분><br/>
클래스와 테스트 메서드 이름:<br/>
<br/>
테스트 클래스의 이름은 "LightningForgotPasswordControllerTest" 여야 합니다. 이 이름이 올바른지 확인하세요. 클래스 이름은 테스트 클래스에 대한 표준 명명 규칙을 따라야 합니다.<br/>
테스트 메서드 존재 여부:<br/>
<br/>
AccountSRM_tr_test 클래스 안에 doTest라는 이름의 테스트 메서드가 있는지 확인하세요. 메서드 이름이 정확하게 일치해야 합니다.<br/>
권한 및 접근성:<br/>
<br/>
Salesforce 조직에서 실행 중인 사용자가 테스트 클래스와 메서드에 대한 충분한 권한을 가지고 있는지 확인하세요.<br/>
테스트 클래스 마크업:<br/>
<br/>
클래스 정의 위에 @isTest 어노테이션이 있는지 확인하세요. 이 어노테이션은 이 클래스가 테스트 클래스임을 나타냅니다.<br/>
코드 내 오류:<br/>
<br/>
테스트 메서드 내에서 문법 오류나 논리 오류가 있는지 확인하세요. 이런 오류가 있을 경우에도 테스트가 실패할 수 있습니다.<br/>
Salesforce 서버 접근성:<br/>
<br/>
Salesforce 서버와의 연결이 정상인지 확인하세요. 네트워크 문제가 발생할 수 있습니다.<br/>
<br/>
->일단은 generate offline symbol table 돌림. 전체 run test 했을 때 에러나는 건 ps도 똑같아서 일단 킵<br/>
<br/>
3) VT_OutlookSyncSchedulableTest 돌렸을 때 나는 에러<br/>
first error: DUPLICATE_USERNAME, Duplicate Username.<br>The username already exists in this or another Salesforce organization. Usernames must be unique across all Salesforce organizations. To resolve, use a different username (it doesn't need to match the user's email address). : [Username]<br/>
<br/>
4) Refresh 2번째-> 로그인 안됨 에러<br/>
첫번째 refresh 했을 때 auto-activate 체크를 해버려서, 그걸 해제하기 위해 2번째 refresh를 진행했는데<br/>
또 auto-activate 체크 해제를 까먹음<br/>
<br/>
이번에는 로그인이 아예 되지 않음<br/>
현재 dev sandbox 접근이 불가한 상태,,<br/>

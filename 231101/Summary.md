syncAllOutlookEvent는 Outlook에서 가져온 이벤트를 Salesforce org에  동기화하고, 중복된 이벤트를 업데이트 및 미래 이벤트 삭제하는 작업 수행 <br/>
<br/>
현 문제 상황은, 5분마다 실행되는 이 메서드때문에 assigned to에 지정된 user가 자꾸 바뀐다는 건데<br/>
<br/>
내 생각엔 outlook에서 정보를 가져오는 거라 salesforce에서 바꾸는 게 의미가 없는 듯..<br/>
<br/>
dev에선 outlook 연동이 안되어 있어서 업뎃 안되는 거 같음<br/>
<br/>
<br/>
if (sfEvent.OwnerId == null) {<br/>
                    sfEvent.OwnerId = ownerId;<br/>
                }<br/>
이렇게 바꿔서 테스트<br/>
<br/>
1) Sandbox 환경과 Production 환경이 다른가<br/>
<br/>
Sandbox event 업뎃이 안되길래 코드가 다른 줄 알았으나<br/>
그것보단 outlook이랑 연동이 안되어 있고, 5분마다 업뎃되는 레코드들은 outlook에서 받아온 것들만 되는 것 같음<br/>
<br/>
이 과정에서 refresh랑 sandbox 생성 등을 했는데 함부로 건들지 말자..<br/>


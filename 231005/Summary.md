*정보처리기사 실기 대비1 <br/>
<br/>
static -> 메모리에 1번 할당되어서 프로그램이 종료될 때 해제되는 것을 의미. 인스턴스를 여러번 생성하더라도 메모리 계속 공유함<br/>
<br/>
인증(Authentication): 등록된 유저인지 아닌지 식별<br/>
인가(Authorization): 해당 유저의 권한이 무엇인지, 어디까지 권한이 있는지 권한 식별<br/>
과금(Accounting): 리소스 사용에 대한 정보를 수집하고 관리<br/>
<br/>
ARP Spoofing 공격: 근거리 통신망(LAN)에서 사용하는 ARP 프로토콜의 허점(ARP 메시지를 이용해 상대방의 데이터 패킷을 중간에서 가로채는 중간자 공격 기법)을 이용해 자신의 MAC 주소를 다른 컴퓨터의 MAC인 것처럼 속이는 공격<br/>
<br/>
printf()의 서식지정자 %p = 포인터의 메모리 주소를 출력해줌<br/>
int *numPtr1;<br/>
int **numPtr2;<br/>
int num1 = 10;<br/>
<br/>
numPtr1 = &num1;<br/>
numPtr2 = &numPtr1;<br/>
<br/>
printf("%p\n", *numPtr2); // 0x7ffdcef3b3f4 -> numPtr1의 주소<br/>
printf("%d\n", **numPtr2); // 10 -> numPtr1이 가리키고 있는 값<br/>
<br/>
Grant: User에게 접속권한, 오브젝트 생성권한, DBA 권한 등을 부여할 수 있는 명령어<br/>
Revoke: User에게 부여한 권한을 다시 회수하는 명령어<br/>
<br/>
Coupling-Control<br/>
어떤 모듈이 다른 모듈의 내부 논리 조직을 제어하기 위한 목적으로 제어 신호를 이용해 통신하는 경우의 결합도<br/>
하위 모듈에서 상위 모듈로 제어 신호가 이동하여 상위 모듈에게 처리 명령을 부여하는 권리 전도 현상 발생<br/>
<br/>
OSI 7계층<br/>
데이터링크: 물리계층을 통해 송수신되는 정보의 오류와 흐름을 관리하여 안전한 정보의 전달을 수행할수 있도록 도와주는 역할<br/>
네트워크: 데이터를 목적지까지 가장 안전하고 빠르게 전달하는 기능<br/>
표현: 수신자에서 데이터의 압축을 풀 수 있는 방식으로 된 데이터 압축<br/>
<br/>
Aggregation은 클래스들 사이의 전체 또는 부분 같은 관계<br/>
Generalization은 한 클래스가 다른 클래스를 포함하는 상위 개념일 때 IS-A관계라하며, 일반화 관계로 모델링<br/>
<br/>
테스트케이스의 구성요소: 식별자ID, 테스트 항목, 테스트 조건, 테스트 데이터, 예상 결과<br/>
<br/>
DES: 블록 암호의 일종으로, 미국 NBS에서 국가 표준으로 정한 암호, 64비트 평문을 64비트 암호문으로 암호화하는 대칭키 암호 알고리즘. 7비트마다 오류 검출을 위한 정보가 1비트씩 들어가 실질적으로는 56비트<br/>
<br/>
case문에 break 유무 체크<br/>
<br/>
&: 비트연산자. 같은 자리를 비교했을 때 모두 같을 경우 True/아니면 False<br/>
|: 비트연산자. 같은 자리를 비교했을 때 하나라도 조건이 맞을 경우 True/아니면 False<br/>
^: XOR연산자. 두 값이 같으면 False/아니면 True<br/>
<br/>
public static String A()<br/>
return out<br/>
->out이라는 String 반환값을 static이라는 메모리에 저장한다는 의미. static 메서드는 객체 생성 없이 호출할 수 있음.<br/>
<br/>
문제에서 Test a = new Test()와 같은 객체 생성 코드가 없을 경우, static 키워드 필요.<br/>
<br/>
상속 키워드<br/>
extends: 클래스 1개만 상속 가능/부모의 모든 권한 가져옴<br/>
implements: 인터페이스(상속은 하지만, 내용은 비어있음) 다중 상속 가능<br/>
interface: 추상클래스.<br/>
super: 상위 클래스의 생성자를 호출할 때 또는 상위 클래스 멤버변수/메서드에 접근할 때 사용됨(public, protected일 때 가능)<br/>
<br/>
<br/>
출력 답안 주의) println -> 개행<br/>
<br/>
출력결과 0,1로 이루어졌다 = 2로 나눈 나머지 & 길이 수만큼 반복문<br/>
<br/>
Child extends Parent -> Overriding 변경된 동작이 더 높은 우선순위를 가짐<br/>
Parent obj = new Child() -> Child의 메서드가 실행됨<br/>
<br/>
<br/>
drop view 뷰 삭제, 연쇄적 삭제 CASCADE<br/>
요구사항 분석/개념적 설계/논리적 설계/물리적 설계/구현<br/>
<br/>
파이썬 슬라이싱: a[start : end : step]<br/>
시작 위치:end 포함하지 않음:보폭<br/>
<br/>
구문 커버리지: 조건에 따른 모든 로직을 확인하기 보다는 모든 코드가 실행되었는지를 확인<br/>
결정 커버리지: 브랜치 커버리지라고도 하며 조건식이 True, False를 가지는 경우 충족됨<br/>
조건 커버리지: 모든 개별 조건식이 True, False를 갖도록<br/>
<br/>
<br/>
String str1 = "Java";<br/>
String str2 = "Java";<br/>
str1과 str2이 참조하는 메모리 공간(객체의 주소 값)은 동일. 이미 String str1 = "Java"에서 문자열 "Java"의 메모리 공간이 할당되었기 때문에 새로운 메모리 공간이 할당되지 않음<br/>
<br/>
String str1 = "Java";<br/>
String str2 = new String("Java");<br/>
하지만 new 키워드로 객체를 생성하면 동일한 문자열 값이라도 JVM은 새로운 공간(주소)을 할당. 문자열 값은 동일하지만 주소가 다르므로 == 연산자는 false를 반환<br/>



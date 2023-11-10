빙고게임 Bingo Member가 모두 호명되고 나면, 게임 종료<br/>
초기화 -> isChecked가 모두 false되도록 하고 다시 시작할 수 있게 구현해야 함<br/>
<br/>
<br/>
초기화 버튼 눌렀을 때 콘솔에 찍히는 에러<br/>
Error in Reset Game: [{"exceptionType":"System.QueryException","isUserDefinedException":false,"message":"List has more than 1 row for assignment to SObject","stackTrace":"Class.BingoForMCController.resetGame: line 58, column 1"}]<br/>
<br/>
이 오류 메시지는 BingoForMCController Apex 클래스의 resetGame 메서드에서 System.QueryException이 발생했음을 나타냅니다. 특히 라인 58에서 문제가 발생한 것으로 보입니다. 이 문제는 쿼리 결과가 하나 이상의 행을 반환할 때 해당 쿼리 결과를 단일 sObject 변수에 할당하려고 시도할 때 발생하는 것으로 보입니다.<br/>
<br/>
이 문제를 해결하려면 Apex 코드를 수정하여 쿼리가 여러 행을 반환하는 경우를 처리해야 합니다. 일반적으로는 쿼리 결과를 저장하기 위해 List를 사용하고, 그에 따라 처리하는 방식을 수정하는 것입니다. <br/>

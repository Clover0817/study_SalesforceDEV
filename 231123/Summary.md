BingoCell__c obj update 시  <br/>
<br/>
related object의 필드는 업데이트가 되지 않음<br/>
<br/>
1. 따로 update 문 추가<br/>
ex) update bingoCell.BingoBoard__r;<br/>
<br/>
->for 문 내에서 update 하니까 에러남 Too many DML statements: 151"<br/>
<br/>
<br/>
2.<br/>
if (listBC != null) {<br/>
    List<BingoBoard__c> bingoBoardListToUpdate = new List<BingoBoard__c>();<br/>
    Set<Id> uniqueBoardIds = new Set<Id>();<br/>
<br/>
    for (BingoCell__c bc : listBC) {<br/>
        bc.IsChecked__c = true;<br/>
        String fieldName = 'Cell_' + String.valueOf(bc.CellX__c).leftPad(1, '0') + String.valueOf(bc.CellY__c).leftPad(1, '0') + '__c';<br/>
        bc.BingoBoard__r.put(fieldName, 1);<br/>
<br/>
        // Check if the BingoBoard__c record is not already added to the list<br/>
        if (!uniqueBoardIds.contains(bc.BingoBoard__c)) {<br/>
            bingoBoardListToUpdate.add(bc.BingoBoard__r);<br/>
            uniqueBoardIds.add(bc.BingoBoard__c);<br/>
        }<br/>
    }<br/>
<br/>
    update bingoBoardListToUpdate;<br/>
    update listBC;<br/>
}<br/>
<br/>
// Perform bulk update outside of the loop<br/>
update bingoBoardListToUpdate;<br/>
<br/>
<br/>
<br/>
list 타입 업데이트 하려고 할 때 duplicate id 에러나길래 set으로 선언하려고 하니까 set타입 update 안돼서<br/>
list로 선언 후 set타입 이용해서 중복id 없는지 검사<br/>

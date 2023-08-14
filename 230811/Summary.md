problem&solution
1. navigation bar에서 custom object 표시하기
<br/>-Whenever you are creating new custom object,before saving that object you will find a section called Object Creation Options (Available only when custom object is first created),in that section you need to select Launch New Custom Tab Wizard after saving this custom object checkbox.And after saving you will find a field called tabstyle,there you need to select any according to your choice and after that do next next then save.
<br/><br/>Go to setup->search tabs->search your created object in object field->select any tab style->Next->Next->Save


2. 실습4- levelClass_tr: doInsertLevelClass() Error
<br/>LevelClassTrigger: execution of BeforeInsert caused by: System.NullPointerException: Attempt to de-reference a null object Class.LevelClass_tr.doInsertLevelClass: line 37, column 1 Class.LevelClass_tr.beforeInsert: line 15, column 1 Class.TriggerHandler.run: line 42, column 1 Trigger.LevelClassTrigger: line 2, column 1

3. 실습5- ChangeInfo_tr: Student__c lookup 필드 조회 오류
<br/>relation이니까 c 대신 r을 사용하면 nullPointerException 발생
<br/>->Salesforce doesn't return values from related object's fields, though it will not give you the error rather it returns null.

4. 실습5- IsApproved Checkbox -> boolean값임

5. 실습5- ChangeInfo_tr: doUpdateInfo() Error 1(NullPointerException)
<br/>ChangeInfoTrigger: execution of BeforeUpdate caused by: System.NullPointerException: Attempt to de-reference a null object Class.ChangeInfo_tr.doUpdateInfo: line 29, column 1 Class.ChangeInfo_tr.beforeUpdate: line 19, column 1 Class.TriggerHandler.run: line 45, column 1 Trigger.ChangeInfoTrigger: line 2, column 1

<br/><br/>참고: https://salesforce.stackexchange.com/questions/188460/why-does-r-result-in-a-null-value

6. 실습5- ChangeInfo_tr: doUpdateInfo() Error 2(SObjectException)
<br/>ChangeInfoTrigger: execution of BeforeUpdate caused by: System.SObjectException: SObject row was retrieved via SOQL without querying the requested field: ChangeInfo__c.IsApproved__c Class.ChangeInfo_tr.doUpdateInfo: line 35, column 1 Class.ChangeInfo_tr.beforeUpdate: line 26, column 1 Class.TriggerHandler.run: line 45, column 1 Trigger.ChangeInfoTrigger: line 2, column 1

<br/>
<br/>Before triggers - 데이터베이스에 저장하기 전에 레코드 값을 업데이트하거나 유효성을 검사하는 데 사용됩니다.
<br/>After triggers - 시스템에서 설정한 필드 값(예: 레코드의 ID 또는 LastModifiedDate 필드)에 액세스 및 다른 레코드의 변경 사항에 영향을 미치는 데 사용됩니다. after trigger가 발생한 레코드는 읽기 전용입니다.

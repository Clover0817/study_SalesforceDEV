Dynamic Query <br/>
System.QueryException: unexpected token: ')' 오류 발생 <br/>
 <br/>
String strQuery = ''; <br/>
strQuery += 'SELECT Id, ParentId, Parent.OwnerId, UserOrGroupId, UserOrGroup.name, AccessLevel, RowCause, LastModifiedDate, LastModifiedById, IsDeleted '; <br/>
strQuery += 'FROM BO__share '; <br/>
strQuery += 'WHERE RowCause = \'Manual\' '; <br/>
strQuery += 'AND   AccessLevel = \'Read\' '; <br/>
strQuery += 'AND   UserOrGroupId IN '+GroupId+' '; <br/>
 <br/>
strQuery 출력 결과 -> SELECT Id, ParentId, Parent.OwnerId, UserOrGroupId, UserOrGroup.name, AccessLevel, RowCause, LastModifiedDate, LastModifiedById, IsDeleted FROM BO__share WHERE RowCause = 'Manual' AND   AccessLevel = 'Read' AND   UserOrGroupId IN () <br/>
 <br/>
 <br/>
IN ('~~~~','~~~~~') -> GroupId list 각 값에 '' 추가해줘야 함 <br/>

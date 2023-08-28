there is no difference between these two, use whichever you prefer
1. List<Account> exampleOne = [SELECT Id, Name FROM Account WHERE Name = 'John'];
2. List<Account> exampleTwo = new List<Account>([SELECT Id, Name FROM Account WHERE Name = 'John']);

Apex의 SOQL 문에서, Apex 코드 변수 및 표현식을 참조하기 위해서는 앞에 콜론(:)을 사용해 SOQL 문 내에서 지역 변수를 사용해야, 이를 binding한다고 칭함 <br/>
예시) <br/>
public static List<Contact> searchForContacts(String lastName, String postalCode) { <br/>
    List<Contact> listContact = [SELECT Id, Name FROM Contact WHERE LastName = :lastName AND MailingPostalCode = :postalCode]; <br/>
    return listContact; <br/>
} <br/>

<br/>
*개발 표준 naming <br/>
-test class: _test<br/>
-batch class: _ba<br/>
-trigger: _tr<br/>
-formula: fm_<br/>
-rollup: ru_<br/>

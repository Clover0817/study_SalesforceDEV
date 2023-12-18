test class fail:: Too many SOQL queries: 101 에러 날 때, <br/>
<br/>
<br/>
By using the Test.startTest() & Test.stopTest() you get 2X governer limits.<br/>
In nutshell you have 2 context.<br/>
1>out side of Test.startTest() & Test.stopTest() and<br/>
2>inside of Test.startTest() & Test.stopTest().<br/>
In both context you get separate limits.<br/>
To fix this issue what you will have to do is:<br/>
1>Optimize and see if you can reduce the queries in trigger<br/>
2>Reduce the number of objects you are inserting<br/>
3>You can skip unnecessary trigger execution by checking if trigger being 4>called by Test method if(Test.isRunningTest())<br/>
5>in worst case you can use SeeAllData = true [not recommended].<br/>
Link: https://salesforce.stackexchange.com/questions/105372/too-many-soql-queries-101-issue-with-unit-test-methods<br/>
<br/>
-> 한 테스트 메서드에 다 호출하지 말고 여러 테스트 메서드로 찢어서 Test.startTest()/Test.stopTest()로 묶어주기<br/>

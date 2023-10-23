-object에 정의되어 있는 필드인데 쿼리 작성 시 왜 빨간 줄이 가는지? <br/>
 <br/>
올바른 이름 사용: 필드 이름이 정확한지 확인하십시오. 대소문자가 일치해야 합니다. Salesforce 필드 이름은 대소문자를 구분합니다. -> 문제없음 <br/>
 <br/>
접근 권한: 현재 사용자의 접근 권한을 확인하십시오. 필드가 사용자에게 허용되는지 확인하고 필요한 권한이 있는지 확인하십시오. -> Hidden으로 되어 있긴 한데.. <br/>
 <br/>
필드가 쿼리 가능한지 확인: 일부 특수한 타입의 필드 (예: 계산된 필드)는 SOQL에서 쿼리할 수 없을 수 있습니다. 필드 유형을 확인하십시오. -> 문제없음 <br/>
 <br/>
API 이름 사용: Salesforce에서는 필드에 두 가지 이름을 할당합니다. 레이블과 API 이름이 있습니다. 레이블은 사용자가 볼 수 있는 텍스트이고, API 이름은 데이터베이스에서 사용됩니다. API 이름을 사용하여 쿼리해야 합니다. -> 문제없음 <br/>
 <br/>
오브젝트 이름 확인: 필드가 속한 오브젝트의 이름을 확인하십시오. 필드 이름 앞에 오브젝트 이름을 명시해야 합니다. -> 문제없음 <br/>
 <br/>
쿼리 문법 확인: SOQL 문법을 정확하게 사용하고 있는지 확인하십시오. 필드 이름을 적절한 위치에 사용하고 쿼리 구문을 올바르게 사용했는지 확인하십시오. -> 문제없음 <br/>
 <br/>
필드가 정의되어 있는지 확인: 필드가 실제로 Salesforce org에 정의되어 있는지 확인하십시오. Salesforce 관리자 또는 개발자로부터 필드가 생성되었는지 확인하세요. -> 문제없음 <br/>
 <br/>
캐시 또는 브라우저 문제: 때로는 브라우저 캐시 문제로 인해 Salesforce에서 변경된 내용이 정상적으로 표시되지 않을 수 있습니다. 브라우저 캐시를 지우고 다시 시도해 보세요. -> 아마 문제없음 <br/>
 <br/>
 <br/>
Intellij 상에서, 프로젝트 우클릭-illuminatedCloud-Generate Offline Symbol Table 누르니 해결됨 <br/>
 <br/>
2.  report page controller test class 작성방법 <br/>
 <br/>
 <br/>
클래스를 테스트하기 위한 유닛 테스트를 작성하는 것은 Salesforce 개발에서 중요한 부분입니다. 여기에는 KDC_ReturnedProductReportController 클래스를 테스트하는 간단한 예제가 있습니다. <br/>
 <br/>
 <br/>
@isTest <br/>
private class KDC_ReturnedProductReportControllerTest { <br/>
    static testMethod void testController() { <br/>
        // 테스트 데이터 생성 <br/>
        Return__c testReturn = new Return__c( <br/>
            Type__c = 'Test Type', <br/>
            ReturnedDate__c = Date.today(), <br/>
            Reason__c = 'Test Reason', <br/>
            FinalDecision__c = 'Test Decision' <br/>
        ); <br/>
        insert testReturn; <br/>
 <br/>
        ReturnLineItem__c testLineItem = new ReturnLineItem__c( <br/>
            l_Return__c = testReturn.Id, <br/>
            LotNo__c = 'Test Lot', <br/>
            DeliveryQuantities__c = 10, <br/>
            ReturnQuantities__c = 5, <br/>
            QAResult__c = 'Pass', <br/>
            Decision__c = 'Accept' <br/>
        ); <br/>
        insert testLineItem; <br/>
 <br/>
        ReturnDisposalPlan__c testDisposalPlan = new ReturnDisposalPlan__c( <br/>
            Return__c = testReturn.Id, <br/>
            Department__c = 'Test Department', <br/>
            Opinion__c = 'Test Opinion' <br/>
        ); <br/>
        insert testDisposalPlan; <br/>
 <br/>
        // 페이지 컨트롤러 인스턴스 생성 <br/>
        PageReference pageRef = Page.YourPageName; // 여기서 YourPageName을 실제 페이지 이름으로 바꾸세요. <br/>
        Test.setCurrentPage(pageRef); <br/>
        ApexPages.currentPage().getParameters().put('recordId', testReturn.Id); <br/>
        KDC_ReturnedProductReportController controller = new KDC_ReturnedProductReportController(); <br/>
 <br/>
        // 테스트 검증 <br/>
        System.assertEquals(testReturn.Type__c, controller.objReturn.Type__c); <br/>
        System.assertEquals(testReturn.Reason__c, controller.objReturn.Reason__c); <br/>
        // ... 다른 필드에 대한 테스트 추가 <br/>
 <br/>
        System.assertEquals(testLineItem.LotNo__c, controller.listReturnLineItem[0].LotNo__c); <br/>
        // ... 다른 필드에 대한 테스트 추가 <br/>
 <br/>
        System.assertEquals(testDisposalPlan.Department__c, controller.listReturnDisposalPlan[0].Department__c); <br/>
        // ... 다른 필드에 대한 테스트 추가 <br/>
    } <br/>
} <br/>
 <br/>
위 코드는 KDC_ReturnedProductReportController 클래스를 테스트하는 간단한 유닛 테스트입니다. @isTest 어노테이션으로 테스트 클래스를 정의하고, testController 메서드에서 필요한 테스트 데이터를 생성한 다음 페이지 컨트롤러를 인스턴스화하고 필드 값을 확인합니다. <br/>
 <br/>
주의할 점: <br/>
 <br/>
테스트 데이터를 적절히 생성하여 컨트롤러의 동작을 시뮬레이션합니다. <br/>
페이지 컨트롤러의 생성자에서 ApexPages.currentPage().getParameters().put('recordId', testReturn.Id); 를 사용하여 페이지 파라미터를 설정합니다. <br/>
각 필드의 값을 확인하여 예상대로 동작하는지 확인합니다. <br/>
 <br/>
-에러1: System.DmlException: Insert failed. First exception on row 0; first error: FIELD_CUSTOM_VALIDATION_EXCEPTION, You must select Account or Claim record. <br/>
 <br/>
Account obj 새로 생성하려고 했는데, 일부 필드 테스트데이터가 안 들어가서 <br/>
그냥 실존하는 Account obj Id 집어 넣어서 테스트했더니 됐음 <br/>

code coverage: 100%

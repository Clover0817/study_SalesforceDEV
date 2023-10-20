국도화학 PDF 생성 업무..


1. salesforce visualforce page에서 <td colspan="3">{!objReturn.Type__c}</td> 출력할 때, 만약 objReturn.Type__c가 'Nonconformity'이면 '제품 불량 Nonconformity'로 출력이 되도록 하고 싶다. <br/>
<br/>
Salesforce Visualforce 페이지에서 필드 값을 조건에 따라 다르게 출력하려면 Apex 코드 블록 내에서 조건을 검사하고 값을 조작해야 합니다. 아래는 예시 코드입니다:<br/>
<br/>
<apex:outputPanel><br/>
    <apex:variable var="formattedType" value="{!IF(objReturn.Type__c == 'Nonconformity', '제품 불량 Nonconformity', objReturn.Type__c)}" /><br/>
    <td colspan="3">{!formattedType}</td><br/>
</apex:outputPanel><br/>
<br/>
<apex:outputPanel>: 이 태그는 렌더링된 결과물을 묶어주는 컨테이너입니다.<br/>
<br/>
<apex:variable>: 이 태그는 변수를 정의합니다. var 속성은 변수의 이름을, value 속성은 해당 변수의 값을 정의합니다.<br/>
<br/>
IF(objReturn.Type__c == 'Nonconformity', '제품 불량 Nonconformity', objReturn.Type__c): 이 부분은 조건문입니다. 만약 objReturn.Type__c가 'Nonconformity'와 같다면 '제품 불량 Nonconformity'를 반환하고, 그렇지 않으면 objReturn.Type__c를 반환합니다.<br/>
<br/>
{!formattedType}: 변수 formattedType의 값을 출력합니다.<br/>
<br/>
이렇게 하면 objReturn.Type__c가 'Nonconformity'인 경우 '제품 불량 Nonconformity'가 출력되고, 그렇지 않은 경우 objReturn.Type__c의 값이 출력됩니다.<br/>
<br/>
<br/>
<br/>
2. 여러개의 IF 조건을 주고 싶다면,<br/>
<br/>
 IF 함수를 중첩하여 사용할 수 있습니다. 이를 "Nested IF" 또는 "중첩된 IF"라고 합니다.<br/>
<br/>
예를 들어, objReturn.Type__c가 'Nonconformity', 'Condition2', 'Condition3'일 때 각각 다른 값을 출력하고 싶다면 아래와 같이 중첩된 IF를 사용할 수 있습니다:<br/>
<br/>
<apex:outputPanel><br/>
    <apex:variable var="formattedType" <br/>
                   value="{!IF(objReturn.Type__c == 'Nonconformity', '제품 불량 Nonconformity', <br/>
                                IF(objReturn.Type__c == 'Condition2', '조건 2', <br/>
                                   IF(objReturn.Type__c == 'Condition3', '조건 3', objReturn.Type__c)))}" /><br/>
    <td colspan="3">{!formattedType}</td><br/>
</apex:outputPanel><br/>
위의 예시에서는 첫 번째 IF 문에서 'Nonconformity'를 체크하고, 해당하는 경우 '제품 불량 Nonconformity'를 반환합니다. 그렇지 않은 경우, 두 번째 IF 문에서 'Condition2'를 체크하고, 해당하는 경우 '조건 2'를 반환합니다. 마지막으로, 세 번째 IF 문에서 'Condition3'를 체크하고, 해당하는 경우 '조건 3'를 반환합니다. 만약 모든 조건에 해당하지 않는다면 objReturn.Type__c의 값이 반환됩니다.<br/>
<br/>
이렇게 중첩된 IF 문을 사용하면 여러 개의 조건을 처리할 수 있습니다.<br/>
<br/>
3. <br/>
{!ReturnItem.DeliveryQuantities__c}  필드가 숫자인데 소수점 3자리까지 표현될 수 있도록 해야할 경우,<br/>
<br/>
Visualforce 페이지에서 숫자 필드의 출력 형식을 조절하려면 apex:outputText 태그와 value 속성을 사용하여 출력 형식을 지정할 수 있습니다.<br/>
<br/>
예를 들어, 숫자를 소수점 3자리까지 표현하려면 다음과 같이 할 수 있습니다:<br/>
<br/>
<br/>
<td><br/>
    <apex:outputText value="{0, number, ###0.000}"><br/>
        <apex:param value="{!ReturnItem.DeliveryQuantities__c}" /><br/>
    </apex:outputText><br/>
</td><br/>
<td><br/>
    <apex:outputText value="{0, number, ###0.000}"><br/>
        <apex:param value="{!ReturnItem.ReturnQuantities__c}" /><br/>
    </apex:outputText><br/>
</td><br/>
위의 코드에서, {0, number, ###0.000}는 출력 형식을 지정하는 패턴입니다. 이 패턴은 최대 3자리의 정수와 소수점 이하 3자리까지를 허용합니다.<br/>
<br/>
<apex:param>은 apex:outputText의 값을 지정하는 데 사용됩니다. 각각의 {!ReturnItem.DeliveryQuantities__c}와 {!ReturnItem.ReturnQuantities__c}를 파라미터로 전달하여 출력 형식을 적용합니다.<br/>
<br/>
이렇게 하면 DeliveryQuantities__c와 ReturnQuantities__c 필드의 값을 소수점 3자리까지 표시할 수 있습니다.<br/>
<br/>
4. 잘림 문제 해결<br/>
-> 제품이나 품질 파트 사이즈가 매번 달라서 깔끔하게 자르긴 힘들듯

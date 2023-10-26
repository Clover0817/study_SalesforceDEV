1. table border 1px보다 작게 설정이 가능한지? <br/>
<br/>
가능. table border뿐 아니라, th, td에 대해서도 border 설정 필요<br/>
<br/>
2. 숫자표시 3자리마다 , 찍어야 할 경우<br/>
apex 문법상 #,###.000<br/>
<br/>
3. 1./2./3... 자동 줄바꿈이 필요할 때<br/>
그냥 필드 출력하지 않고, <apex:outputField value="{!objReturn.Reason__c}"/>를 사용<br/>
<br/>
4. picklist 값 출력시, API명이 아닌 Label이 출력되도록<br/>
<br/>
1) chatgpt 방식 -> 잘 안먹힘<br/>
Salesforce Visualforce 페이지에서 Picklist의 API 이름이 아닌 Label을 출력하려면, Apex 코드를 사용하여 해당 Picklist 필드의 Label을 가져와야 합니다. 이를 위해 다음의 단계를 따를 수 있습니다:<br/>
<br/>
Controller 또는 Controller Extension 생성:<br/>
Visualforce 페이지에서 사용할 Controller 또는 Controller Extension을 만듭니다. 이 컨트롤러에서는 Picklist 필드의 Label을 가져와서 페이지에 전달할 것입니다.<br/>
<br/>
Picklist 필드의 Label 가져오기:<br/>
Apex에서 Schema.SObjectField 클래스를 사용하여 SObject의 필드 정보를 가져올 수 있습니다. 이를 통해 필드의 Label을 얻을 수 있습니다.<br/>
<br/>
예를 들어, 만약 객체가 MyObject__c이고 Picklist 필드가 Status__c라면:<br/>
<br/>
Schema.SObjectField statusField = MyObject__c.Status__c;<br/>
String statusFieldLabel = statusField.getDescribe().getLabel();<br/>
Visualforce 페이지에서 Label 출력:<br/>
Visualforce 페이지에서 컨트롤러로부터 전달받은 Label을 출력합니다.<br/>
<br/>
예를 들어:<br/>
<br/>
<apex:outputText value="{!statusFieldLabel}" /><br/>
이렇게 하면 해당 Picklist 필드의 Label이 출력됩니다.<br/>
<br/>
전체 예시 코드는 다음과 같습니다:<br/>
<br/>
Controller (또는 Controller Extension):<br/>
 <br/>
public with sharing class MyController {<br/>
    public String statusFieldLabel { get; set; }<br/>
    <br/>
    public MyController() {<br/>
        Schema.SObjectField statusField = MyObject__c.Status__c;<br/>
        statusFieldLabel = statusField.getDescribe().getLabel();<br/>
    }<br/>
}<br/>
Visualforce 페이지:<br/>
 <br/>
<apex:page controller="MyController"><br/>
    <apex:outputText value="{!statusFieldLabel}" /><br/>
</apex:page><br/>
이제 페이지를 열면 해당 Picklist 필드의 Label이 출력됩니다.<br/>
<br/>
2) googling -> 잘 안먹힘<br/>
To get the label for a picklist value, you can use Apex:<br/>
<br/>
public String getPLVLabel(SObjectField fld, String val)<br/>
  Schema.DescribeFieldResult dfr = fld.getDescribe();<br/>
  List<Schema.PicklistEntry> plvs = dfr.getPicklistValues();<br/>
  <br/>
  for (PicklistEntry ple: plvs) {<br/>
      if (plv.getValue() == val) {return plv.getLabel();}<br/>
  }<br/>
  return null;<br/>
 }<br/>
Because you are trying to get the label in the VF email template's subject, using a custom component and controller is not going to help because subject is an attribute of messaging:emailTemplate and it can only be:<br/>
<br/>
a constant<br/>
a merge field of recipientType<br/>
a merge field of relatedToType<br/>
So, you're going to need a shadow field on Case called PickMe_AsLabel__c that you populate in the before update/before insert Case trigger using the above ccode, invoked like this:<br/>
<br/>
for (Case cs : Trigger.new) {<br/>
   cs.PickMe_AsLabel__c = new MyUtil.getPlvLabel(Case.PickMe__c,cs.PickMe__c);<br/>
}<br/>
<br/>
<br/>
3) <apex:outputField value="{!ReturnDisposalPlan.Opinion__c}"/><br/>
그냥 apex:outputField 쓰니까 됨 <br/>
<br/>
5. pdf 페이지 넘어갈 때 줄 중간에 잘리는 것 방지<br/>
page-break-inside: avoid; 사용.. body style에 넣으니 테이블 전반에 적용됨<br/>
<br/>
6. lwc save, close 버튼 중앙으로 옮기고 싶음<br/>
Lightning Web Components(LWC)에서 버튼을 가운데로 이동시키려면 여러 가지 방법이 있습니다. 아래에 몇 가지 방법을 제시해 드리겠습니다.<br/>
<br/>
Flexbox를 사용한 중앙 정렬:<br/>
<br/>
HTML:<br/>
<br/>
html<br/>
Copy code<br/>
<div class="container"><br/>
    <lightning-button label="버튼" onclick={handleClick}></lightning-button><br/>
</div><br/>
CSS:<br/>
<br/>
css<br/>
Copy code<br/>
.container {<br/>
    display: flex;<br/>
    justify-content: center;<br/>
    align-items: center;<br/>
    height: 100vh; /* 높이를 조절하여 화면 중앙에 정렬합니다 */<br/>
}<br/>
Grid를 사용한 중앙 정렬:<br/>
<br/>
HTML:<br/>
<br/>
html<br/>
Copy code<br/>
<div class="container"><br/>
    <lightning-button label="버튼" onclick={handleClick}></lightning-button><br/>
</div><br/>
CSS:<br/>
<br/>
css<br/>
Copy code<br/>
.container {<br/>
    display: grid;<br/>
    place-content: center;<br/>
    height: 100vh; /* 높이를 조절하여 화면 중앙에 정렬합니다 */<br/>
}<br/>
Margin을 사용한 중앙 정렬:<br/>
<br/>
HTML:<br/>
<br/>
html<br/>
Copy code<br/>
<lightning-button class="centered-button" label="버튼" onclick={handleClick}></lightning-button><br/>
CSS:<br/>
<br/>
css<br/>
Copy code<br/>
.centered-button {<br/>
    display: block;<br/>
    margin: 0 auto;<br/>
}<br/>
부모 컨테이너의 text-align을 사용한 중앙 정렬:<br/>
<br/>
<div class="container"><br/>
    <lightning-button label="버튼" onclick={handleClick}></lightning-button><br/>
</div><br/>
CSS:<br/>
<br/>
css<br/>
Copy code<br/>
.container {<br/>
    text-align: center;<br/>
}<br/>

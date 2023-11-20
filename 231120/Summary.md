test class에는 하드코딩된 data Id를 사용하지 말 것 <br/>
 <br/>
 <br/>
모달닫기 <br/>
$A.get("e.force:closeQuickAction").fire(); <br/>
 <br/>
popup modal 생성 참고 <br/>
https://www.sfdcpoint.com/salesforce/modal-popup-lightning-component-salesforce/#google_vignette <br/>
 <br/>
lightning component popup 창에서 String 줄바꿈이 안됨 <br/>
1->unescapeHTML 활용 <br/>
<aura:unescapedHtml value="{! v.displayText }" />  <br/>

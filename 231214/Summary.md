화면단에서 체크박스 필드 체크여부 표시 하고 싶을 때, <br/>
checked 값에 해당 필드값 추가 <br/>
 <br/>
<lightning:input type="checkbox" variant="label-hidden" 
                                             name="{! index }"
                                             value="{! item.IsChecked__c }"
                                             onchange="{! c.handleChangeCheckbox }"
                                             disabled="{! v.isReadOnly }"
                                             checked="{! item.IsChecked__c }"
 />
 <br/> <br/>
만약, 모두 check된 상태로 만들고 싶으면 <br/>
checked="true" <br/>
 <br/>
또는 unchecked 상태로 만들고 싶으면 <br/>
checked="false" <br/>

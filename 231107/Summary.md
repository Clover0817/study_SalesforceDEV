빙고게임 개발 1차 <br/>
<br/>
<br/>
1. object, field 생성<br/>
Cell00~44<br/>
<br/>
빙고수 세도록 하는 필드 formula 생성시 <br/>
<br/>
IF(<br/>
    Cell00__r.fm_IsSelected__c && Cell11__r.fm_IsSelected__c &&C ell22__r.fm_IsSelected__c && Cell33__r.fm_IsSelected__c && Cell44__r.fm_IsSelected__c ||<br/>
    Cell04__r.fm_IsSelected__c && Cell13__r.fm_IsSelected__c && Cell22__r.fm_IsSelected__c && Cell31__r.fm_IsSelected__c && Cell40__r.fm_IsSelected__c ||<br/>
    Cell00__r.fm_IsSelected__c && Cell04__r.fm_IsSelected__c && Cell13__r.fm_IsSelected__c && Cell11__r.fm_IsSelected__c && Cell22__r.fm_IsSelected__c ||<br/>
    Cell40__r.fm_IsSelected__c && Cell31__r.fm_IsSelected__c && Cell22__r.fm_IsSelected__c && Cell13__r.fm_IsSelected__c && Cell04__r.fm_IsSelected__c ||<br/>
    Cell00__r.fm_IsSelected__c && Cell10__r.fm_IsSelected__c && Cell20__r.fm_IsSelected__c && Cell30__r.fm_IsSelected__c && Cell40__r.fm_IsSelected__c ||<br/>
    Cell01__r.fm_IsSelected__c && Cell11__r.fm_IsSelected__c && Cell21__r.fm_IsSelected__c && Cell31__r.fm_IsSelected__c && Cell41__r.fm_IsSelected__c ||<br/>
    Cell02__r.fm_IsSelected__c && Cell12__r.fm_IsSelected__c && Cell22__r.fm_IsSelected__c && Cell32__r.fm_IsSelected__c && Cell42__r.fm_IsSelected__c ||<br/>
    Cell03__r.fm_IsSelected__c && Cell13__r.fm_IsSelected__c && Cell23__r.fm_IsSelected__c && Cell33__r.fm_IsSelected__c && Cell43__r.fm_IsSelected__c ||<br/>
    Cell04__r.fm_IsSelected__c && Cell14__r.fm_IsSelected__c && Cell24__r.fm_IsSelected__c && Cell34__r.fm_IsSelected__c && Cell44__r.fm_IsSelected__c ||<br/>
    Cell00__r.fm_IsSelected__c && Cell01__r.fm_IsSelected__c && Cell02__r.fm_IsSelected__c && Cell03__r.fm_IsSelected__c && Cell04__r.fm_IsSelected__c ||<br/>
    Cell10__r.fm_IsSelected__c && Cell11__r.fm_IsSelected__c && Cell12__r.fm_IsSelected__c && Cell13__r.fm_IsSelected__c && Cell14__r.fm_IsSelected__c ||<br/>
    Cell20__r.fm_IsSelected__c && Cell21__r.fm_IsSelected__c && Cell22__r.fm_IsSelected__c && Cell23__r.fm_IsSelected__c && Cell24__r.fm_IsSelected__c ||<br/>
    Cell30__r.fm_IsSelected__c && Cell31__r.fm_IsSelected__c && Cell32__r.fm_IsSelected__c && Cell33__r.fm_IsSelected__c && Cell34__r.fm_IsSelected__c ||<br/>
    Cell40__r.fm_IsSelected__c && Cell41__r.fm_IsSelected__c && Cell42__r.fm_IsSelected__c && Cell43__r.fm_IsSelected__c && Cell44__r.fm_IsSelected__c,<br/>
    1,<br/>
    0<br/>
)<br/>
<br/>
<br/>
You have reached the maximum number of 15 unique object references on Bingo Board<br/>
You must remove at least 10 unique relationship(s) in order to save this Formula Field.<br/>
Related objects referenced in this Formula Field 에러남<br/>
<br/>
해결 방법:<br/>
<br/>
포뮬라 필드에서 참조하는 관련 객체 수를 줄이십시오. 필요하지 않은 관련 객체를 포뮬라 필드에서 사용하지 않도록 제거하십시오.<br/>
포뮬라 필드를 분할하여 여러 개의 포뮬라 필드로 나누십시오. 이렇게 하면 하나의 포뮬라 필드에서 참조하는 관련 객체의 수를 줄일 수 있습니다.<br/>
더 간단한 포뮬라를 사용하여 필드를 계산하십시오. 필요한 경우 포뮬라를 단순화하거나 더 적은 수의 관련 객체를 참조하도록 수정하십시오.<br/>
<br/>
<br/>




lightning component table 생성 기본 틀
<aura:component implements="force:appHostable" >
    <table class="slds-table slds-table_bordered slds-table_cell-buffer">
        <thead>
        <tr class="slds-line-height_reset">
            <th class="slds-text-title_caps" scope="col">Header 1</th>
            <th class="slds-text-title_caps" scope="col">Header 2</th>
            <th class="slds-text-title_caps" scope="col">Header 3</th>
        </tr>
        </thead>
        <tbody>
        <aura:iteration items="{!v.tableData}" var="row">
            <tr>
                <td>{!row.field1}</td>
                <td>{!row.field2}</td>
                <td>{!row.field3}</td>
            </tr>
        </aura:iteration>
        </tbody>
    </table>
</aura:component>

lightning component에서 줄바꿈 하고 싶을 때 <br/>
 <br/>
<div class="memberContent">
    <aura:iteration items="{!v.selectedMembers}" var="member" indexVar="index">
        {!member.Name}&nbsp;
        <!-- 매 15번째 멤버마다 줄바꿈 -->
        <aura:if isTrue="{!((index + 1) % 15 == 0)}">
            <br/>
        </aura:if>
    </aura:iteration>
</div>
<br/>
 <aura:iteration items="{!v.selectedMembers}" var="member" indexVar="index"> <br/>
aura:if isTrue="{!((index + 1) % 15 == 0)}"<br/>
위 코드에서 indexVar를 사용하여 현재 반복이 몇 번째인지 알 수 있음. 그런 다음 {!((index + 1) % 15 == 0)}를 사용하여 15의 배수일 때마다 줄바꿈을 수행.

sfdc 폭죽 디자인 <br/>
https://www.sfdckid.com/2020/03/custom-confetti-celebration-in-lightning-component.html<br/>
<br/>
클릭 한번만 가능하게 하고 싶을 때<br/>
disabled 요소 활용<br/>
<button class="{! 'popular' + (v.buttonClicked ? ' clicked' : '') }" onclick="{!c.getPopularMembers}" disabled="{!v.buttonClicked}"><br/>
                <div class="button-text"><br/>
                    {!v.displayText}<br/>
                </div><br/>
            </button><br/>
<br/>
인기상 수상자 15명(혹은 그 이상)<br/>
<br/>
로직..<br/>
map<memberId, count><br/>
-> count 오름차순으로 정렬 후 15개를 자름<br/>
그 15개 중 가장 적은 숫자와 같은 count값을 가진 사람들까지 포함시킴(마지막 동점자가 여럿일 가능성에 대비해서)<br/>
<br/>

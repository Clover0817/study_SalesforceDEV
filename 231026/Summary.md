1. pdf 저장 후 자동 새로고침하게 하고 싶음 <br/>
window.location.reload(); -> 이걸 하면 pdf 창이 다시 나와서 안됨 <br/>
 <br/>
var siteURL = '/' + this.recordId; <br/>
window.location.replace(siteURL); 사용 <br/>
 <br/>
2. PDF Report 창 닫고 파일 클릭하면, 프리뷰가 왼쪽 상단에 잘려서 뜸 <br/>
 <br/>
Salesforce 페이지 스타일 확인: <br/>
 <br/>
Salesforce 페이지의 사용자 지정 스타일이 문제를 일으킬 수 있습니다. 스타일이 뷰어의 정상 작동을 방해하지 않는지 확인하세요. <br/>
 <br/>
 <br/>
->js에서 지정한 style 요소 때문이었음 <br/>
아래 부분 주석처리하니까 해결됨 <br/>
 <br/>
/* <br/>
        const modalContainer = '.modal-container{width: 80% !important; max-width: none !important; height: unset !important; max-height: unset !important;}'; <br/>
        this.customStyle = document.createElement('style'); <br/>
        this.customStyle.innerText = modalContainer; <br/>
        document.body.appendChild(this.customStyle); <br/>
        */ <br/>

({
    getInitData : function(component) {
        var action = component.get("c.getInitData");

        action.setParams({
            recordId : component.get("v.recordId")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                var returnValue = response.getReturnValue();
                console.log(returnValue);
                
                var options = returnValue.map(function(item) {
                    return { label: item.Name, value: item.Id };
                });
                
                component.set("v.options", options);
            } else if(state === "ERROR") {
                var errors = response.getError();
                if(errors) {
                    //참고 :에러가 났을경우는 주로 ShowToast 함수를 이용하여 토스트 메시지를 띄움
                    this.showToast("error", "실패");
                } else {
                    this.showToast("success", "성공");
                }
            }
        });
        $A.enqueueAction(action);
    },
    
    confirmChangeClass: function(component) {
        var action = component.get("c.confirmChangeClass");
        
        action.setParams({
            recordId : component.get("v.recordId"),
            classId : component.get("v.classId")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                this.showToast("success", "반 이동이 완료되었습니다.");
                $A.get("e.force:closeQuickAction").fire();
            }else if (state === "ERROR") {
                this.showToast("error", "반 이동에 실패하였습니다.");
            }
   	   });
       $A.enqueueAction(action);   
                           
    }, 
    showToast : function(type, message) {
        var evt = $A.get("e.force:showToast");
        evt.setParams({
            key : "info_alt"
            , type : type
            , message : message
        });
        evt.fire();
    }
});

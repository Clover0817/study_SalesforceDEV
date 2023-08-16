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
                var objStudent = {
                    'LastName' : returnValue['LastName'],
                    'ClassName' : returnValue['ClassName']
                };
                component.set("v.objStudent", objStudent);
            } else if(state === "ERROR") {
                var errors = response.getError();
                if(errors) {
                    //참고 :에러가 났을경우는 주로 ShowToast 함수를 이용하여 토스트 메시지를 띄움
                } else {
                    
                }
            }
        });
        $A.enqueueAction(action);
    },
});

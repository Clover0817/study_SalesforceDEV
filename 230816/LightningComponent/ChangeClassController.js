({
    getInitData: function(component, event, helper) {
        var action = component.get("c.getInitData");

        action.setParams({
            recordId : component.get("v.recordId")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var returnValue = response.getReturnValue();
                console.log(returnValue);
				var options = returnValue.map(function(item) {
                    return { label: item.Name, value: item.Id };
                });
                component.set("v.options", options);
            } else if (state === "ERROR") {
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

    confirmChangeClass : function(component, event, helper) {
        var selectedClassId = component.get("v.selectedClassId");
        
        if (!selectedClassId) {
            helper.showToast("error", "Please select a class.");
            return;
        }

        var overlayLib = component.find("overlayLib");
        var modalPromise = overlayLib.showCustomModal({
            header: "Confirm",
            body: "정말로 반 이동을 하시겠습니까?",
            showCloseButton: true,
            footer: [
                {
                    label: "Cancel",
                    variant: "neutral",
                    onclick: function() {
                        overlayLib.notifyClose();
                    }
                },
                {
                    label: "Confirm",
                    variant: "brand",
                    onclick: function() {
                        overlayLib.notifyClose();
                        helper.confirmChangeClass(component, selectedClassId);
                    }
                }
            ]
        });
    },
    
    handleCancel: function(component, event, helper) {
       $A.get("e.force:closeQuickAction").fire();
    }
})

({
    confirmChangeClass: function(component, classId) {
        var action = component.get("c.confirmChangeClass");

        action.setParams({
            contactId : component.get("v.recordId"),
            classId : classId
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                this.showToast("success", "반 이동이 완료되었습니다.");
            } else if (state === "ERROR") {
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
